import React from "react";

const Comment = ({ commentData }) => {
  console.log(commentData.snippet);
  const publishDetails = new Date(
    commentData.snippet.topLevelComment.snippet.publishedAt
  );
  const publishDate = publishDetails.getDate();
  const publishMonth = publishDetails.getMonth() + 1; //* month counting starts from 0 thats why we have to add 1
  const publishYear = publishDetails.getFullYear();
  const publishHour = publishDetails.getHours();
  const publishMinutes = publishDetails.getMinutes();

  const commentText =
    commentData.snippet.topLevelComment.snippet.textDisplay.replace(
      /<[^>]+>/g,
      ""
    ); //* converting html elements(comments) to normal string because some comments where in html format.
  console.log(
    publishDate,
    publishMonth,
    publishYear,
    publishHour,
    publishMinutes
  );
  return (
    <div className="flex m-4 py-6 lg:mx-10 mx-2 bg-slate-900 lg:w-[900px]">
      <img
        className="lg:ml-20 ml-2 rounded-3xl w-10 h-10"
        alt="commenter-Image"
        src={commentData.snippet.topLevelComment.snippet.authorProfileImageUrl}
      />
      <ul className="ml-2">
        <li className="">
          {commentData.snippet.topLevelComment.snippet.authorDisplayName}
        </li>
        <li className="lg:ml-2 flex text-slate-500">
          <p className="mr-2">
            Date - {publishDate + "/" + publishMonth + "/" + publishYear}
          </p>
          <p>
            Posting Time - {publishHour} :
            {publishMinutes === 0 ? " 00" : " " + publishMinutes}
            {publishHour > 12 ? " pm" : " am"}
          </p>
        </li>
        <li>{commentText}</li>
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
