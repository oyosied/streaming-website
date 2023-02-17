import React, { useState, useEffect, useMemo } from "react";
import { VideoCard } from "../VideoCard/VideoCard";
import "./Slider.css";

function Slider({ genre }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(5);
  const numberOfShownItems = parseInt(
    Math.ceil(genre.series.length / itemsPerScreen)
  );
  const imgGap = "0.25rem";

  useEffect(() => {
    const sliderElement = document.querySelector(".slider");
    setItemsPerScreen(
      parseInt(
        window
          .getComputedStyle(sliderElement)
          .getPropertyValue("--items-per-screen")
      )
    );
    const handleResize = () => {
      setItemsPerScreen(
        parseInt(
          window
            .getComputedStyle(sliderElement)
            .getPropertyValue("--items-per-screen")
        )
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleLeftClick() {
    setSliderIndex(
      (prevIndex) => (prevIndex - 1 + numberOfShownItems) % numberOfShownItems
    );
  }

  function handleRightClick() {
    setSliderIndex((prevIndex) => (prevIndex + 1) % numberOfShownItems);
  }

  const progressItems = useMemo(
    () =>
      Array.from({ length: numberOfShownItems }, (_, i) => (
        <div
          key={i}
          className={`progress-item ${i === sliderIndex ? "active" : ""}`}
        />
      )),
    [numberOfShownItems, sliderIndex]
  );
  return (
    <div className="row">
      <div className="header">
        <h3 className="title">{genre["name"]}</h3>
        {numberOfShownItems !== 1 && (
          <div className="progress-bar">{progressItems}</div>
        )}
      </div>
      <div className="container">
        {numberOfShownItems !== 1 && itemsPerScreen !== numberOfShownItems ? (
          <button className="handle left-handle" onClick={handleLeftClick}>
            <div className="text">&#8249;</div>
          </button>
        ) : (
          <div style={{ width: "2rem" }}></div>
        )}
        <div
          className="slider"
          style={{
            transform: `translateX(${sliderIndex * -100}%)`,
            transition: "transform 250ms ease-in-out",
            margin: `0 ${imgGap}`,
          }}
        >
          {itemsPerScreen &&
            genre.series.map((serie, i) => {
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
        {numberOfShownItems !== 1 ? (
          <button className="handle right-handle" onClick={handleRightClick}>
            <div className="text">&#8250;</div>
          </button>
        ) : (
          <div style={{ width: "2rem" }}></div>
        )}
      </div>
    </div>
  );
}

export { Slider };
