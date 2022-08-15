import React from "react";
import "./Introduce.css";
import introduceImg from "../assets/introduce.jpg";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce__img">
        <img src={introduceImg} />
        <h1>Ableton</h1>
      </div>
      <div className="text__p">
        <h3>
          We make <a>Live</a>, <a>Live</a> and <a>Live</a> — unique software and
          hardware for music creation and performance. With these products, our
          community of users creates amazing things.
        </h3>
        <h4>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </h4>
      </div>
    </div>
  );
};

export default Introduce;
