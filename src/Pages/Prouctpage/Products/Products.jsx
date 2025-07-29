import { useState } from "react";
import Cardproducts from "../Cardproducts/Cardproducts";
import useProduct from "../../../Hooks/useProduct";

const Products = () => {
  const [search, setSearch] = useState("");
  const [product] = useProduct(search);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  return (
    <div>
      {/* Search Section */}
      <div className="mt-6 mb-7">
        <div
          className="w-full flex flex-col items-center bg-gray-600 p-10 py-20 text-white"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            backgroundPosition: "center center",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1573079487717-f8ebae0b1539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')",
          }}
        >
          <h1 className="text-4xl font-bold mb-2">Get Search</h1>
          <p className="text-lg mb-5">
            Find out the Technology product around the world
          </p>

          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-center w-full max-w-xl"
          >
            <input
              type="text"
              name="search"
              className="flex-1 p-3 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Name, Title..."
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-indigo-500 text-white p-3 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg hover:bg-indigo-400 transition duration-200"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Card Products */}
      <div className="grid md:grid-cols-3 gap-5">
        {product.length ? (
          product.map((item) => (
            <Cardproducts key={item._id} product={item} />
          ))
        ) : (
          <div className="text-center col-span-full text-gray-500">
            No products found. Try a different search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
