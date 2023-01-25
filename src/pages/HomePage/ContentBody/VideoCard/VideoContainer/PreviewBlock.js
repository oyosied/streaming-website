import React from "react";
import { VideoContainer } from "./VideoContainer/VideoContainer.js";
import "./PreviewBlock.css";

const PreviewBlock = (props) => {
  return (
    <div className="preview-block">
      <VideoContainer />
    </div>
  );
};

export { PreviewBlock };
