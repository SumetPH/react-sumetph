import React from "react";

import Personal from "../components/resume/Personal";
import Education from "../components/resume/Education";
import Contact from "../components/resume/Contact";
import Qualification from "../components/resume/Qualification";
import Award from "../components/resume/Award";
import FloatSocial from "../components/resume/backup/FloatSocial";
import Job from "../components/resume/Job";
import Certificate from "../components/resume/Certificate";
import Tool from "../components/resume/Tool";
import Header from "../components/resume/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex flex-wrap justify-center animate__animated animate__fadeInUp">
        <div className="w-full lg:w-full">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
            <Personal />
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <Education />
          <Award />
          <Certificate />
        </div>
        <div className="w-full lg:w-5/12">
          <Contact />
          <Qualification />
          <Job />
        </div>
        <div className="w-full">
          <Tool />
        </div>
      </div>

      <FloatSocial />
    </div>
  );
}
