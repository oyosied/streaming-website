import React, { useState, useRef } from "react";
import "./VideoContainer.css";

const VideoContainer = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef(null);

  const handleHover = () => {
    if (videoLoaded && videoVisible) {
      videoRef.current.play();
    }
  };

  const handleLeave = () => {
    setVideoVisible(false);
    setVideoLoaded(false);
    videoRef.current.load();
  };

  const toggleMute = () => {
    setMuted(!muted);
    videoRef.current.muted = !muted;
  };
  return (
    <div
      className="video-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <video
        className={`video ${videoVisible && videoLoaded ? "expand-video" : ""}`}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        ref={videoRef}
        preload="metadata"
        controls={false}
        onLoadedData={() => {
          console.log("Play2");
          setVideoVisible(true);
          setVideoLoaded(true);
        }}
      />
      {videoLoaded && videoVisible && (
        <button className="mute-button" onClick={toggleMute}>
          {muted ? "Unmute" : "Mute"}
        </button>
      )}
    </div>
  );
};

export { VideoContainer };
