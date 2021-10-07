import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaLine, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import useScrollPosition from "@react-hook/window-scroll";

const FloatSocial = () => {
  const floatLine = useRef();
  const floatGithub = useRef();
  const floatGmail = useRef();
  const scrollY = useScrollPosition(60);

  useEffect(() => {
    if (scrollY > 0) {
      tlm(0.3, -50);
    } else {
      tlm(0.3, 0);
    }
  }, [scrollY]);

  const tlm = (duration, margin) => {
    const tl = gsap.timeline({ defaults: { duration: duration } });
    tl.to(floatLine.current, {
      css: { marginLeft: margin },
    });
    tl.to(floatGithub.current, {
      css: { marginLeft: margin },
    });
    tl.to(floatGmail.current, {
      css: { marginLeft: margin },
    }).play();
  };

  return (
    <div className="fixed left-0 bottom-3 p-0 m-0 list-none hidden lg:block">
      <li className="p-0 m-0">
        <a
          className="float-line"
          ref={floatLine}
          href="https://line.me/ti/p/notsumet1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={IconContextValue}>
            <FaLine />
          </IconContext.Provider>
        </a>
      </li>
      <li className="p-0 m-0">
        <a
          className="float-github"
          ref={floatGithub}
          href="https://github.com/sumetph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={IconContextValue}>
            <FaGithubAlt />
          </IconContext.Provider>
        </a>
      </li>
      <li className="p-0 m-0">
        <a
          className="float-gmail"
          ref={floatGmail}
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=notsumet1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={IconContextValue}>
            <FaEnvelope />
          </IconContext.Provider>
        </a>
      </li>
    </div>
  );
};

const IconContextValue = {
  size: 30,
  style: { color: "#fefefe" },
};

export default FloatSocial;
