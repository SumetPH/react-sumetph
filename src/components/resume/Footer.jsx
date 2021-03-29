import React from "react";
import { FaGithubAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full mt-20 py-10 bg-gray-200 dark:bg-gray-800">
      <a href="https://github.com/sumetph" target="_black">
        <div className="flex justify-center items-center">
          <FaGithubAlt size={30} />
          <span className="ml-2">Github</span>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
