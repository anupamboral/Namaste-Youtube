import React from "react";
import { Link } from "react-router-dom";
import MiniChannelInfo from "./MiniChannelInfo";

const ChannelSearchResult = ({ info }) => {
  console.log(info);
  return (
    <div className="border-b-2 border-x-slate-400">
      <Link
        className="lg:flex px-4 pl-10 rounded-lg mb-2 w-full"
        to={"/channel/" + info.snippet.channelId}
      >
        <div className="lg:w-1/3 w-full flex justify-center content-center">
          <img
            className="lg:w-[160px] w-[180px] p-1 h-[150px] m-1 rounded-full items-center "
            alt="video thumbnail"
            src={info.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="w-2/3">
          <h2 className="lg:text-2xl text-xl lg:w-full w-[400px] p-2 lg:pl-10 lg:mt-6 mt-1 pb-0 lg:pb-3 pt-0 lg:pt-3">
            {info.snippet.title}
          </h2>{" "}
          <h2 className="text-xs lg:text-sm p-2 pb-0 lg:pl-10 max-h-12 overflow-hidden  lg:w-full w-[400px]">
            {info.snippet.description}
          </h2>
          <MiniChannelInfo channelId={info.snippet.channelId} />
        </div>
      </Link>
    </div>
  );
};

export default ChannelSearchResult;
