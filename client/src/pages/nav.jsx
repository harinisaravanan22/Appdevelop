import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 font-bold fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-10">
        <div className="flex-grow"></div>
        <ul className="flex">
          <li>
            <Link to="/admin" className="text-white hover:text-gray-300">
              ADMIN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
