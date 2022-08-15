import React from "react";
import "./Third.css";
import third__lb from "../assets/third__leftbottom.jpg";
import third__lt from "../assets/third__lefttop.jpg";
import third__r from "../assets/third__right.jpg";

const Third = () => {
  return (
    <div className="third">
      <div className="third__img">
        <div className="third__left">
          <img src={third__lt} />
          <img src={third__lb} />
        </div>
        <div className="third__right">
          <img src={third__r}/>
        </div>
        <div className="third__color"></div>
      </div>

      <div className="text__p">
        <h3>
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </h3>
        <h4>
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We've learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </h4>
      </div>
    </div>
  );
};

export default Third;
