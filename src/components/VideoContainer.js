import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_LIST_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_LIST_API);
      const json = await data.json();
      console.log(json);
      setVideos(json.items);
    };
    getVideos();
  }, []);

  if (videos.length === 0) return <ShimmerUI />;
  return (
    <div className="flex flex-wrap justify-evenly ">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
