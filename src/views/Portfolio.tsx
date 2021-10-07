import Box from "../components/portfolio/Box";

import project from "../components/portfolio/website/project.jpg";
import restaurant from "../components/portfolio/website/restaurant.jpg";
import isr from "../components/portfolio/website/isr.jpg";
import twitter from "../components/portfolio/website/twitter.jpg";
import flashcard from "../components/portfolio/website/flashcard.jpg";
import youtube from "../components/portfolio/website/youtube.gif";
import todolist from "../components/portfolio/website/todolist.png";
import movie from "../components/portfolio/website/movie.png";
import covid from "../components/portfolio/website/covid.png";

import { url } from "../config/url";

const Portfolio = () => {
  console.log(youtube, "y");
  return (
    <div className="container mx-auto text-center md:text-left">
      <h1 className="animate__animated animate__fadeInUp font-bold text-3xl mb-1">
        Web Developer Portfolio
      </h1>
      <h2 className="animate__animated animate__fadeInUp mx-3 mb-2">
        These are my projects. I created by HTML CSS JS React.js Vue.js Node.js
        PHP Laravel Bootstrap Bulma MySQL PostgreSQL MongoDB
      </h2>
      <small className="animate__animated animate__fadeInUp ml-3 mb-3 block">
        Hover the image for information.
      </small>
      <div className="animate__animated animate__fadeInUp grid grid-cols-1 md:grid-cols-2 gap-4">
        <Box
          img={project}
          title="DDS Rmuti"
          frontEnd="Vue.js"
          backBnd="Laravel 5.5"
          dataBase="MySQL"
          cssFramework="Bootstrap"
          host="000webhostapp"
          repo="https://github.com/SumetPH/laravel-graduation-project"
          website={url.project}
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
          website={url.isr}
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
          website={url.restaurant}
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
          website={url.twitter}
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
          website={url.flashcard}
        />
        <Box
          img={todolist}
          title="TodoList"
          frontEnd="Vue.js"
          backBnd="-"
          dataBase="-"
          cssFramework="Materialize"
          host="Vercel"
          repo="https://github.com/SumetPH/todolist"
          website={url.todolist}
        />
        <Box
          img={movie}
          title="Movie API"
          frontEnd="Vue.js"
          backBnd="-"
          dataBase="-"
          cssFramework="Bootstrap"
          host="Vercel"
          repo="https://github.com/SumetPH/movie"
          website={url.movie}
        />
        <Box
          img={youtube}
          title="Youtube Comment Switcher"
          frontEnd="jQuery"
          backBnd="-"
          dataBase="-"
          cssFramework="-"
          host="Github"
          repo="https://github.com/SumetPH/chrome-extension-youtube-comment-switcher"
          website=""
        />
        <div className="col-span-full">
          <div className="grid md:grid-cols-4">
            <div className="md:col-start-2 md:col-end-4">
              <Box
                img={covid}
                title="Covid 19 API"
                frontEnd="Vue.js"
                backBnd="-"
                dataBase="-"
                cssFramework="Bootstrap"
                host="Vercel"
                repo="https://github.com/SumetPH/covid-19-api"
                website={url.covid}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
