import React, { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaLine, FaEnvelope } from "react-icons/fa";
import styled from "styled-components/macro";
import { TimelineMax } from "gsap";

export default function FloatSocial() {
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
    <div className="fixed left-0 bottom-3 p-0 m-0 list-none hidden lg:block">
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
  );
}

const IconContextValue = {
  size: 30,
  style: { color: "#fefefe" },
};

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
