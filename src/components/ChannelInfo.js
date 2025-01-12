import React, { useEffect, useState } from "react";
import { API_KEY, CHANNEL_DETAILS_API } from "../utils/config";

const ChannelInfo = ({ channelId }) => {
  console.log(channelId);
  const [channelData, setChannelData] = useState([]);
  useEffect(() => {
    const channelInfoLoader = async () => {
      const channelData = await fetch(
        CHANNEL_DETAILS_API + channelId + "&key=" + API_KEY
      );
      const channelJson = await channelData.json();
      console.log(channelJson);
      setChannelData(channelJson.items);
    };
    channelInfoLoader();
  }, []);
  if (channelData.length === 0) return null;
  const channelImage = channelData[0].snippet.thumbnails.default.url;
  const channelTitle = channelData[0].snippet.title;
  const subscriberCount = channelData[0].statistics.subscriberCount;
  // console.log(channelImage);
  return (
    <div className=" mt-4 ml-2 lg:ml-20 flex ">
      <img
        className="rounded-3xl w-11"
        alt="channel-image"
        src={channelImage}
      />
      <ul className="flex flex-col">
        <li className="font-bold  ml-2">{channelTitle}</li>
        <li className="font-thin  ml-2">
          {subscriberCount / 1000}k subscribers
        </li>
      </ul>
    </div>
  );
};

export default ChannelInfo;
