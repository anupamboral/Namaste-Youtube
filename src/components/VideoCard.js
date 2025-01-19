import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { statistics, snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" w-80 m-4 hover:shadow-slate-400 hover:bg-slate-950 shadow-sm rounded-lg">
      <img
        className=" w-80 rounded-lg"
        alt="Video thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-extrabold px-2 mt-2">{title}</li>
        <li className="my-2 px-2">{channelTitle}</li>
        <li className="my-2 px-2">
          {Math.round(statistics?.viewCount / 1000)}K views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
