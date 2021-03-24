import React from "react";
import Card from "./_Card";

function Job() {
  return (
    <Card title="Job Target">
      <div className="mb-3">
        <h3 className="font-bold text-lg">Front-end</h3>
        <ul className="list-disc pl-8">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div className="mb-3">
        <h3 className="font-bold text-lg">Back-end</h3>
        <ul className="list-disc pl-8">
          <li>Node.js</li>
          <li>PHP</li>
        </ul>
      </div>
      <div className="mb-3">
        <h3 className="font-bold text-lg">Framework & Library</h3>
        <ul className="list-disc pl-8">
          <li>React.js</li>
          <li>Vue.js</li>
          <li>Express.js</li>
          <li>Laravel</li>
        </ul>
      </div>
    </Card>
  );
}

export default Job;
