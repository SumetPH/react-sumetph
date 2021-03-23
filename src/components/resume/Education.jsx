import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-4">
      <h2 className="font-bold text-2xl">Education</h2>
      <div className="text-md">
        <Timeline style={{ fontSize: "1rem", fontWeight: 400 }}>
          <TimelineEvent
            title=""
            icon={<FaGraduationCap />}
            iconColor="#4a4a4a"
            contentStyle={{
              backgroundColor: "rgba(55, 65, 81)",
              borderRadius: 8,
            }}
          >
            <span>
              2017 : Diploma in Electronic Srisongkram Industrial Technology,
              Nakhonphanom University
            </span>
            <br />
            GPA : 3.65
          </TimelineEvent>
          <TimelineEvent
            title=""
            icon={<FaGraduationCap />}
            iconColor="#4a4a4a"
            contentStyle={{
              backgroundColor: "rgba(55, 65, 81)",
              borderRadius: 8,
            }}
          >
            <span>
              2019 : Bachelor of Business Administration Program in Computer
              Information System Rajamangala University of Technology Isan Sakon
              Nakhon Campus
            </span>
            <br />
            GPA : 3.69
          </TimelineEvent>
        </Timeline>
      </div>
    </div>
  );
}

export default Education;
