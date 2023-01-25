import React from "react";
import { VideoCard } from "./VideoCard/VideoCard.js";
import "./ContentBody.css";

const ContentBody = () => {
  return (
    <div className="square-card">
      <VideoCard />
    </div>
  );
};

export { ContentBody };
