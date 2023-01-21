import React, { useState, useRef } from "react";
import "./VideoContainer.css";

const VideoContainer = (props) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [muted, setMuted] = useState(false);
  const muteButtonRef = useRef(null);
  const videoRef = useRef(null);

  const handleEnter = () => {
    props.handleHover();
    videoRef.current.play();
  };
  const handleLeave = () => {
    props.handleLeave();
    videoRef.current.load();
  };
  const toggleMute = () => {
    setMuted(!muted);
    videoRef.current.muted = !muted;
  };
  return (
    <div className="video-container">
      <video
        className={`video ${
          props.hoverVisible && videoLoaded ? "expand-video" : ""
        }`}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        ref={videoRef}
        preload="metadata"
        controls={false}
        onLoadedData={() => {
          setVideoLoaded(true);
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
      {videoLoaded && props.hoverVisible && (
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
