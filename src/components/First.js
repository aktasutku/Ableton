import React from "react";
import "./First.css";
import left from "../assets/first__left.jpg";
import right from "../assets/first__right.jpg";

const First = () => {
  return (
    <div className="first">
      <div className="first__img">
        <div className="first__left">
          <img src={left} />
        </div>
        <div className="first__right">
          <img src={right} />
        </div>
        <div className="first_bgcolor"></div>
      </div>
      <div className="text__p">
        <h3>
          Making music isn't easy. It takes time, effort, and learning. But when
          you're in the flow, it's incredibly rewarding.
        </h3>
        <h4>
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </h4>
      </div>
    </div>
  );
};

export default First;
