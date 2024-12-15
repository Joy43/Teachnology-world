import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/usecart";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/AxiosSequre";

const Cardproducts = ({ product }) => {
  const { name, price, image, description, brand, _id } = product;
  const [refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        productId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center  ">
      <div
        data-aos="fade-up-right"
        className="max-w-sm w-full  rounded-lg shadow-lg overflow-hidden "
      >
        <div>
          <img
            className="h-[275px] w-[350px] rounded-lg object-cover transition-opacity duration-500"
            src={image}
            alt="product"
          />
        </div>

        <div className="flex flex-col gap-1 mt-4 px-4">
          <h2 className="text-lg font-semibold ">{name}</h2>
          <span className="font-normal ">{description}</span>
          <span className="font-semibold ">${price}</span>
        </div>

        <div className="flex gap-4 mt-4 px-4">
          <button
            aria-label="Yellow"
            className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"
          ></button>
          <button
            aria-label="Red"
            className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"
          ></button>
          <button
            aria-label="Blue"
            className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"
          ></button>
          <button
            aria-label="Black"
            className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"
          ></button>
        </div>

        <div className="mt-4 p-4 border-t border-gray-200 ">
          <button
            onClick={handleAddToCart}
            className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline  "
          >
            <span className="text-base">Add to Cart</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardproducts;
