import React, { useEffect } from "react";
import YouTube from "react-youtube";

const VideoPlayerHome = ({ videoId }) => {
  useEffect(() => {
    const player = document.getElementById("youtube-player");
    if (player) {
      player.playVideo();
    }
  }, []);

  return (
    <div className="h-[500px] w-screen">
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1, // Auto play the video
            controls: 0, // Hide video controls
            modestbranding: 1, // Hide YouTube logo
            showinfo: 0, // Hide video title and uploader info
          },
        }}
        id="youtube-player"
      />
    </div>
  );
};

export default VideoPlayerHome;
