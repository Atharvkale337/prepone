import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/college-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    // Close only if the click happens *outside the video element*
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
      <i
        className="fa-solid fa-xmark close-video"
        onClick={() => setPlayState(false)}
      ></i>
    </div>
  );
};

export default VideoPlayer;