import React from "react";
import { Link } from "react-router-dom";
import MiniChannelInfo from "./MiniChannelInfo";

const SearchResult = ({ info }) => {
  console.log(info);
  return (
    <div>
      <Link
        className="lg:flex px-4 pl-10 rounded-lg mb-2 w-full"
        to={"/watch?v=" + info.id.videoId}
      >
        <div>
          <img
            className="lg:w-[400px] w-[380px] p-1 h-[250px] m-1 rounded-3xl"
            alt="video thumbnail"
            src={info.snippet.thumbnails.medium.url}
          />
        </div>
        <div>
          <h2 className="lg:text-2xl text-xl lg:w-full w-[400px] p-2 lg:pl-10 lg:mt-6 mt-1 pb-0 lg:pb-3 pt-0 lg:pt-3">
            {info.snippet.title}
          </h2>{" "}
          <h2 className="text-xs lg:text-sm p-2 pb-0 lg:pl-10  lg:w-full w-[400px]">
            {info.snippet.description}
          </h2>
          <MiniChannelInfo channelId={info.snippet.channelId} />
        </div>
      </Link>
    </div>
  );
};

export default SearchResult;