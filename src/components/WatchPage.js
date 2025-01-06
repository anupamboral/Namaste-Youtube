import React, { useEffect, useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"; //* see 116 line of notes
import { API_KEY, YOUTUBE_VIDEO_API } from "../utils/config";
import ChannelInfo from "./ChannelInfo";
import VideoComments from "./VideoComments";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams(); //* this hook is for searching the param from the url using any specific query key(letter) you want in this case our key is v.
  const videoId = params.get("v");
  // console.log(params.get("v"));
  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    //* for closing the sidebar when we open the watch page
    dispatch(closeMenu());
    const videoLoader = async () => {
      const data = await fetch(YOUTUBE_VIDEO_API + videoId + "&key=" + API_KEY);
      const json = await data.json();
      console.log(json.items[0]);
      setVideoInfo(json.items);
    };

    videoLoader();
    console.log(videoInfo.length === 1);
  }, []);
  //* early return
  if (videoInfo.length === 0) return null;

  return (
    <div>
      <iframe
        className="m-5 ml-20 w-[900px] h-[450px] shadow-2xl shadow-slate-500"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h2 className=" ml-20 font-bold text-xl">{videoInfo[0].snippet.title}</h2>
      <div className="flex">
        <div className="flex flex-col">
          <ChannelInfo channelId={videoInfo[0].snippet.channelId} />
        </div>
        <button className="flex bg-slate-700 ml-10 rounded-lg mt-4 p-2 h-12 w-36 hover:bg-slate-800 font-bold">
          <img
            className=" w-8 h-8 mr-1"
            alt="like"
            src="https://img.icons8.com/?size=256w&id=X0bivhUe8Vuv&format=png"
          ></img>
          {Math.floor(videoInfo[0].statistics.likeCount / 1000)}k |
          <img
            className=" w-8 h-8 ml-1"
            alt="unlike"
            src="https://img.icons8.com/?size=80&id=TUqJsJ4ey9V0&format=png"
          ></img>
        </button>
      </div>
      <details className="m-5 ml-20 w-[900px] p-4  shadow-2xl bg-slate-900">
        <summary>Description</summary>
        {videoInfo[0].snippet.description}
      </details>
      <h3 className="m-5 ml-20 ">
        {videoInfo[0].statistics.commentCount} Comments
      </h3>
      <div>
        <VideoComments
          videoId={videoId}
          channelId={videoInfo[0].snippet.channelId}
        />
      </div>
    </div>
  );
};

export default WatchPage;
