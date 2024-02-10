// ReflectionsComponent.js
import React from "react";
import "./MasterComponent.css"; // Make sure to import the corresponding CSS file
import { useState, useEffect } from "react";
import { getVideo } from "../../Hooks/Api";
import VideoPlayer from "../videoPlayer/VideoPlayer";

const MasterCard = ({ id }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const data = async () => {
      const videoData = await getVideo(id);
      setVideo(videoData?.results[0]);
    };
    data();
  }, []);

  return (
    <>
      <div className=" text-martel-sans text-white top px-5 pt-3">
        <div className="columns">
          <div className="column is-full featured_wrapper p-0">
            {/* <img
              src={`${process.env["TMDB_IMG_URL"]}${moviesList[2]?.poster_path}`}
              className="featured max-h-[800px]  object-cover"
              alt="Featured Image"
            /> */}

            <VideoPlayer
              videoUrl={"https://www.youtube.com/watch?v=" + video?.key}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterCard;
