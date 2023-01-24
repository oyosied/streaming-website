import React from "react";
import { VideoCard } from "./VideoCard/VideoCard.js";
import "./ContentBody.css";

const ContentBody = () => {
  return (
    <div>
      <div className="square-card">
        <VideoCard />
      </div>
    </div>
  );
};

export { ContentBody };
