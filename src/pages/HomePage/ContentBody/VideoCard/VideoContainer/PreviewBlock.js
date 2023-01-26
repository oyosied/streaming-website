import React, { useState } from "react";
import { VideoContainer } from "./VideoContainer/VideoContainer.js";
import "./PreviewBlock.css";

const PreviewBlock = (props) => {
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);

  const handleHover = () => {
    setIsPreviewHovered(true);
  };

  const handleLeave = () => {
    setIsPreviewHovered(false);
  };
  return (
    <div
      className="preview-block"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <VideoContainer previewHover={isPreviewHovered} />
      <div className="description-box">
        <p>Some pseudo text describing the video</p>
      </div>
    </div>
  );
};

export { PreviewBlock };
