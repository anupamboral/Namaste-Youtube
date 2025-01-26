import React from "react";
import MiniChannelInfo from "./MiniChannelInfo";

const SearchResult = ({ info }) => {
  // console.log(info);
  const publishDetails = new Date(info.snippet.publishedAt);
  const publishDate = publishDetails.getDate();
  const publishMonth = publishDetails.getMonth() + 1; //* month counting starts from 0 thats why we have to add 1
  const publishYear = publishDetails.getFullYear();
  const publishHour = publishDetails.getHours();
  const publishMinutes = publishDetails.getMinutes();

  // console.log(
  //   publishDate,
  //   publishMonth,
  //   publishYear,
  //   publishHour,
  //   publishMinutes
  // );
  return (
    <div className="lg:flex px-4 lg:ml-10 pl-2 hover:bg-slate-950 rounded-lg mb-2 w-full">
      <div className="lg:w-1/3">
        <img
          className="lg:w-[400px] w-[380px] p-1 h-[250px] m-1 rounded-3xl"
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
        <div className="ml-10 text-slate-500">
          <p>Date - {publishDate + "/" + publishMonth + "/" + publishYear}</p>
          <p>
            Posting Time - {publishHour} :
            {publishMinutes === 0 ? " 00" : " " + publishMinutes}
            {publishHour > 12 ? " pm" : " am"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
