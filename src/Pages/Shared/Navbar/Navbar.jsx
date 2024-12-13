import { Link } from "react-router-dom";
import { MdDarkMode, MdOutlineDashboard } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import useCart from "../../../Hooks/usecart";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [cart,refetch] = useCart();

  // Logout handler
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // Dark mode toggle
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    setDarkMode((prevDarkMode) => !prevDarkMode);
    htmlElement.setAttribute(
      "data-theme",
      currentTheme === "business" ? "corporate" : "business"
    );
  };

  const themeIconSize = "30px";

  // Navigation options
  const navOptions = (
    <>
      <li className="flex items-center gap-4 hover:text-gray-400 transition-colors duration-300">
        <Link to="/product" className="grid grid-cols-[auto_1fr] items-center gap-2">
          <FaShoppingCart
            size="20px"
            className="transform hover:scale-125 transition-transform duration-300"
          />
          <div>
            <span className="block font-semibold">Products</span>
            <small className="block text-sm text-gray-500">Latest offer</small>
          </div>
        </Link>
      </li>
      <li className="flex items-center gap-4 hover:text-gray-400 transition-colors duration-300">
        <Link to="/contact" className="grid grid-cols-[auto_1fr] items-center gap-2">
          <MdOutlineDashboard
            size="20px"
            className="transform hover:scale-125 transition-transform duration-300"
          />
          <div>
            <span className="block font-semibold">Contact</span>
            <small className="block text-sm text-gray-500">Contact now</small>
          </div>
        </Link>
      </li>
    </>
  );
  

  return (
    <div className="navbar bg-black text-white bg-opacity-30">
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#ea1d5d] rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="text-[#ea1d5d] text-3xl font-bold">Tech</span> World
        </Link>
      </div>

      {/* Navigation links for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navOptions}</ul>
      </div>

      {/* Navbar end section */}
      <div className="navbar-end sm:gap-3 lg:gap-8">
        {/* Cart button */}
        <div>
          <Link to="/dashboard/cart">
            <button className="btn bg-[#c42cbf] flex items-center gap-2">
              <FaShoppingCart className="hover:scale-110 transition-transform duration-300" />
              <div className="badge badge-accent bg-transparent">+{cart.length}</div>
            </button>
          </Link>
        </div>

        {/* User dropdown */}
        <div>
          {user ? (
            <div className="dropdown dropdown-left">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <img
                  className="rounded-full"
                  alt="User Avatar"
                  src={user?.photoURL}
                />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
              >
                <div className="card-body">
                  <p className="text-lg">Name: {user?.displayName}</p>
                  <Link to="/dashboard">
                    <button className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow hover:bg-gray-900/80 focus:ring-2 focus:ring-gray-950">
                      <MdOutlineDashboard className="h-5 w-5" />
                      Dashboard
                    </button>
                  </Link>
                  <button
                    className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-orange-700 bg-transparent hover:bg-orange-700 text-orange-700 hover:text-white transition-all duration-300"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
          )}
        </div>

       
        {/* ------------Theme toggle -------------*/}
<div className="flex items-center gap-3">
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      onChange={toggleTheme}
      checked={isDarkMode}
    />
    <div className="w-12 h-6 bg-blue-500 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-500 peer-focus:ring-opacity-50 rounded-full peer-checked:bg-[#FF3811] transition-all duration-300">
      <span
        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-6" : ""
        }`}
      ></span>
    </div>
  </label>
  {isDarkMode ? (
    <MdDarkMode size={themeIconSize} className="hover:scale-110 transition-transform duration-300 text-[#FF3811]" />
  ) : (
    <BsSunFill size={themeIconSize} className="hover:scale-110 transition-transform duration-300 text-[#FF3811]" />
  )}
</div>

      </div>
    </div>
  );
};

export default NavBar;
