import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components/macro";

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

const UL = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px;
  z-index: 1;
  list-style-type: none;
  display: flex;
`;

const LinkStyled = styled(Link)`
  background-color: ${(props) =>
    props.location.pathname === "/contact" ? "" : "#34495e"};
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  margin: 5px;
  &:hover {
    background-color: #bdc3c7;
    color: black;
    text-decoration: none;
  }
`;
