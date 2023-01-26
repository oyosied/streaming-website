import React, { useState, useRef } from "react";
import { CircularProgress } from "@material-ui/core";
import "./VideoContainer.css";
const VideoContainer = (props) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const handleEnter = () => {
    if (videoRef.current) {
      setIsVideoExpanded(true);
      setVideoLoaded(true);
      setTimeout(() => videoRef.current && videoRef.current.play(), 500);
    }
  };
  const handleLeave = () => {
    if (videoRef.current && !props.previewHover) {
      setVideoLoaded(false);
      setIsVideoExpanded(false);
      setLoading(true);
      setMuted(true);
      videoRef.current.load();
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
    videoRef.current.muted = !muted;
  };

  return (
    <div className={`video-container`} onMouseLeave={handleLeave}>
      <div className="circular-progress-wrapper">
        {loading ? <CircularProgress /> : ""}
      </div>

      <video
        className={`video ${videoLoaded && !loading ? "" : "hidden"}`}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        ref={videoRef}
        preload="metadata"
        controls={false}
        muted={true}
        onLoadedData={() => {
          setTimeout(() => {
            setLoading(false);
            handleEnter();
          }, 500);
        }}
      />
      {!loading && isVideoExpanded && videoLoaded && (
        <button className="mute-button" onClick={toggleMute}>
          {muted ? "Unmute" : "Mute"}
        </button>
      )}
    </div>
  );
};

export { VideoContainer };
