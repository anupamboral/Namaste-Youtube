import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState(""); //* for keep track what the user is typing
  console.log(searchQuery);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); //* action we created inside appSlice.js to collapse and expand the sidebar.
  };
  return (
    <div className="Head  p-2 shadow-lg grid grid-flow-col bg-black ">
      <div className=" flex grid-cols-1">
        <svg
          onClick={() => toggleMenuHandler()}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
          className="h-9 z-10  min-w-8 mt-3 mr-1 bg-white hover:shadow-white hover:shadow-lg cursor-pointer rounded-3xl "
        >
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
        <Link to={"/"}>
          <img
            className="h-16 ml-[-1rem] mr-1 w-40 cursor-pointer hover:shadow-white  rounded-3xl transition-all "
            alt="logo"
            src="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios.jpg"
          />
        </Link>
      </div>
      <div className=" grid-cols-10 grid-flow-col-dense">
        <input
          className="border-solid pl-2 pt-2 pb-3 mt-3 text-xl shadow-lg border-black w-4/5 h-10 rounded-l-full mr-1"
          type="text"
          placeholder="Search.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className=" h-10 mt-1 shadow-white shadow-md border-black border-2 rounded-r-full text-white p-2 px-4  hover:shadow-gray-200">
          🔍
        </button>
      </div>
      <div className=" grid-cols-1">
        <img
          alt="user"
          className="bg-black h-12 ml-auto mr-1 border-white border-2 rounded-3xl hover:shadow-white hover:shadow-md transition-all"
          src="https://getdrawings.com/vectors/person-icon-vector-26.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
