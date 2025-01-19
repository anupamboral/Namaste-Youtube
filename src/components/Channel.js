import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, CHANNEL_DETAILS_API } from "../utils/config";

import ChannelVideos from "./ChannelVideos";

const Channel = () => {
  const { channelId } = useParams();
  // console.log(channelId);
  const [channelData, setChannelData] = useState([]);
  useEffect(() => {
    const channelLoader = async () => {
      const data = await fetch(
        CHANNEL_DETAILS_API +
          channelId +
          "&maxResults=50&type=video&videoDuration=long&key=" +
          API_KEY
      );
      const json = await data.json();
      console.log(json);
      setChannelData(json.items);
    };
    channelLoader();
  }, []);
  if (channelData.length === 0) return null;
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <img
          alt="channel-background-image"
          src={channelData[0].snippet.thumbnails.high.url}
          className="lg:w-[500px] lg:h-56 h-40 rounded-2xl w-full"
        />
      </div>
      <div className="lg:w-[1000px] lg:h-60 h-40 rounded-2xl w-full flex">
        <div className="w-1/3 lg:mr-6">
          <img
            alt="channel-background-image"
            src={channelData[0].snippet.thumbnails.medium.url}
            className="lg:ml-48 lg:mr-6 ml-2 m-4 lg:w-[150px] lg:h-40 h-20 rounded-full w-full"
          />
        </div>
        <div className="ml-6  w-2/3 p-6 pt-0">
          <h3 className="mt-5 mb-2 lg:text-5xl text-3xl font-bold">
            {channelData[0].snippet.title}
          </h3>
          <ul className=" flex">
            <li className="font-bold">{channelData[0].snippet.customUrl}</li>
            <li className="ml-2 text-slate-400">
              * {Math.round(channelData[0].statistics.subscriberCount) / 1000}K
              subscribers
            </li>
            <li className="ml-2 text-slate-400">
              * {channelData[0].statistics.videoCount} videos
            </li>
          </ul>
          <details className="relative">
            <summary>About</summary>
            <p className="absolute p-2 z-10 bg-slate-800 rounded-lg">
              {channelData[0].snippet.localized.description}
            </p>
          </details>

          <button className="p-1 items-center font-bold  mt-1 rounded-3xl flex bg-slate-800 hover:bg-slate-600 pr-2 mb-2">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Cxh896cVCHOzOHpXujmz9V4LdtSuw8--AA&s"
              alt="bell-icon"
              className="w-10 rounded-full m-2"
            />
            Subscribe
          </button>
        </div>
      </div>
      <div className="pt-4">
        <ChannelVideos channelId={channelId} />
      </div>
    </div>
  );
};

export default Channel;
