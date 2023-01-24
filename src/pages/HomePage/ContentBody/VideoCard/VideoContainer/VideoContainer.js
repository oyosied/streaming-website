import React, { useState, useRef } from "react";
import "./VideoContainer.css";
import { CircularProgress } from "@material-ui/core";

const VideoContainer = (props) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const muteButtonRef = useRef(null);
  const videoRef = useRef(null);

  const handleEnter = () => {
    props.handleHover();
  };
  const playVideo = () => {
    setTimeout(() => videoRef.current.play(), 500);
  };
  const handleLeave = () => {
    console.log("Left video");
    setVideoLoaded(true);
    setVideoLoaded(false);
    setMuted(true);
    props.handleLeave();
    videoRef.current.load();
  };
  const toggleMute = () => {
    setMuted(!muted);
    videoRef.current.muted = !muted;
  };

  const _video = ()=> {
    const video_tag = (<video
    className={`video ${
      videoLoaded && props.hoverVisible ? "expand-video" : "hidden"
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
  />)
  setTimeout(()=>{ return video_tag},500)  
  }
  return (
    <div
      className={`video-container ${props.hoverVisible ? "" : "hidden"}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {loading || !videoLoaded ? <CircularProgress /> : ""}

      {props.hoverVisible && _video}

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
