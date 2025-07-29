import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/AxiosSequre";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/usecart";
import "./css/common.css";

const ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: "#4F46E5", // Indigo-600
      color: "#111827", // Gray-900
      fontWeight: "500",
      fontFamily: "Inter, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#9CA3AF", // Gray-400
      },
    },
    invalid: {
      iconColor: "#DC2626", // Red-600
      color: "#DC2626",
    },
  },
};

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { price: totalPrice }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardNumber = elements.getElement(CardNumberElement);
    const cardExpiry = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);
    if (!cardNumber || !cardExpiry || !cardCvc) return;

    const { error: paymentError } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumber,
      billing_details: {
        email: user?.email || "anonymous",
        name: user?.displayName || "anonymous",
      },
    });

    if (paymentError) {
      setError(paymentError.message);
      return;
    }

    setError("");

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumber,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous",
        },
      },
    });

    if (confirmError) {
      setError(confirmError.message);
    } else if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(),
        cartIds: cart.map((item) => item._id),
        menuItemIds: cart.map((item) => item.menuId),
        status: "pending",
      };

      const res = await axiosSecure.post("/payments", payment);
      refetch();

      if (res.data?.paymentResult?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Check your email for details.",
          timer: 3000,
          toast: true,
          position: "center",
          showConfirmButton: false,
        });

        navigate("/dashboard/paymentHistory");
      }
    }
  };

  return (
    <div className="checkout-card">
      <h2 className="checkout-title">Secure Payment</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label htmlFor="card-number" className="form-label">
          Card Number
        </label>
        <div className="StripeElement" id="card-number">
          <CardNumberElement options={ELEMENT_OPTIONS} />
        </div>

        <div className="card-details-row">
          <div className="card-details-item">
            <label htmlFor="card-expiry" className="form-label">
              Expiry Date
            </label>
            <div className="StripeElement" id="card-expiry">
              <CardExpiryElement options={ELEMENT_OPTIONS} />
            </div>
          </div>
          <div className="card-details-item">
            <label htmlFor="card-cvc" className="form-label">
              CVC
            </label>
            <div className="StripeElement" id="card-cvc">
              <CardCvcElement options={ELEMENT_OPTIONS} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="pay-button"
          disabled={!stripe || !clientSecret}
          aria-disabled={!stripe || !clientSecret}
        >
          Pay Now (${totalPrice.toFixed(2)})
        </button>

        {error && <p className="error-message">{error}</p>}
        {transactionId && (
          <p className="success-message">
            Payment successful! Transaction ID: <strong>{transactionId}</strong>
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
