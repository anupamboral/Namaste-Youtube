import React from "react";

const LiveChatMessage = ({ name, message, imgUrl }) => {
  return (
    <div className=" flex hover:bg-slate-900  mt-4 items-start cursor-grabbing">
      <img
        alt="user"
        className="bg-black h-8 w-8  mr-1 border-white border-2 rounded-3xl hover:shadow-white hover:shadow-md transition-all"
        src={
          imgUrl
            ? imgUrl
            : "https://getdrawings.com/vectors/person-icon-vector-26.jpg"
        }
      />
      <p className="ml-2 text-slate-400">{name}</p>
      <p className="ml-4 w-3/4">{message}</p>
    </div>
  );
};

export default LiveChatMessage;
