import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaLine, FaEnvelope } from "react-icons/fa";
import styled, { keyframes } from "styled-components/macro";
import { TweenMax, TimelineMax } from "gsap";

const word =
  "I'm looking for a job in Web Development. I'm interested Front-end, React.js, Vue.js and Back-end, Node.js, Laravel. If you looking for a Web Developer contact me, please.";

export default function Home() {
  const loadBar = useRef();
  const floatLine = useRef();
  const floatGithub = useRef();
  const floatGmail = useRef();
  const [typewriter, setTypewriter] = useState({ index: 0, text: "" });
  const [btnProjectDisplay, setBtnProjectDisplay] = useState(false);

  useEffect(() => {
    if (typewriter.index < word.length) {
      setTimeout(() => {
        setTypewriter({
          index: typewriter.index + 1,
          text: typewriter.text + word.charAt(typewriter.index),
        });
      }, 15);
    } else {
      TweenMax.to(loadBar.current, 0.5, { css: { opacity: 0 } });
      setBtnProjectDisplay(true);
    }
  }, [typewriter]);

  useEffect(() => {
    const tl = new TimelineMax({ paused: true });
    tl.to(floatLine.current, {
      duration: 0.5,
      css: { marginLeft: 0 },
    });
    tl.to(floatGithub.current, {
      duration: 0.5,
      css: { marginLeft: 0 },
    });
    tl.to(floatGmail.current, {
      duration: 0.5,
      css: { marginLeft: 0 },
    }).play();
  }, []);

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
          <BtnProject
            to="/portfolio"
            className="animate__animated animate__fadeIn animate__delay-1s"
            show={btnProjectDisplay ? "block" : "none"}
          >
            See all project
          </BtnProject>
        </Content>
      </Container>

      <Float>
        <li>
          <FloatLine
            ref={floatLine}
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
            ref={floatGithub}
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
            ref={floatGmail}
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

const BtnProject = styled(Link)`
  display: ${(props) => props.show};
  border: 0;
  border-radius: 10px;
  background-color: #7a915f;
  padding: 10px;
  text-decoration: none !important;
  &:hover {
    color: inherit;
  }
`;

const IconContextValue = {
  size: 30,
  style: { color: "#fefefe" },
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

const Float = styled.ul`
  position: fixed;
  left: 0;
  bottom: 3%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  z-index: 1;
`;

const FloatLine = styled.a`
  background-color: #00ae2c;
  display: inline-block;
  padding: 10px;
  margin-left: -50px;
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
