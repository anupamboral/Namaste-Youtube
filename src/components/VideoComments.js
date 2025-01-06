import React, { useEffect, useState } from "react";
import { API_KEY, COMMENT_API } from "../utils/config";
import { CLSThresholds } from "web-vitals";
import Comment from "./Comment";

const VideoComments = ({ videoId, channelId }) => {
  console.log(videoId);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const commentLoader = async () => {
      const data = await fetch(COMMENT_API + videoId + "&key=" + API_KEY);
      const json = await data.json();
      console.log(json);
      setComments(json.items);
    };

    commentLoader();
  }, []);
  if (comments.length === 0) return null;
  return (
    <div className=" w-full p-4 m-2">
      {comments.map((comment) => (
        <Comment
          key={comment.snippet.topLevelComment.snippet.videoId}
          commentData={comment}
        />
      ))}
    </div>
  );
};

export default VideoComments;
