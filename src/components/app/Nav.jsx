import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="w-full p-3">
      <ul className="flex justify-center md:justify-end ">
        <li className="bg-gray-500 px-2 py-1 m-1 rounded-md">
          <Link
            className="hover:no-underline hover:text-white"
            location={location}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="bg-gray-500 px-2 py-1 m-1 rounded-md">
          <Link
            className="hover:no-underline hover:text-white"
            location={location}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li className="bg-gray-500 px-2 py-1 m-1 rounded-md">
          <Link
            className="hover:no-underline hover:text-white"
            location={location}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
