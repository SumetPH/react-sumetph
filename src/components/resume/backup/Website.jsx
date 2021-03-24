import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const data = [
  {
    title: "SumetPH Resume",
    src: require("../asset/web/resume.png"),
    link: "https://sumetph.tech",
    fontEnd: "React.js",
    backEnd: "-",
    database: "-",
    css: "Bulma",
    host: "Netlify",
  },
  {
    title: "DDS Rmuti",
    src: require("../asset/web/project.png"),

    link: "https://rmuti-dds.000webhostapp.com",
    fontEnd: "Vue.js",
    backEnd: "Laravel 5.5",
    database: "MySQL",
    css: "Bootstrap 4",
    host: "000webhost",
  },
  {
    title: "ISR Rmuti",
    src: require("../asset/web/isr.png"),
    link: "https://next-isr.herokuapp.com/",
    fontEnd: "Next.js",
    backEnd: "Node.js & Express",
    database: "MongoDB",
    css: "Bulma",
    host: "Heroku",
  },
  {
    title: "CRUD Restaurant",
    src: require("../asset/web/restaurant.png"),
    link: "https://go-restaurant-sumetph.herokuapp.com",
    fontEnd: "Vue.js",
    backEnd: "Golang",
    database: "PostgreSQL",
    css: "Bootstrap 4",
    host: "Heroku",
  },
];

function Website() {
  const [hover, setHover] = useState({ title: null, onHover: false });

  return (
    <div
      className="columns is-multiline"
      style={{ margin: "0px 30px 50px 30px" }}
    >
      {data.map((web, index) => (
        <div key={index} className="column is-6-tablet is-3-desktop">
          <div
            className={
              hover.title === web.title && hover.onHover === true
                ? "card animated pulse"
                : "card"
            }
            onMouseEnter={() => setHover({ title: web.title, onHover: true })}
            onMouseLeave={() => setHover({ title: null, onHover: false })}
          >
            <div className="card-image">
              <figure className="image is-bordered">
                <a href={web.link} target="_black">
                  <LazyLoadImage src={web.src} effect="blur" alt="website" />
                </a>
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <a href={web.link} target="_black">
                  <b>{web.title}</b>
                </a>
                <hr />
                <small>
                  Front-End : {web.fontEnd}
                  <br />
                  Back-End : {web.backEnd}
                  <br />
                  Database : {web.database}
                  <br />
                  CSS Framework : {web.css}
                  <br />
                  Host : {web.host}
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Website;
