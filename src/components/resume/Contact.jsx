import React, { useContext } from "react";

function Contact() {
  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-4">
      <h2 className="font-bold text-2xl">Contact</h2>
      <div className="text-md ml-3 mt-3">
        <div className="mb-2">
          <p>Email : notsumet1@gmail.com</p>
        </div>
        <div className="mb-2">
          <p>
            Github :{" "}
            <a
              className="hover:text-white"
              href="https://github.com/sumetph"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/sumetph
            </a>
          </p>
        </div>
        <div className="mb-2">
          <p>
            Portfolio :{" "}
            <a
              className="hover:text-white"
              href="https://sumetph.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              sumetph.github.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
