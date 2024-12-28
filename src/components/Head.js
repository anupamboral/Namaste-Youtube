import React from "react";

const Head = () => {
  return (
    <div className="Head  p-2 shadow-lg grid grid-flow-col bg-black ">
      <div className=" flex grid-cols-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          className="h-9 mr-4 w-8 mt-2 bg-white rounded-xl "
        >
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
        <img
          className="h-16 w-40"
          alt="logo"
          src="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios.jpg"
        />
      </div>
      <div className=" grid-cols-10">
        <input
          className="border-solid p-1 text-xl shadow-lg border-black w-96 h-10 rounded-md mr-2"
          type="text"
        />
        <button className=" h-12 shadow-white shadow-md border-black border-2 rounded-lg text-white px-2 hover:shadow-gray-200">
          Search
        </button>
      </div>
      <div className=" grid-cols-1">
        <img
          alt="user"
          className="bg-black h-12 ml-auto mr-24 border-white border-2 rounded-3xl"
          src="https://getdrawings.com/vectors/person-icon-vector-26.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
