import React from 'react';
import './Cardshow.css';

// Reusable Card Component
const Card = ({ imgSrc, title, description, price, rating, sells, isPopular }) => (
  <div className="flex flex-col justify-center h-screen">
    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <img src={imgSrc} alt={title} className="rounded-xl" />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-medium hidden md:block">Tech product</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292..." />
            </svg>
            <p className="text-gray-600 font-bold text-sm ml-1">
              {rating}
              <span className="text-gray-500 font-normal">({sells} sold)</span>
            </p>
          </div>
          <div className="text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656..." clipRule="evenodd" />
            </svg>
          </div>
          {isPopular && (
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              Popular
            </div>
          )}
        </div>
        <h3 className="font-black text-gray-800 md:text-3xl text-xl">{title}</h3>
        <p className="md:text-lg text-gray-500 text-base">{description}</p>
        <p className="text-xl font-black text-gray-800">
          ${price}
          <span className="font-normal text-gray-600 text-base">/dollar</span>
        </p>
      </div>
    </div>
  </div>
);

// Main Component
const Cardshow = () => {
  const products = [
    {
      imgSrc: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
      title: "World iPhone 12 Pro",
      description: "The best kept secret of The Bahamas is the country’s sheer size and diversity...",
      price: 110,
      rating: 4.96,
      sells: 76,
      isPopular: true,
    },
    {
      imgSrc: "https://i.ibb.co/BjwtkTz/web-developer.jpg",
      title: "The Latest HP Desktop Computer",
      description: "Explore the diversity of The Bahamas with 16 major islands...",
      price: 110,
      rating: 4.96,
      sells: 76,
      isPopular: true,
    },
    {
      imgSrc: "https://i.ibb.co/j4RLJ3W/nicolas-j-leclercq-q-DLLP0y-P7-FU-unsplash.jpg",
      title: "Modern Gaming Setup",
      description: "Experience the pinnacle of gaming setups with cutting-edge technology...",
      price: 150,
      rating: 4.9,
      sells: 50,
      isPopular: false,
    },
  ];

  return (
    <div className="container">
      <ul id="cards">
        {products.map((product, index) => (
          <li key={index} className="card">
            <Card {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cardshow;
