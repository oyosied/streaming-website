import React, { useState } from "react";
import "./Slider.css";

const Slider = (props) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  //const handleSize = "3rem";
  const imgGap = "0.25rem";
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex - 1);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  return (
    <div className="row">
      <div className="header">
        <h3 className="title">Title</h3>
        <div className="progress-bar"></div>
      </div>
      <div className="container">
        <button
          className="handle left-handle"
          onClick={() => handleClick("left")}
        >
          <div className="text">&#8249;</div>
        </button>
        <div
          className="slider"
          style={{
            transform: `translateX(${sliderIndex * -100}%)`,
            transition: "transform 250ms ease-in-out",
            margin: `0 ${imgGap}`,
          }}
        >
          {React.Children.map(props.children, (Component, i) => {
            return (
              <div className="item">
                {React.cloneElement(Component, {
                  key: i,
                })}
              </div>
            );
          })}
        </div>
        <button
          className="handle right-handle"
          onClick={() => handleClick("right")}
        >
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
};

export { Slider };
