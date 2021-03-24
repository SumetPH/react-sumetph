import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

// components
import Header from "./Header";
import Personal from "../Personal";
import Contact from "../Contact";
import Job from "../Job";
import Education from "../Education";
import Qualification from "../Qualification";
import Tool from "../Tool";
// import Website from "./Website";
import Footer from "./Footer";
import Certificate from "../Certificate";
import Award from "../Award";

export const AppContext = createContext();

function Resume() {
  const [lang, setLang] = useState("eng");
  useEffect(() => {
    Swal.fire({
      title: "Select language",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eng",
      cancelButtonText: "Thai",
    }).then((result) => {
      if (result.isConfirmed) {
        setLang("eng");
      } else {
        setLang("thai");
      }
    });
  }, []);
  return (
    <AppContext.Provider value={{ lang: lang }}>
      <div className="section" style={style.section}>
        <div className="container" style={style.container}>
          <div className="columns">
            <div className="column has-text-centered">
              <Header />
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-6">
              <Personal />
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-5">
              <div className="column">
                <Education />
              </div>
              <div className="column">
                <Award />
              </div>
              <div className="column">
                <Certificate />
              </div>
            </div>
            <div className="column is-5">
              <div className="column">
                <Contact />
              </div>
              <div className="column">
                <Qualification />
              </div>
              <div className="column">
                <Job />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Tool />
            </div>
          </div>
          {/* <div className="columns">
            <div className="column">
              <Website />
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </AppContext.Provider>
  );
}

const style = {
  section: {
    backgroundColor: "#eaeaea",
  },
  container: {
    border: "1px solid white",
    borderRadius: "30px",
    backgroundColor: "white",
  },
};

export default Resume;
