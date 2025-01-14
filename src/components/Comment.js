import React from "react";

const Comment = ({ commentData }) => {
  // console.log(commentData.snippet.topLevelComment.snippet);
  return (
    <div className="flex m-4 py-6 lg:mx-10 mx-2 bg-slate-900 lg:w-[900px]">
      <img
        className="lg:ml-20 ml-2 rounded-3xl w-10 h-10"
        alt="commenter-Image"
        src={commentData.snippet.topLevelComment.snippet.authorProfileImageUrl}
      />
      <ul className="ml-2">
        <li className="mb-2">
          {commentData.snippet.topLevelComment.snippet.authorDisplayName}
        </li>
        <li>{commentData.snippet.topLevelComment.snippet.textDisplay}</li>
        <button className="flex bg-slate-700 lg:ml-10 ml-5 rounded-lg mt-4 p-2 h-10 w-16 hover:bg-slate-800 font-bold">
          <img
            className=" w-4 h-4 mr-1"
            alt="like"
            src="https://img.icons8.com/?size=256w&id=X0bivhUe8Vuv&format=png"
          ></img>
          |
          <img
            className=" w-4 h-4 ml-1"
            alt="unlike"
            src="https://img.icons8.com/?size=80&id=TUqJsJ4ey9V0&format=png"
          ></img>
        </button>
      </ul>
      <hr />
    </div>
  );
};

export default Comment;
