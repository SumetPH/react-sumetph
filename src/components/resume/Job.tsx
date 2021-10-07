import Card from "./_Card";

const Job = () => {
  return (
    <Card title="Job Target">
      <div className="mb-3">
        <h3 className="font-bold text-lg">Front-end</h3>
        <ul className="list-disc pl-8">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>React.js</li>
        </ul>
      </div>
      <div className="mb-3">
        <h3 className="font-bold text-lg">Back-end</h3>
        <ul className="list-disc pl-8">
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
      </div>
    </Card>
  );
};

export default Job;
