import React, { useState, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaLine, FaEnvelope } from "react-icons/fa";
import styled, { keyframes } from "styled-components/macro";
import { TweenMax } from "gsap";

const word =
  "I'm looking for a job in Web Development. I'm interested Front-end, React.js, Vue.js and Back-end, Node.js, Laravel. If you looking for a Web Developer contact me, please.";

export default function Home() {
  const loadBar = useRef();
  const [typewriter, setTypewriter] = useState({ index: 0, text: "" });

  useEffect(() => {
    typewriterFunc();
  });

  const typewriterFunc = () => {
    if (typewriter.index < word.length) {
      setTimeout(() => {
        setTypewriter({
          index: typewriter.index + 1,
          text: typewriter.text + word.charAt(typewriter.index)
        });
      }, 15);
    } else {
      TweenMax.to(loadBar.current, 0.5, { css: { opacity: 0 } });
    }
  };

  return (
    <div>
      <LoadBar ref={loadBar} />
      <Container>
        <Content>
          <h1 className="animate__animated animate__fadeInRight">
            Hello, My name is SumetPH.
          </h1>
          <Description>
            <p>{typewriter.text}</p>
          </Description>
        </Content>
      </Container>

      <Float>
        <li>
          <FloatLine
            href="https://line.me/ti/p/notsumet1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider value={IconContextValue}>
              <FaLine />
            </IconContext.Provider>
          </FloatLine>
        </li>
        <li>
          <FloatGithub
            href="https://github.com/sumetph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider value={IconContextValue}>
              <FaGithubAlt />
            </IconContext.Provider>
          </FloatGithub>
        </li>
        <li>
          <FloatGmail
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=notsumet1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider value={IconContextValue}>
              <FaEnvelope />
            </IconContext.Provider>
          </FloatGmail>
        </li>
      </Float>
    </div>
  );
}

const IconContextValue = {
  size: 30,
  style: { color: "#fefefe" }
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  text-align: center;
`;

const Description = styled.div`
  width: 350px;
`;

const LoadBarAnimation = keyframes`
  30% {
    background-color: #2980b9;
  }
  60% {
    background-color: #8e44ad;
  }
`;

const LoadBar = styled.div`
  position: fixed;
  top: 99%;
  left: 0;
  right: 0%;
  bottom: 0%;
  z-index: 2;
  background-color: #16a085;
  animation: ${LoadBarAnimation} 2s ease-in infinite alternate-reverse;
`;

const FloatAnimation = keyframes`
  100% {
    left: 0;
  }
`;

const Float = styled.ul`
  position: fixed;
  left: -100px;
  bottom: 3%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  z-index: 1;
  animation: ${FloatAnimation} 1s ease-in 1s forwards;
`;

const FloatLine = styled.a`
  background-color: #00ae2c;
  display: inline-block;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    padding-left: 30px;
  }
`;

const FloatGithub = styled(FloatLine)`
  background-color: #4e545a;
`;

const FloatGmail = styled(FloatLine)`
  background-color: #c2392a;
`;
