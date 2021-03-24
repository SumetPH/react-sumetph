import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import html from "./tool/html.png";
import css from "./tool/css.png";
import js from "./tool/js.png";
import node from "./tool/node.png";
import php from "./tool/php.png";
// asset
const data = [
  {
    name: "HTML",
    href: "https://www.w3schools.com/html",
    src: html,
  },
  {
    name: "CSS",
    href: "https://www.w3schools.com/css",
    src: css,
  },
  {
    name: "JS",
    href: "https://www.w3schools.com/js",
    src: js,
  },
  {
    name: "NODE",
    href: "https://nodejs.org/",
    src: node,
  },
  {
    name: "PHP",
    href: "https://www.php.net/",
    src: php,
  },
];

function Tool() {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex flex-wrap justify-center mt-10 px-18 sm:px-24 2xl:px-80">
      {data.map((item, index) => (
        <div key={index} className="w-6/12 md:w-4/12 lg:w-2/12 p-4">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHover(item.name)}
            onMouseLeave={() => setHover(null)}
          >
            <LazyLoadImage
              className={
                hover === item.name
                  ? "animate__animated animate__pulse infinite"
                  : ""
              }
              src={item.src}
              effect="blur"
              alt="tool"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Tool;
