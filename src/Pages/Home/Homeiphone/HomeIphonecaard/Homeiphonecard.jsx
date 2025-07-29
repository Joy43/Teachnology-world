import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Homeiphonecard = ({ product }) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageLoad = () => setLoading(false);
  const handleSeeDetailsClick = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { name, price, image, brand, rating, category, description, stock } = product;

  return (
    <div className="max-w-[350px] space-y-4 rounded-lg  p-6 shadow-lg ">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <ClipLoader color="#4285F4" size={50} />
        </div>
      )}

      <img
        className={`h-[275px] w-[350px] rounded-lg object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
        src={image}
        alt={name}
        onLoad={handleImageLoad}
      />

      <div className="grid gap-2">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-sm text-gray-500  line-clamp-2">{description}</p>
        <div className="text-lg font-semibold">${price}</div>
      </div>

      <div className="flex gap-4">
        <NavLink to="/product">
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-slate-950">
            Show All
          </button>
        </NavLink>
        <button
          onClick={handleSeeDetailsClick}
          className="rounded-md border border-black px-4 py-2 text-sm    transition-colors duration-300 hover:bg-blue-600"
        >
          View Details
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-red-600 transition-colors duration-300 absolute top-4 right-4"
            >
              &times;
            </button>

            <div className="flex gap-4">
              <img className="w-32 h-32 rounded-lg object-cover" src={image} alt={name} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{brand}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">{name}</h3>
              <div className="flex flex-wrap gap-2 text-sm font-medium mt-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-lg">Rating: {rating}</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-lg">${price}</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg">Stock: {stock}</span>
              </div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{description}</p>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={closeModal}
                className="rounded-md border border-red-500 px-4 py-2 text-red-500 hover:bg-red-100 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homeiphonecard;
