import React, { useState, useEffect, useContext } from "react";
import { VideoCard } from "../VideoCard/VideoCard";
import { UserContext } from "../../../../utils/store/AuthContext";
import "./Slider.css";

const Slider = (props) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const { token } = useContext(UserContext);
  const [itemsPerScreen, setItemsPerScreen] = useState(null);
  useEffect(() => {
    const sliderElement = document.querySelector(".slider");
    setItemsPerScreen(
      window
        .getComputedStyle(sliderElement)
        .getPropertyValue("--items-per-screen") - 0
    );
    const handleResize = () => {
      setItemsPerScreen(
        window
          .getComputedStyle(sliderElement)
          .getPropertyValue("--items-per-screen") - 0
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <h3 className="title">{props.genre["name"]}</h3>
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
          {itemsPerScreen &&
            props.genre.series.map((serie, i) => {
              console.log(serie);
              const firstChildIndex = sliderIndex * itemsPerScreen;
              const lastChildIndex = firstChildIndex + itemsPerScreen - 1;
              return (
                <div
                  key={serie + i}
                  className={`item ${
                    i === lastChildIndex
                      ? "last-child"
                      : i === firstChildIndex
                      ? "first-child"
                      : ""
                  }`}
                >
                  <VideoCard key={serie} previewContent={serie}></VideoCard>
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
