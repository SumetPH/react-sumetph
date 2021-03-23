import React from "react";
import Box from "../components/portfolio/Box";
import styled, { keyframes } from "styled-components/macro";

export default function portfolio() {
  return (
    <Container>
      <h1>Web Developer Portfolio</h1>
      <b className="d-block mb-4">
        These are my projects. I created by HTML CSS JS React.js Vue.js Node.js
        PHP Laravel Bootstrap Bulma MySQL PostgreSQL MongoDB
      </b>
      <small className="d-block mb-2">Hover the image for information.</small>
      <Row className="row">
        <Box
          img={require("../assets/website/resume.jpg")}
          title="SumetPH's Resume"
          frontEnd="React.js"
          backBnd="-"
          dataBase="-"
          cssFramework="Bulma"
          host="Github"
          repo="https://github.com/SumetPH/react-resume"
          website="https://sumetph.github.io/"
        />
        <Box
          img={require("../assets/website/project.jpg")}
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
          img={require("../assets/website/isr.jpg")}
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
          img={require("../assets/website/restaurant.jpg")}
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
          img={require("../assets/website/twitter.jpg")}
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
          img={require("../assets/website/flashcard.jpg")}
          title="Flashcard"
          frontEnd="React.js"
          backBnd="Node.js"
          dataBase="Cloud Firestore"
          cssFramework="Bulma"
          host="Heroku"
          repo="https://github.com/SumetPH/fern-flashcard"
          website="https://fern-flashcard-sumetph.herokuapp.com/"
        />
        <Box
          img={require("../assets/website/tab.gif")}
          title="NewTab Live Wallpaper"
          frontEnd="HTML CSS JS"
          backBnd="-"
          dataBase="-"
          cssFramework="-"
          host="Github"
          repo="https://github.com/SumetPH/chrome-extension-newtab-live-wallpaper"
        />
        <Box
          img={require("../assets/website/youtube.gif")}
          title="Youtube Comment Switcher"
          frontEnd="jQuery"
          backBnd="-"
          dataBase="-"
          cssFramework="-"
          host="Github"
          repo="https://github.com/SumetPH/chrome-extension-youtube-comment-switcher"
        />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 20%;
  @media (max-width: 1200px) {
    padding: 100px 10%;
    height: auto;
  }
`;

const RowAnimation = keyframes`
  100% {
    margin-top: 0;
    opacity: 1;
  }
`;

const Row = styled.div`
  animation: ${RowAnimation} 0.5s forwards;
  margin-top: 100px;
  opacity: 0;
`;
