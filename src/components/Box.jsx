import React from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaChrome } from "react-icons/fa";

function Box({
  img,
  title,
  frontEnd,
  backBnd,
  dataBase,
  css,
  host,
  repo,
  website,
}) {
  return (
    <div className="col-lg-12 col-xl-6 mb-4">
      <div className="box" style={{ backgroundImage: `url(${img})` }}>
        <div className="box-cover">
          <ul>
            <li>
              <a
                className="box-btn-repo"
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ className: "box-btn-repo-icon" }}
                >
                  <FaGithubAlt />
                </IconContext.Provider>
                Github
              </a>
            </li>
            <li>
              <a
                className="box-btn-website"
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconContext.Provider
                  value={{ className: "box-btn-website-icon" }}
                >
                  <FaChrome />
                </IconContext.Provider>
                Website
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-info">
        {title ? <h5>{title}</h5> : null}
        {frontEnd ? <span>Front-End : {frontEnd}</span> : null}
        {backBnd ? <span>Back-End : {backBnd}</span> : null}
        {dataBase ? <span>Database : {dataBase}</span> : null}
        {css ? <span>CSS : {css}</span> : null}
        {host ? <span>Host : {host}</span> : null}
      </div>
    </div>
  );
}

export default Box;
