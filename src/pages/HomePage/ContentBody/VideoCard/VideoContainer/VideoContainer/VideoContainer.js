import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import "./VideoContainer.css";
const VideoContainer = ({ videoContainerData, previewHover }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleEnter = () => {
    if (videoRef.current) {
      setIsVideoExpanded(true);
      setVideoLoaded(true);
      setTimeout(() => videoRef.current && videoRef.current.play(), 500);
    }
  };
  const handleLeave = () => {
    if (videoRef.current && !previewHover) {
      setVideoLoaded(false);
      setIsVideoExpanded(false);
      setLoading(true);
      setMuted(true);
      videoRef.current.load();
    }
  };

  const handleVideoClick = () => {
    const seriesId = videoContainerData.id;
    const episodeId = 1;
    navigate(`/video/${seriesId}/${episodeId}`);
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
        className={`video`}
        src={videoContainerData["preview_video_url"]}
        ref={videoRef}
        preload="metadata"
        controls={false}
        muted={true}
        onClick={handleVideoClick}
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
