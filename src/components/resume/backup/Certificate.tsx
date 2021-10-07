import c1 from "./certificate/ic3_1.jpg";
import c2 from "./certificate/ic3_2.jpg";
import Card from "../_Card";

const Certificate = () => {
  return (
    <Card title="Certificate">
      <div className="">
        <a className="hover:text-white" href={c1} target="_bank">
          IC3 Key Applications - Global Standard 5
        </a>
        <p></p>
        <a className="hover:text-white" href={c2} target="_bank">
          IC3 Computing Fundamentals - Global Standard 5
        </a>
      </div>
    </Card>
  );
};

export default Certificate;
