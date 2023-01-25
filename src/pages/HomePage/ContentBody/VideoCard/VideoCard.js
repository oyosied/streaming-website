import React, { useState } from "react";
import ImageContainer from "../../../../utils/components/ImageContainer";
import "./VideoCard.css";
import { VideoContainer } from "./VideoContainer/VideoContainer";

const VideoCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    console.log(1);
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="card" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      {isHovered && <VideoContainer />}
      <ImageContainer
        className={`picture ${!isHovered ? "" : "hidden"}`}
        imagePath="resting_cat.jpg"
        hoverVisible={!isHovered}
      ></ImageContainer>
    </div>
  );
};

export { VideoCard };
