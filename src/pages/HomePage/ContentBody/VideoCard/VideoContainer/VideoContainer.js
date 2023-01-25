import React, { useState, useRef, useEffect } from "react";
import "./VideoContainer.css";
import { CircularProgress } from "@material-ui/core";

const VideoContainer = (props) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const handleEnter = () => {
    if (videoRef.current) {
      setVideoLoaded(true);
      setTimeout(() => videoRef.current && videoRef.current.play(), 500);
    }
  };
  const handleLeave = () => {
    if (videoRef.current) {
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

  useEffect(() => {
    if (isVideoExpanded && !loading && videoLoaded) {
      videoRef.current.parentElement.classList.add("expand-video");
    } else {
      videoRef.current.parentElement.classList.remove("expand-video");
    }
  }, [isVideoExpanded, loading, videoLoaded]);

  return (
    <div
      className="preview-block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="circular-progress-wrapper">
        {loading ? <CircularProgress /> : ""}
      </div>
      <div className={`video-container`}>
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
              setIsVideoExpanded(true);
            }, 500);
          }}
        />
        {!loading && (
          <button className="mute-button" onClick={toggleMute}>
            {muted ? "Unmute" : "Mute"}
          </button>
        )}
      </div>
    </div>
  );
};

export { VideoContainer };
