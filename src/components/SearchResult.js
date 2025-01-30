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
    <div className="lg:flex px-auto lg:ml-10   hover:bg-slate-900 rounded-lg mb-2 lg:w-full w-80">
      <div className="lg:w-1/3">
        <img
          className="lg:w-[400px] w-96 p-1 h-[250px] m-1 rounded-3xl"
          alt="video thumbnail"
          src={info.snippet.thumbnails.medium.url}
        />
      </div>
      <div className="w-2/3">
        <h2 className="lg:text-3xl text-xl lg:w-full w-80 p-2 lg:pl-10 lg:mt-6 mt-1 pb-0 lg:pb-3 pt-0 lg:pt-3">
          {info.snippet.title}
        </h2>{" "}
        <h2 className="text-xs lg:text-sm p-2 pb-2 w-80 lg:pl-10 overflow-hidden  lg:w-full ">
          {info.snippet.description}
        </h2>
        <MiniChannelInfo channelId={info.snippet.channelId} />
        <div className="lg:ml-10 text-slate-500">
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
