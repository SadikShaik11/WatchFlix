import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css"; // Import the CSS file for styling

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-player-container">
      <ReactPlayer
        url={videoUrl}
        playing={true}
        controls={true}
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default VideoPlayer;
