import { Link } from "react-router-dom";
import { MdAccountCircle, MdDarkMode, MdOutlineDashboard } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/usecart";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isDarkMode, setDarkMode] = useState(false);

  const handleLogOut = () => {
    logOut().catch((error) => console.error(error));
  };

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    setDarkMode((prev) => !prev);
    htmlElement.setAttribute(
      "data-theme",
      currentTheme === "business" ? "corporate" : "business"
    );
  };

  const navOptions = (
    <>
      <li className="flex items-center gap-4 hover:text-gray-400 transition-colors duration-300">
        <Link
          to="/product"
          className="grid grid-cols-[auto_1fr] items-center gap-2"
        >
          <FaShoppingCart
            size="20px"
            className="hover:scale-125 transition-transform duration-300"
          />
          <div className="grid">
            <span className="font-semibold">Products</span>
            <small className="text-sm ">Latest offer</small>
          </div>
        </Link>
      </li>
      <li className="flex items-center gap-4 hover:text-gray-400 transition-colors duration-300">
        <Link
          to="/contact"
          className="grid grid-cols-[auto_1fr] items-center gap-2"
        >
          <MdOutlineDashboard
            size="20px"
            className="hover:scale-125 transition-transform duration-300"
          />
          <div className="grid">
            <span className="font-semibold">Contact</span>
            <small className="text-sm ">Contact now</small>
          </div>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black text-white bg-opacity-30 fixed top-0 left-0 w-full z-50">
      {/* Navbar start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
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

      {/* Navbar center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navOptions}</ul>
      </div>

      {/* Navbar end */}
      <div className="navbar-end flex items-center gap-3">
        {/* Cart Button */}
        <Link to="/dashboard/cart" className="flex items-center gap-2">
          <button className="btn bg-[#c42cbf] flex items-center gap-2">
            <FaShoppingCart className="hover:scale-110 transition-transform duration-300" />
            <span className="badge badge-accent bg-transparent">+{cart.length}</span>
          </button>
        </Link>

        {/* User Dropdown */}
        {user ? (

          // -------------user profile----------
          <div className="dropdown dropdown-left">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
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
               
                <Link to="/dashboard">
                  <button className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow hover:bg-gray-900/80">
                    <MdAccountCircle className="h-5 w-5" />
                   Profile
                  </button>
                </Link>
               
              </div>
            </div>
          </div>
        ) : (
          // ---------no user login-----------
          <li className="flex items-center gap-4 hover:text-gray-400 transition-colors duration-300">
        <Link
          to="/login"
          className="grid grid-cols-[auto_1fr] items-center gap-2"
        >
          <MdAccountCircle
            size="20px"
            className="hover:scale-125 transition-transform duration-300"
          />
          <div className="grid">
            <span className="font-semibold">Account</span>
            <small className="text-sm text-gray-500">Login or Register</small>
          </div>
        </Link>
      </li>
        )}

        {/* Theme Toggle */}
        <div className="flex items-center gap-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={toggleTheme}
              checked={isDarkMode}
            />
            <div className="w-12 h-6 bg-blue-500 peer-checked:bg-[#FF3811] rounded-full">
              <span
                className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </div>
          </label>
          {isDarkMode ? (
            <MdDarkMode
              size={30}
              className="hover:scale-110 transition-transform duration-300 text-[#FF3811]"
            />
          ) : (
            <BsSunFill
              size={30}
              className="hover:scale-110 transition-transform duration-300 text-[#FF3811]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
