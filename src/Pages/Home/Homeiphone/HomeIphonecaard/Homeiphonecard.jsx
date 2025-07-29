import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Homeiphonecard = ({ product }) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageLoad = () => setLoading(false);
  const handleSeeDetailsClick = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { name, price, image, brand, rating, category, description, stock } =
    product;

  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.03] hover:shadow-2xl duration-300">
      {/* Loader Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-base-100 bg-opacity-80 z-10 rounded-lg">
          <ClipLoader color="#3B82F6" size={40} />
        </div>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        onLoad={handleImageLoad}
        className={`w-full h-64 object-cover rounded-t-lg transition-opacity duration-500 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-[260px] bg-base-100">
        <div>
          <h2 className="text-xl font-semibold truncate" title={name}>
            {name}
          </h2>
          <p className="mt-2 text-base-content text-opacity-70 text-sm line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold">{`$${price}`}</span>
          <div className="flex items-center space-x-2 text-sm">
            <div className="badge badge-warning font-semibold select-none">
              ⭐ {rating}
            </div>
            <div className="badge badge-outline select-none">
              Stock: {stock}
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <NavLink
            to="/product"
            className="btn btn-primary flex-1 text-base font-semibold"
          >
            Show All
          </NavLink>
          <button
            onClick={handleSeeDetailsClick}
            className="btn btn-outline btn-primary flex-1 text-base font-semibold"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <input
            type="checkbox"
            id={`modal-${product.id}`}
            className="modal-toggle"
            checked
            readOnly
          />
          <label
            htmlFor={`modal-${product.id}`}
            className="modal cursor-pointer fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
          >
            <label
              className="modal-box max-w-3xl relative bg-base-100 rounded-lg p-6 overflow-y-auto max-h-[90vh]"
              htmlFor=""
              onClick={e => e.stopPropagation()} // prevent modal close on content click
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="btn btn-sm btn-circle absolute right-4 top-4"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={image}
                  alt={name}
                  className="w-full sm:w-48 h-48 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{name}</h3>
                  <p className="text-base-content text-opacity-70 mb-4">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="badge badge-primary font-semibold">
                      Brand: {brand}
                    </span>
                    <span className="badge badge-secondary font-semibold">
                      Category: {category}
                    </span>
                    <span className="badge badge-warning font-semibold">
                      Rating: {rating}
                    </span>
                    <span className="badge badge-outline font-semibold">
                      Stock: {stock}
                    </span>
                  </div>

                  <div className="text-3xl font-extrabold mb-6">${price}</div>

                  <button onClick={closeModal} className="btn btn-error w-full">
                    Close
                  </button>
                </div>
              </div>
            </label>
          </label>
        </>
      )}
    </div>
  );
};

export default Homeiphonecard;
