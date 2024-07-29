
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [showNavItems, setShowNavItems] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <nav className="bg-gray-800 text-white py-4 font-bold fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-10">
        <div>
          <Link to="/" className="font-bold text-2xl">
            <b>Cloudwards</b>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-5">
            <ul>
              <Link to="/">All Task</Link>
            </ul>
            <ul>
              <Link to="/completed">Completed</Link>
            </ul>
            <ul>
              <Link to="/incomplete">Incomplete</Link>
            </ul>
            <ul>
              <Link to="/Admin">Admin</Link>
            </ul>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center gap-3 cursor-pointer" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
            <span className="text-white">
              {user?.first_name} {user?.last_name}
            </span>
            <div className="flex items-center">
              {showProfileDropdown ? (
                <RxCross2 className="text-white text-2xl" />
              ) : (
                <GiHamburgerMenu className="text-white text-2xl" />
              )}
            </div>
          </div>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                Profile
              </Link>
              <Link to="/BarChart" className="block px-4 py-2 hover:bg-gray-200">
                Dashboard
              </Link>
              <span
                onClick={handleLogout}
                className="block px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                Logout
              </span>
            </div>
          )}
        </div>
        <div className="md:hidden">
          {showNavItems ? (
            <RxCross2
              className="text-white text-2xl cursor-pointer"
              onClick={() => setShowNavItems(!showNavItems)}
            />
          ) : (
            <GiHamburgerMenu
              className="text-white text-2xl cursor-pointer"
              onClick={() => setShowNavItems(!showNavItems)}
            />
          )}
        </div>
      </div>
      {showNavItems && (
        <div className="md:hidden absolute top-16 right-0 bg-slate-800 text-white w-full">
          <ul className="p-4">
            <li>
              <Link to="/">All Task</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
            <li>
              <Link to="/incomplete">Incomplete</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
