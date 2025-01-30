import React, { useEffect, useState } from "react";
import { API_KEY, CHANNEL_VIDEOS_API } from "../utils/config";
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const ChannelVideos = ({ channelId }) => {
  console.log(channelId);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  useEffect(() => {
    videosLoader();
  }, []);
  const videosLoader = async () => {
    const data = await fetch(
      CHANNEL_VIDEOS_API +
        channelId +
        "&maxResults=50&type=video&videoDuration=long&key=" +
        API_KEY
    );
    const json = await data.json();
    console.log(json.items);
    setUploadedVideos(json.items);
  };
  // console.log(uploadedVideos[0].contentDetails);
  if (uploadedVideos.length === 0) return <ShimmerUI />;
  return (
    <div className="pl-4">
      {uploadedVideos.map((video) => (
        <Link key={video.etag} to={"/watch?v=" + video.id.videoId}>
          <SearchResult info={video} />
        </Link>
      ))}
    </div>
  );
};

export default ChannelVideos;
