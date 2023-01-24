import React, { useState, useRef } from "react";
import "./VideoContainer.css";
import { CircularProgress } from "@material-ui/core";

const VideoContainer = (props) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isVideoHover, setIsVideoHover] = useState(false);
  const [muted, setMuted] = useState(true);
  const muteButtonRef = useRef(null);
  const videoRef = useRef(null);

  const handleEnter = () => {
    console.log("in video");
    setIsVideoHover(true);
  };
  const playVideo = () => {
    setTimeout(() => videoRef.current.play(), 500);
  };
  const handleLeave = () => {
    console.log("Left video");
    setVideoLoaded(true);
    setVideoLoaded(false);
    setMuted(true);
    setIsVideoHover(false);
    videoRef.current.load();
  };
  const toggleMute = () => {
    setMuted(!muted);
    videoRef.current.muted = !muted;
  };

  return (
    <div
      className={`video-container`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {loading || !videoLoaded ? <CircularProgress /> : ""}

      <video
        className={`video ${
          videoLoaded && isVideoHover ? "expand-video" : "hidden"
        }`}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        ref={videoRef}
        preload="metadata"
        controls={false}
        muted={muted}
        onLoadedData={() => {
          setTimeout(() => {
            setVideoLoaded(true);
            setLoading(false);
            playVideo();
          }, 5000);
        }}
      />

      {!loading && videoLoaded && (
        <button
          className="mute-button"
          ref={muteButtonRef}
          onClick={toggleMute}
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      )}
    </div>
  );
};

export { VideoContainer };
