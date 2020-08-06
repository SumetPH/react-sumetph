import React from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaLine, FaEnvelope } from "react-icons/fa";

import "../css/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-filter"></div>
      <div className="contact-content">
        <div className="contact-content-box">
          <h1>Contact</h1>
          <b className="d-block mb-4">
            If you wanna talk to me about job or project. You can contact me
            from below.
          </b>
          <h5>
            <IconContext.Provider
              value={{
                className:
                  "animate__animated animate__fadeInLeft animate__delay-1s",
                size: 35,
              }}
            >
              <FaLine />
            </IconContext.Provider>
            <span className="ml-2">: notsumet1</span>
          </h5>
          <h5>
            <IconContext.Provider
              value={{
                className:
                  "animate__animated animate__jackInTheBox animate__delay-2s",
                size: 35,
              }}
            >
              <FaGithubAlt />
            </IconContext.Provider>
            <span className="ml-2">: github.com/sumetph</span>
          </h5>
          <h5>
            <IconContext.Provider
              value={{
                className:
                  "animate__animated animate__fadeInUp animate__delay-3s",
                size: 35,
              }}
            >
              <FaEnvelope />
            </IconContext.Provider>
            <span className="ml-2">: notsumet1@gmail.com</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Contact;
