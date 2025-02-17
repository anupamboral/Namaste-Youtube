import React, { useEffect, useState } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom"; //* see 116 line of notes
import { API_KEY, YOUTUBE_VIDEO_API } from "../utils/config";
import ChannelInfo from "./ChannelInfo";
import VideoComments from "./VideoComments";
import LiveChatMessage from "./LiveChatMessage";
import LiveChat from "./LiveChat";
import ShimmerUI from "./ShimmerUI";

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
  if (videoInfo.length === 0) return <ShimmerUI />;

  return (
    <div className="lg:flex w-full lg:mr-2 pt-28 lg:pt-24">
      <div className="mx-auto lg:mx-2">
        <iframe
          className="m-2 lg:ml-20 lg:w-[900px] lg:h-[450px] w-[340px] h-72  shadow-2xl shadow-slate-500 rounded-2xl overflow-hidden"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className=" lg:ml-20 ml-2 font-bold text-xl lg:w-[900px] w-80">
          {videoInfo[0].snippet.title}
        </h2>
        <p className=" lg:ml-20 ml-2 text-sm lg:w-[900px] w-80">
          {Math.round(videoInfo[0].statistics.viewCount / 1000)}K views
        </p>
        <div className="lg:flex lg:w-[900px] w-80">
          <div className=" ">
            <Link to={"/channel/" + videoInfo[0].snippet.channelId}>
              <ChannelInfo channelId={videoInfo[0].snippet.channelId} />
            </Link>
          </div>
          <div className="flex">
            <button className="flex bg-slate-700 ml-10 rounded-l-full mt-4 p-2 h-12 w-20 hover:bg-slate-800 font-bold text-xl">
              <img
                className=" w-7 h-7 mr-1"
                alt="like"
                src="https://img.icons8.com/?size=256w&id=X0bivhUe8Vuv&format=png"
              ></img>
              {Math.floor(videoInfo[0].statistics.likeCount / 1000)}k{" "}
            </button>

            <button className="flex bg-slate-700  rounded-r-full mt-4 p-2 h-12 w-20 hover:bg-slate-800 font-bold">
              <img
                className=" w-7 h-7 ml-1"
                alt="unlike"
                src="https://img.icons8.com/?size=80&id=TUqJsJ4ey9V0&format=png"
              ></img>
            </button>
          </div>
        </div>
        <details className="m-5 lg:ml-20 w-80  lg:w-[900px] p-4  shadow-2xl bg-slate-900">
          <summary>Description</summary>
          {videoInfo[0].snippet.description}
        </details>
        <h3 className="m-5 ml-20 text-2xl border-b-2 border-emerald-400">
          {videoInfo[0].statistics.commentCount} Comments
        </h3>
        <div className="lg:w-[900px] w-96">
          <VideoComments
            videoId={videoId}
            channelId={videoInfo[0].snippet.channelId}
          />
        </div>
      </div>
      {videoInfo[0].liveStreamingDetails && (
        <aside className="w-full border border-stone-200 h-[500px] mr-10 py-4 rounded-lg ">
          <p className="font-bold text-xl border-b-2 border-zinc-200 px-4 pb-2">
            Live Chat ||
            {videoInfo[0].liveStreamingDetails.concurrentViewers
              ? videoInfo[0].liveStreamingDetails.concurrentViewers +
                " people watching"
              : ""}
          </p>
          <LiveChat
            liveChatId={videoInfo[0].liveStreamingDetails.activeLiveChatId}
          />
        </aside>
      )}
    </div>
  );
};

export default WatchPage;
