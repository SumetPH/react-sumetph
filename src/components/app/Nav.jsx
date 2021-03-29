import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <div className="w-full p-3">
      <ul className="flex justify-center md:justify-end ">
        <li className="bg-gray-200 dark:bg-gray-700 px-2 py-1 m-1 rounded-md">
          <Link className="hover:no-underline " location={location} to="/">
            Home
          </Link>
        </li>
        <li className="bg-gray-200 dark:bg-gray-700 px-2 py-1 m-1 rounded-md">
          <Link
            className="hover:no-underline"
            location={location}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
}
