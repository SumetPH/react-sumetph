import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaLine, FaEnvelope } from "react-icons/fa";
import styled from "styled-components/macro";
import { TimelineMax } from "gsap";

import Personal from "../components/resume/Personal";
import Education from "../components/resume/Education";
import Contact from "../components/resume/Contact";
import Qualification from "../components/resume/Qualification";
import Award from "../components/resume/Award";

// const word =
//   "I'm looking for a job in Web Development. I'm interested Front-end, React.js, Vue.js and Back-end, Node.js, Laravel. If you looking for a Web Developer contact me, please.";

export default function Home() {
  const floatLine = useRef();
  const floatGithub = useRef();
  const floatGmail = useRef();

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
      {/* <LoadBar ref={loadBar} /> */}
      <div>
        <div>
          {/* <Description>
            <p>{typewriter.text}</p>
          </Description> */}
          {/* <BtnProject
            to="/portfolio"
            className="animate__animated animate__fadeIn animate__delay-1s"
            show={btnProjectDisplay ? "block" : "none"}
          >
            See all project
          </BtnProject> */}

          <div className="flex flex-wrap justify-center sm:p-2 md:px-20 md:py-10">
            <h1 className="font-bold text-3xl mx-auto animate__animated animate__fadeInRight">
              Hello, My name is SumetPH.
            </h1>
            <div className="p-3 w-full lg:w-full">
              <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
                <Personal />
              </div>
            </div>
            <div className="p-3 w-full lg:w-5/12">
              <Education />
              <Award />
            </div>
            <div className="p-3 w-full lg:w-5/12">
              <Contact />
              <Qualification />
            </div>
            <div className="p-3 w-full lg:w-5/12"></div>
          </div>
        </div>
      </div>

      <div className="fixed left-0 bottom-3 p-0 m-0 list-none hidden md:block">
        <li className="p-0 m-0">
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
        <li className="p-0 m-0">
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
        <li className="p-0 m-0">
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
      </div>
    </div>
  );
}

const IconContextValue = {
  size: 30,
  style: { color: "#fefefe" },
};

// const LoadBarAnimation = keyframes`
//   30% {
//     background-color: #2980b9;
//   }
//   60% {
//     background-color: #8e44ad;
//   }
// `;

// const LoadBar = styled.div`
//   position: fixed;
//   top: 99%;
//   left: 0;
//   right: 0%;
//   bottom: 0%;
//   z-index: 2;
//   background-color: #16a085;
//   animation: ${LoadBarAnimation} 2s ease-in infinite alternate-reverse;
// `;

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
