import React, { useState } from "react";
import ImageContainer from "../../../../utils/components/ImageContainer";
import "./VideoCard.css";
import { PreviewBlock } from "./VideoContainer/PreviewBlock.js";

const VideoCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="card" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      {isHovered && <PreviewBlock />}
      <ImageContainer
        className={`picture ${!isHovered ? "" : "hidden"}`}
        imagePath="resting_cat.jpg"
        hoverVisible={!isHovered}
      ></ImageContainer>
    </div>
  );
};

export { VideoCard };
