import React from "react";
import { FaGithubAlt, FaChrome } from "react-icons/fa";
import anime from "../images/anime.jpg";

function portfolio() {
  return (
    <div className="portfolio bg">
      <div className="bg" style={{ height: "auto" }}>
        <h1>Web Developer Portfolio</h1>
        <b className="d-block my-3">
          These are my website. I created by HTML CSS JS React.js Vue.js Node.js
          PHP Laravel Bootstrap Bulma MySQL PostgreSQL MongoDB
        </b>
        <span className="d-block my-2">Hover the image for information.</span>
        <div className="row">
          <div className="col-lg-12 col-xl-6 mb-4">
            <div className="box" style={{ backgroundImage: `url(${anime})` }}>
              <div className="cover">
                <div>
                  <h5>SumetPH's Resume</h5>
                  <p>
                    Front-End : React.js
                    <br />
                    CSS : Bulma
                    <br />
                    Host : Netlify
                  </p>
                  <ul className="box-list">
                    <li>
                      <a
                        className="repo"
                        href="https://github.com/SumetPH/react-resume"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithubAlt />
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="website"
                        href="https://sumetph.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaChrome />
                        Website
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 mb-4">
            <div className="box" style={{ backgroundImage: `url(${anime})` }}>
              <div className="cover">
                <div>
                  <h5>SumetPH's Resume</h5>
                  <p>
                    Front-End : React.js
                    <br />
                    CSS : Bulma
                    <br />
                    Host : Netlify
                  </p>
                  <ul className="box-list">
                    <li>
                      <a
                        className="repo"
                        href="https://github.com/SumetPH/react-resume"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithubAlt />
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="website"
                        href="https://sumetph.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaChrome />
                        Website
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 mb-4">
            <div className="box" style={{ backgroundImage: `url(${anime})` }}>
              <div className="cover">
                <div>
                  <h5>SumetPH's Resume</h5>
                  <p>
                    Front-End : React.js
                    <br />
                    CSS : Bulma
                    <br />
                    Host : Netlify
                  </p>
                  <ul className="box-list">
                    <li>
                      <a
                        className="repo"
                        href="https://github.com/SumetPH/react-resume"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithubAlt />
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="website"
                        href="https://sumetph.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaChrome />
                        Website
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 mb-4">
            <div className="box" style={{ backgroundImage: `url(${anime})` }}>
              <div className="cover">
                <div>
                  <h5>SumetPH's Resume</h5>
                  <p>
                    Front-End : React.js
                    <br />
                    CSS : Bulma
                    <br />
                    Host : Netlify
                  </p>
                  <ul className="box-list">
                    <li>
                      <a
                        className="repo"
                        href="https://github.com/SumetPH/react-resume"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithubAlt />
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="website"
                        href="https://sumetph.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaChrome />
                        Website
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
