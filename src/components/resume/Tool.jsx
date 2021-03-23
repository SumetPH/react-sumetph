import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// asset
const data = [
  {
    name: "HTML",
    href: "https://www.w3schools.com/html",
    src: require("../../assets/tool/html.png"),
  },
  {
    name: "CSS",
    href: "https://www.w3schools.com/css",
    src: require("../../assets/tool/css.png"),
  },
  {
    name: "JS",
    href: "https://www.w3schools.com/js",
    src: require("../../assets/tool/js.png"),
  },
  {
    name: "NODE",
    href: "https://nodejs.org/",
    src: require("../../assets/tool/node.png"),
  },
  {
    name: "PHP",
    href: "https://www.php.net/",
    src: require("../../assets/tool/php.png"),
  },
];

function Tool() {
  const [hover, setHover] = useState(null);

  return (
    <div
      className="columns is-mobile is-tablet is-desktop is-multiline is-centered"
      style={{ marginBottom: 60 }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="column is-4-mobile is-3-tablet is-2-desktop"
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHover(item.name)}
            onMouseLeave={() => setHover(null)}
          >
            <LazyLoadImage
              className={hover === item.name ? "animated pulse infinite" : ""}
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
