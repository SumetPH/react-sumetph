import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaFacebookF, FaEnvelope } from "react-icons/fa";

function Home() {
  const word =
    "Hello, My name is SumetPH. I'm looking for a job in Web Developer. I'm interested Front-end, React.js, Vue.js and Back-end, Node.js, Laravel. If you need a Web Developer contact me, please.";
  const [typewriter, setTypewriter] = useState({ index: 0, text: "" });

  useEffect(() => {
    typewriterFunc();
  });

  const typewriterFunc = () => {
    if (typewriter.index < word.length) {
      setTimeout(() => {
        setTypewriter({
          index: typewriter.index + 1,
          text: typewriter.text + word.charAt(typewriter.index),
        });
      }, 30);
    }
  };

  return (
    <div>
      <div className="float-left">
        <ul className="float-left-list">
          <li>
            <a
              className="facebook"
              href="https://facebook.com/notsumet1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext.Provider value={{ color: "white", size: 30 }}>
                <FaFacebookF />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a
              className="github"
              href="https://github.com/sumetph"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext.Provider value={{ color: "white", size: 30 }}>
                <FaGithubAlt />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a
              className="gmail"
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=notsumet1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext.Provider value={{ color: "white", size: 30 }}>
                <FaEnvelope />
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </div>

      <div className="section bg">
        <div className="content">
          <h1>Hello, My name is SumetPH.</h1>
          <div className="description">
            <p>{typewriter.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
