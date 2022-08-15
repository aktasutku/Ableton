import React from "react";
import "./Fourth.css";
import fourth from "../assets/fourth.jpg";

const Fourth = () => {
  return (
    <div className="fourth">
      <img src={fourth} />
      <div className="fourth__p">
        <p>
          We’re really proud of the work we’ve done so far. But there’s so much
          more to come. If you’d like to be a part of it, please join us.
        </p>
        <a href="https://www.linkedin.com/in/aktasutku94/">
          See latest jobs {">"}
        </a>
      </div>
      <p></p>
    </div>
  );
};

export default Fourth;
