import React, { useEffect, useState } from "react";
import { API_KEY, COMMENT_API } from "../utils/config";
import Comment from "./Comment";

const VideoComments = ({ videoId, channelId }) => {
  // console.log(videoId);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const commentLoader = async () => {
      const data = await fetch(COMMENT_API + videoId + "&key=" + API_KEY);
      const json = await data.json();
      // console.log(json);
      json.error ? setComments([]) : setComments(json?.items); //* in some videos the comments are disabled, so for those videos we added this condition , so even api returns error because of comments disabled we can still show the video without comments, so if it returns error then we will keep the state variable empty array.
    };

    commentLoader();
  }, []);
  if (comments.length === 0) return null;
  return (
    <div className=" lg:w-[900px] w-[340px] h-[600px] overflow-y-scroll lg:mx-10 mx-2 border-b-2 border-white pb-4 m-10">
      {comments.map((comment) => (
        <Comment key={comment.id} commentData={comment} />
      ))}
    </div>
  );
};

export default VideoComments;
