import React from "react";
import { FaGithubAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <a
          className="has-text-black"
          href="https://github.com/sumetph"
          target="_black"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaGithubAlt size={30} />
            <span style={{ marginLeft: "1rem" }}>Github</span>
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
