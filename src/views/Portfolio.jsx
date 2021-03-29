import React from "react";
import Box from "../components/portfolio/Box";

// import resume from "../assets/website/resume.jpg";
import project from "../assets/website/project.jpg";
import restaurant from "../assets/website/restaurant.jpg";
import isr from "../assets/website/isr.jpg";
import twitter from "../assets/website/twitter.jpg";
import flashcard from "../assets/website/flashcard.jpg";
// import tab from "../assets/website/tab.gif";
import youtube from "../assets/website/youtube.gif";

export default function portfolio() {
  return (
    <div className="container mx-auto text-center md:text-left">
      <h1 className="animate__animated animate__fadeInUp font-bold text-3xl mb-1">
        Web Developer Portfolio
      </h1>
      <h2 className="animate__animated animate__fadeInUp ml-3 mb-2">
        These are my projects. I created by HTML CSS JS React.js Vue.js Node.js
        PHP Laravel Bootstrap Bulma MySQL PostgreSQL MongoDB
      </h2>
      <small className="animate__animated animate__fadeInUp ml-3 mb-3 block">
        Hover the image for information.
      </small>
      <div className="animate__animated animate__fadeInUp grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* <Box
          img={resume}
          title="SumetPH's Resume"
          frontEnd="React.js"
          backBnd="-"
          dataBase="-"
          cssFramework="Bulma"
          host="Github"
          repo="https://github.com/SumetPH/react-resume"
          website="https://sumetph.github.io/"
        /> */}
        <Box
          img={project}
          title="DDS Rmuti"
          frontEnd="Vue.js"
          backBnd="Laravel 5.5"
          dataBase="MySQL"
          cssFramework="Bootstrap"
          host="000webhostapp"
          repo="https://github.com/SumetPH/laravel-graduation-project"
          website="https://rmuti-dds.000webhostapp.com/"
        />
        <Box
          img={isr}
          title="ISR Rmuti"
          frontEnd="Next.js"
          backBnd="Node.js"
          dataBase="MongoDB"
          cssFramework="Bulma"
          host="Heroku"
          repo="https://github.com/SumetPH/next-isr"
          website="https://next-isr.herokuapp.com/"
        />
        <Box
          img={restaurant}
          title="CRUD Restaurant"
          frontEnd="Vue.js"
          backBnd="Golang"
          dataBase="PostgreSQL"
          cssFramework="Bootstrap"
          host="Heroku"
          repo="https://github.com/SumetPH/go-restaurant"
          website="https://go-restaurant-sumetph.herokuapp.com/"
        />
        <Box
          img={twitter}
          title="Twitter Stream"
          frontEnd="HTML CSS JS"
          backBnd="Node.js"
          dataBase="-"
          cssFramework="Bootstrap"
          host="Heroku"
          repo="https://github.com/SumetPH/node-twitter-stream"
          website="https://node-twitter-stream-sumetph.herokuapp.com/"
        />
        <Box
          img={flashcard}
          title="Flashcard"
          frontEnd="React.js"
          backBnd="Node.js"
          dataBase="Cloud Firestore"
          cssFramework="Bulma"
          host="Heroku"
          repo="https://github.com/SumetPH/fern-flashcard"
          website="https://fern-flashcard-sumetph.herokuapp.com/"
        />
        {/* <Box
           img={tab}
           title="NewTab Live Wallpaper"
           frontEnd="HTML CSS JS"
           backBnd="-"
           dataBase="-"
           cssFramework="-"
           host="Github"
           repo="https://github.com/SumetPH/chrome-extension-newtab-live-wallpaper"
         /> */}
        <Box
          img={youtube}
          title="Youtube Comment Switcher"
          frontEnd="jQuery"
          backBnd="-"
          dataBase="-"
          cssFramework="-"
          host="Github"
          repo="https://github.com/SumetPH/chrome-extension-youtube-comment-switcher"
        />
      </div>
    </div>
  );
}
