import React from "react";
import Box from "../components/Box";

function portfolio() {
  return (
    <div className="portfolio">
      <h1>Web Developer Portfolio</h1>
      <b className="d-block mb-4">
        These are my website. I created by HTML CSS JS React.js Vue.js Node.js
        PHP Laravel Bootstrap Bulma MySQL PostgreSQL MongoDB
      </b>
      <small className="d-block mb-2">Hover the image for information.</small>
      <div className="row">
        <Box
          img={require("../assets/website/resume.png")}
          title="SumetPH's Resume"
          frontEnd="React.js"
          backBnd="-"
          dataBase="-"
          css="Bulma"
          host="Github"
          repo="https://github.com/SumetPH/react-resume"
          website="https://sumetph.github.io/"
        />
        <Box
          img={require("../assets/website/project.png")}
          title="DDS Rmuti"
          frontEnd="Vue.js"
          backBnd="Laravel 5.5"
          dataBase="MySQL"
          css="Bootstrap 4"
          host="000webhostapp"
          repo="https://github.com/SumetPH/laravel-graduation-project"
          website="https://rmuti-dds.000webhostapp.com/"
        />
        <Box
          img={require("../assets/website/isr.png")}
          title="ISR Rmuti"
          frontEnd="Next.js"
          backBnd="Node.js"
          dataBase="MongoDB"
          css="Bulma"
          host="Heroku"
          repo="https://github.com/SumetPH/next-isr"
          website="https://next-isr.herokuapp.com/"
        />
        <Box
          img={require("../assets/website/restaurant.png")}
          title="CRUD Restaurant"
          frontEnd="Vue.js"
          backBnd="Golang"
          dataBase="PostgreSQL"
          css="Bootstrap 4"
          host="Heroku"
          repo="https://github.com/SumetPH/next-isr"
          website="https://go-restaurant-sumetph.herokuapp.com/"
        />
      </div>
    </div>
  );
}

export default portfolio;
