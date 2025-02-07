import React from "react";
import userImg from "../imgs/user-img2.png";
const LiveChatMessage = ({ name, message, imgUrl }) => {
  return (
    <div className=" flex hover:bg-slate-900  mt-4 items-start cursor-grabbing">
      <img
        alt="user"
        className="bg-black h-10 w-12  mr-1   rounded-3xl hover:shadow-md transition-all"
        src={imgUrl ? imgUrl : userImg}
      />
      <p className="ml-2 text-slate-400">{name}</p>
      <p className="ml-4 w-3/4">{message}</p>
    </div>
  );
};

export default LiveChatMessage;
