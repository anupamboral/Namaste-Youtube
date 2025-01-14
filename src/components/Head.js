import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import {
  AUTO_COMPLETE_SEARCH_API,
  AUTO_COMPLETE_SEARCH_API_OPTIONS,
  AUTO_COMPLETE_SEARCH_API_PARAMETERS,
} from "../utils/config";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState(""); //* for keep track what the user is typing
  console.log(searchQuery);
  const [suggestions, setSuggestions] = useState([]); //* suggestion data coming from api

  //*for hiding onBlur(focus out) and displaying suggestion on focus
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    //*making apn api call on each key press
    //* but if the difference between two api more than 200 milliseconds
    //* decline the api call(debouncing)

    const timer = setTimeout(
      () => (searchQuery.length > 0 ? getSearchQuery() : null),
      2000
    ); //* setting a timer of 200ms for making the api call if searchQuery is not empty.

    //* making suggestions empty when there is no user input
    if (searchQuery.length === 0) setSuggestions([]);

    //* To decline the api call will use the return function which used as a cleanup function, and this clean up return function will be only called when the current component will be unmounted/trashed.
    //* suppose user is trying to type "iphone", he pressed first i
    //* so our useEffect will be called and the timer of 200ms will start and after 200ms it will male the make api call.
    //* but before 200ms if the user press "p", our state variable will update and immediately it will trigger the reconciliation process, so this process will unmount/trashed the current component and update it a new refreshed component.
    //* will unmounting our return cleanup function will be called and there we will clear our timeout,
    //*  then our new component will be mounted and it will again start a new timer of 200s.
    return () => clearTimeout(timer); //* this clean up return function will be only called when the current component will be unmounted/trashed.
  }, [searchQuery]);
  const getSearchQuery = async () => {
    // const data = await fetch(
    //   SEARCH_SUGGESTIONS_API + searchQuery + "&key=" + API_KEY
    // );
    // const json = await data.json();
    // console.log(json);
    // setSuggestions(json.items);
    const url =
      AUTO_COMPLETE_SEARCH_API +
      searchQuery +
      AUTO_COMPLETE_SEARCH_API_PARAMETERS;
    const data = await fetch(url, AUTO_COMPLETE_SEARCH_API_OPTIONS);
    const json = await data.json();
    console.log(json.suggestions);
    setSuggestions(json.suggestions);
  };
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
        <Link to="/">
          <img
            className="h-16 ml-[-1rem] mr-1 w-40 cursor-pointer hover:shadow-white  rounded-3xl transition-all "
            alt="logo"
            src="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios.jpg"
          />
        </Link>
      </div>
      <div className=" grid-cols-10 ">
        <div>
          <input
            className="border-solid pl-2 pt-2 pb-3 mt-3 text-xl shadow-lg border-black w-4/5 h-10 rounded-l-full mr-1"
            type="text"
            placeholder="Search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(false)} //*make it true when api starts working
            onBlur={() => setShowSuggestions(false)}
          />
          <Link to={"/results?search_query=" + searchQuery}>
            <button className=" h-10 mt-1 shadow-white shadow-md border-black border-2 rounded-r-full text-white p-2 px-4  hover:shadow-gray-200">
              🔍
            </button>
          </Link>
        </div>
        {showSuggestions && (
          <div className="relative">
            <ul className="absolute  z-10 bg-slate-900 rounded">
              {suggestions.map((suggestion, index) => (
                <Link
                  key={index}
                  to={"/results?search_query=" + suggestion.value}
                >
                  <li className="border-solid pl-3 p-3  m-1 text-l shadow-lg border-black w-[30rem] bg-black rounded-lg mr-1 hover:bg-slate-800 text-white">
                    🔍 {suggestion.value}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
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
