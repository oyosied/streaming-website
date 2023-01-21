import React from "react";
import ImageContainer from "../../../../utils/components/ImageContainer";
import "./VideoCard.css";
import { VideoContainer } from "./VideoContainer/VideoContainer";

const VideoCard = (props) => {
  return (
    <div className="card">
      <div className="card-inner">
        <VideoContainer />
        <ImageContainer
          className={`picture`}
          imagePath="resting_cat.jpg"
        ></ImageContainer>
      </div>
    </div>
  );
};

export { VideoCard };
