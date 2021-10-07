import { useState } from "react";
import { FaGithubAlt, FaChrome } from "react-icons/fa";

type BoxProps = {
  img: string;
  title: string;
  frontEnd: string;
  backBnd: string;
  dataBase: string;
  cssFramework: string;
  host: string;
  repo: string;
  website: string;
};

const Box = ({
  img,
  title,
  frontEnd,
  backBnd,
  dataBase,
  cssFramework,
  host,
  repo,
  website,
}: BoxProps) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="box-container mb-4"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className="box-cover border-8 dark:border-gray-700"
        style={{ backgroundImage: `url(${img})` }}
      >
        <ul className="box-ul" style={{ opacity: hover ? 1 : 0 }}>
          {repo ? (
            <li>
              <a
                className="box-btn-repo"
                style={{ transform: hover ? "scale(1)" : "scale(0)" }}
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubAlt style={{ marginRight: 5 }} />
                Github
              </a>
            </li>
          ) : null}
          {website ? (
            <li>
              <a
                className="box-btn-web"
                style={{ transform: hover ? "scale(1)" : "scale(0)" }}
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaChrome style={{ marginRight: 5 }} />
                Demo
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="w-11/12 bg-gray-200 dark:bg-gray-800 py-8 rounded-xl text-center mx-auto -m-5 mb-2">
        {title ? <h3 className="font-bold text-lg">{title}</h3> : null}
        {frontEnd ? (
          <span className="block text-sm">Front-End : {frontEnd}</span>
        ) : null}
        {backBnd ? (
          <span className="block text-sm">Back-End : {backBnd}</span>
        ) : null}
        {dataBase ? (
          <span className="block text-sm">Database : {dataBase}</span>
        ) : null}
        {cssFramework ? (
          <span className="block text-sm">CSS : {cssFramework}</span>
        ) : null}
        {host ? <span className="block text-sm">Host : {host}</span> : null}
      </div>
    </div>
  );
};

export default Box;
