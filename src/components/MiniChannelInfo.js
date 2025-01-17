import React, { useEffect, useState } from "react";
import { API_KEY, CHANNEL_DETAILS_API } from "../utils/config";

const MiniChannelInfo = ({ channelId }) => {
  // console.log(channelId);

  // console.log(channelId);

  const [channelData, setChannelData] = useState([]);
  useEffect(() => {
    const channelInfoLoader = async () => {
      const channelData = await fetch(
        CHANNEL_DETAILS_API + channelId + "&key=" + API_KEY
      );
      const channelJson = await channelData.json();

      // console.log(channelJson);

      setChannelData(channelJson.items);
    };
    channelInfoLoader();
  }, []);
  if (channelData.length === 0) return null;
  const channelImage = channelData[0].snippet.thumbnails.default.url;
  const channelTitle = channelData[0].snippet.title;

  // console.log(channelImage);
  return (
    <div className=" lg:mt-4 mt-1 lg:ml-10 ml-2  flex ">
      <img
        className="rounded-xl  w-8 h-8"
        alt="channel-image"
        src={channelImage}
      />
      <ul className="flex flex-col">
        <li className="font-semibold text-slate-500  ml-4">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default MiniChannelInfo;
