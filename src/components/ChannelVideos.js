import React, { useEffect, useState } from "react";
import { API_KEY, CHANNEL_VIDEOS_API } from "../utils/config";
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";

const ChannelVideos = ({ channelId }) => {
  console.log(channelId);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  useEffect(() => {
    videosLoader();
  }, []);
  const videosLoader = async () => {
    const data = await fetch(
      CHANNEL_VIDEOS_API + channelId + "&maxResults=50&key=" + API_KEY
    );
    const json = await data.json();
    console.log(json.items);
    setUploadedVideos(json.items);
  };
  console.log(uploadedVideos[0].contentDetails);
  if (uploadedVideos.length === 0) return null;
  return (
    <div>
      {uploadedVideos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <SearchResult info={video} />
        </Link>
      ))}
    </div>
  );
};

export default ChannelVideos;
