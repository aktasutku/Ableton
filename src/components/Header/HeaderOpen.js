import React, { useState } from "react";
import "./HeaderOpen.css";

const HeaderOpen = ({ isClicked }) => {

  return (
    <div className={isClicked ? "headerOpen__unvisible":"headerOpen"}>
      <div className="headerOpen__top">
        <h1>More on Ableton.com</h1>
        <ul>
          <li>Blog</li>
          <li>Ableton for the Classroom</li>
          <li>Ableton for Colleges and Universities</li>
          <li>Certified Training</li>
          <li>About Ableton</li>
          <li>Jobs</li>
          <li>Apprenticeships</li>
        </ul>
      </div>
      <div className="headerOpen__bottom">
        <h1>More from Ableton:</h1>
        <ul>
          <li>
            <h3>Loop</h3>
            <ul>
              <li>
                Watch Talks, Performances and Features from Ableton's Summit for
                Music Makers
              </li>
            </ul>
          </li>
          <li>
            <h3>Learning Music</h3>
            <ul>
              <li>Learn the fundamentals of music making right</li>
            </ul>
          </li>
          <li>
            <h3>Learning Synths</h3>
            <ul>
              <li>
                Get started with synthesis using a web-based synth and
                accompanying lessons.
              </li>
            </ul>
          </li>
          <li>
            <h3>Making Music</h3>
            <ul>
              <li>
                Some tips from 74 Creative Strategies for Electronic Producers.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderOpen;
