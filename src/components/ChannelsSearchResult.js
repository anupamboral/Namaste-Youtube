import React from "react";
import { Link } from "react-router-dom";
import MiniChannelInfo from "./MiniChannelInfo";

const ChannelSearchResult = ({ info }) => {
  // console.log(info);
  return (
    <div className="border-b-2 lg:w-full w-80 border-x-slate-400 rounded-lg my-4 lg:mx-16 mx-2 pb-4 hover:bg-slate-900">
      <div className="lg:flex px-2 lg:pl-10 pl-2  mb-2 w-full">
        <div className="lg:w-1/3 w-full flex justify-center content-center">
          <img
            className="lg:w-80 w-80 p-1 h-80 m-1 rounded-full items-center "
            alt="video thumbnail"
            src={info.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="w-2/3">
          <h2 className="lg:text-2xl text-xl lg:w-full w-80 p-2 lg:pl-10 pl-2lg:mt-6 mt-1 mx-4 pb-0 lg:pb-3 pt-0 lg:pt-3">
            {info.snippet.title}
          </h2>{" "}
          <h2 className="text-xs lg:text-sm p-2 pb-0 lg:pl-10 pl-2  overflow-hidden  lg:w-full w-72 mx-4">
            {info.snippet.description}
          </h2>
          <MiniChannelInfo channelId={info.snippet.channelId} />
        </div>
      </div>
    </div>
  );
};

export default ChannelSearchResult;
