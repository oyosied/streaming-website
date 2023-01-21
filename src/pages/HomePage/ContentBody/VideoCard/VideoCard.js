import React, { useState } from "react";
import ImageContainer from "../../../../utils/components/ImageContainer";
import "./VideoCard.css";
import { VideoContainer } from "./VideoContainer/VideoContainer";

const VideoCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="card">
      <div
        className="card-inner"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <VideoContainer
          hoverVisible={isHovered}
          handleHover={handleHover}
          handleLeave={handleLeave}
        />
        <ImageContainer
          className={`picture`}
          imagePath="resting_cat.jpg"
          hoverVisible={!isHovered}
        ></ImageContainer>
      </div>
    </div>
  );
};

export { VideoCard };
