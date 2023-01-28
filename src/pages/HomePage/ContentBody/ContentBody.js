import React from "react";
import { VideoCard } from "./VideoCard/VideoCard.js";
import { Slider } from "./Slider/Slider.js";
import "./ContentBody.css";

const ContentBody = () => {
  return (
    <div>
      <Slider>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Slider>
      <Slider>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Slider>
      <Slider>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Slider>
      <Slider>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Slider>
    </div>
  );
};

export { ContentBody };
