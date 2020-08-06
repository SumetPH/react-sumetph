import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaLine, FaEnvelope } from "react-icons/fa";

function Home() {
  const word =
    "I'm looking for a job in Web Development. I'm interested Front-end, React.js, Vue.js and Back-end, Node.js, Laravel. If you looking for a Web Developer contact me, please.";
  const [typewriter, setTypewriter] = useState({ index: 0, text: "" });
  const [loading, setLoading] = useState(true);

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
    } else {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="home">
        <div className="content">
          <h1 className="animate__animated animate__flash animate__delay-3s">
            Hello, My name is SumetPH.
          </h1>
          <div className="description">
            <p>{typewriter.text}</p>
          </div>
        </div>
      </div>

      {loading ? <div className="home-loading"></div> : null}

      <ul className="float-left">
        <li>
          <a
            className="float-line"
            href="https://line.me/ti/p/notsumet1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider
              value={{ className: "float-line-icon", size: 30 }}
            >
              <FaLine />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            className="float-github"
            href="https://github.com/sumetph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider
              value={{ className: "float-github-icon", size: 30 }}
            >
              <FaGithubAlt />
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            className="float-gmail"
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=notsumet1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider
              value={{ className: "float-gmail-icon", size: 30 }}
            >
              <FaEnvelope />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
