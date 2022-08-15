import React from "react";
import "./Second.css";

const Second = () => {
  return (
    <div className="second">
      <div className="second__video">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/M5QY2_8704o"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </div>
      <div className="text__p">
        <h3>
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </h3>
        <h4>
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </h4>
      </div>
    </div>
  );
};

export default Second;
