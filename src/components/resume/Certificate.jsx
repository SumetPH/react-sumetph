import React, { useContext } from "react";
import { AppContext } from "./Resume";

import c1 from "../../assets/certificate/ic3_1.jpg";
import c2 from "../../assets/certificate/ic3_2.jpg";

function Certificate() {
  const { lang } = useContext(AppContext);

  return (
    <div className="card">
      <header className="card-header has-background-black">
        <p className="card-header-title has-text-white">
          {lang === "eng" ? <span>Certificate</span> : <span>ใบประกาศ</span>}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <a href={c1} target="_bank">
            IC3 Key Applications - Global Standard 5
          </a>
          <p></p>
          <a href={c2} target="_bank">
            IC3 Computing Fundamentals - Global Standard 5
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
