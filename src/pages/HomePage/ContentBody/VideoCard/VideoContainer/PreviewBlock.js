import React, { useState } from "react";
import { VideoContainer } from "./VideoContainer/VideoContainer.js";
import "./PreviewBlock.css";

const PreviewBlock = ({ videoData }) => {
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);

  const handleHover = () => {
    setIsPreviewHovered(true);
  };

  const handleLeave = () => {
    setIsPreviewHovered(false);
  };
  return (
    <div className="preview-container">
      <div
        className="preview-block"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <VideoContainer
          videoContainerData={videoData}
          previewHover={isPreviewHovered}
        />
      </div>
      <div className="description-box">{videoData.description}</div>
    </div>
  );
};

export { PreviewBlock };
