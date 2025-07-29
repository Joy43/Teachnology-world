import { Link } from 'react-router-dom';
import {
  MdAccountCircle,
  MdDarkMode,
  MdOutlineDashboard,
} from 'react-icons/md';
import { BsSunFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useCart from '../../../Hooks/usecart';

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isDarkMode, setDarkMode] = useState(false);

  const handleLogOut = () => {
    logOut().catch(error => console.error(error));
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'business' ? 'corporate' : 'business';
    setDarkMode(prev => !prev);
    html.setAttribute('data-theme', newTheme);
  };

  const navLinks = (
    <>
      <li>
        <Link to="/product" className="flex items-center gap-2">
          <FaShoppingCart size={18} />
          <div className="flex flex-col leading-tight">
            <span className="font-medium">Products</span>
            <small className="text-xs opacity-60">Latest Offer</small>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="flex items-center gap-2">
          <MdOutlineDashboard size={18} />
          <div className="flex flex-col leading-tight">
            <span className="font-medium">Contact</span>
            <small className="text-xs opacity-60">Reach Us</small>
          </div>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 z-50 bg-base-100 bg-opacity-90 shadow-md text-base-content px-4">
      {/* Start */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-200 rounded-box w-56 space-y-1"
          >
            {navLinks}
          </ul>
        </div>

        <Link
          to="/"
          className="text-xl font-bold text-[#ea1d5d] tracking-tight"
        >
          Tech<span className="text-neutral">World</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
      </div>

      {/* End */}
      <div className="navbar-end space-x-4 items-center">
        {/* Cart */}
        <Link
          to="/dashboard/cart"
          className="btn btn-sm bg-[#c42cbf] text-white"
        >
          <FaShoppingCart size={18} />
          <span className="badge badge-accent bg-white text-black border-0">
            +{cart.length}
          </span>
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-circle bg-transparent hover:bg-base-200 border border-base-content/20"
        >
          {isDarkMode ? (
            <MdDarkMode size={20} className="text-[#FF3811]" />
          ) : (
            <BsSunFill size={20} className="text-[#FF3811]" />
          )}
        </button>

        {/* User */}
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="User" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard" className="flex items-center gap-2">
                  <MdAccountCircle size={18} />
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="text-left w-full flex items-center gap-2"
                >
                  <MdAccountCircle size={18} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm btn-outline text-sm flex items-center gap-2"
          >
            <MdAccountCircle size={18} />
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
