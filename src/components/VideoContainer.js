import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/config";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      console.log(json.items);
      setVideos(json.items);
    };
    getVideos();
  }, []);

  if (videos.length === 0) return null;
  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
