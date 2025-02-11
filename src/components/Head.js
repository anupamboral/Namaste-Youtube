import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";

import logo from "../imgs/logo-3.png";
import userImg from "../imgs/user-img.png";
import menuIcon from "../imgs/menu-icon2.png";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState(""); //* for keep track what the user is typing
  // console.log(searchQuery);
  const [mobileSearchBar, setMobileSearchBar] = useState(false);
  const [suggestions, setSuggestions] = useState([]); //* suggestion data coming from api.

  const navigate = useNavigate(); //*This hook allows the programmer to navigate the user to a new page without the user interacting. we will use this hook to navigate the user to search results page when he search something on te search bar, because here we can't use Link component when onClick event or onSubmit Event occurs. check documentation for more info.

  //*for hiding onBlur(focus out) and displaying suggestion on focus
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    //*making apn api call on each key press
    //* but if the difference between two api more than 200 milliseconds
    //* decline the api call(debouncing)

    const timer = setTimeout(
      () => (searchQuery.length > 0 ? getSearchQuery() : null),
      500
    ); //* setting a timer of 200ms(later changed to 500ms) for making the api call if searchQuery is not empty.

    //* making suggestions empty when there is no user input
    if (searchQuery.length === 0) setSuggestions([]);

    //* for increasing the input search bar width for mobile devices when user input data for searching
    if (searchQuery.length > 0) setMobileSearchBar(true);
    if (searchQuery.length === 0) setMobileSearchBar(false); //* if the input box has no input then it should come back to its normal size.

    //* To decline the api call will use the return function which used as a cleanup function, and this clean up return function will be only called when the current component will be unmounted/trashed.
    //* suppose user is trying to type "iphone", he pressed first i
    //* so our useEffect will be called and the timer of 200ms will start and after 200ms it will male the make api call.
    //* but before 200ms if the user press "p", our state variable will update and immediately it will trigger the reconciliation process, so this process will unmount/trashed the current component and update it a new refreshed component.
    //* will unmounting our return cleanup function will be called and there we will clear our timeout,
    //*  then our new component will be mounted and it will again start a new timer of 200s.
    return () => clearTimeout(timer); //* this clean up return function will be only called when the current component will be unmounted/trashed.
  }, [searchQuery]);
  const getSearchQuery = async () => {
    //* old rapid api
    // const url =
    //   AUTO_COMPLETE_SEARCH_API +
    //   searchQuery +
    //   AUTO_COMPLETE_SEARCH_API_PARAMETERS;

    // const data = await fetch(url, AUTO_COMPLETE_SEARCH_API_OPTIONS);

    const data = await fetch(
      "http://api.tvmaze.com/search/shows?q=" + searchQuery
    ); //* this api is free with no request limit old one had limited usage quota.
    const json = await data.json();
    console.log(json);
    setSuggestions(json);
    // setSuggestions(json.suggestions);//*old from rapid api
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); //* action we created inside appSlice.js to collapse and expand the sidebar.
  };
  return (
    <div className="   p-2 shadow-lg grid grid-flow-col bg-black fixed w-screen">
      <div className=" flex grid-cols-1">
        <img
          className="lg:h-12 h-10  mt-1 lg:w-20 w-10    hover:shadow-red-800 hover:shadow-lg cursor-pointer rounded-3xl "
          alt="menu-icon"
          src={menuIcon}
          onClick={() => toggleMenuHandler()}
        />

        <Link to="/">
          <img
            className="h-16 lg:ml-1 mr-2 lg:w-48 cursor-pointer min-w-28 hover:shadow-white  rounded-3xl transition-all "
            alt="logo"
            src={logo}
          />
        </Link>
      </div>
      <div className=" grid-cols-10 ">
        <div className="flex">
          <input
            className={
              "border-solid pl-2 pt-2 pb-3 mt-3 text-xl shadow-lg hover:shadow-red-700 border-black w-4/5 h-10 rounded-l-full " +
              (mobileSearchBar &&
                "absolute lg:relative top-0   z-20 left-1 lg:left-auto lg:z-0  ")
            }
            type="text"
            placeholder="Search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true) && setMobileSearchBar(true)} //*make it true when api starts working
            // onBlur={() => setShowSuggestions(false)}
            onKeyDown={
              (e) =>
                e.key === "Enter" &&
                navigate("/results?search_query=" + searchQuery) &&
                setSearchQuery("")
              // * opening the results page by changing the route and clearing the input box when user does the search by clicking enter
            }
          />

          <button
            onClick={() =>
              navigate("/results?search_query=" + searchQuery) &&
              setSearchQuery("")
            }
            className={
              " h-11 mt-[10px] bg-slate-700  shadow-md hover:shadow-sky-200 border-black border-2 rounded-r-full lg:rounded-r-full w-14 text-white p-1  pr-3 px-3  " +
              (mobileSearchBar &&
                " z-40 lg:right-auto absolute top-0 mt-[9px]  right-2 lg:z-0  lg:relative ")
            }
          >
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="">
            <ul
              className={
                "absolute   z-10 bg-slate-900 rounded" +
                (mobileSearchBar && " left-1 w-auto lg:left-auto")
              }
            >
              {suggestions.map((suggestion, index) => (
                <li
                  onClick={() =>
                    navigate("/results?search_query=" + suggestion.show.name) &&
                    setSearchQuery("")
                  }
                  key={index}
                  className="border-solid pl-3 p-3  m-1 text-l shadow-lg border-black lg:w-[30rem] w-48 bg-black rounded-lg mr-1 hover:bg-slate-800 text-white cursor-pointer"
                >
                  🔍 {suggestion.show.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" grid-cols-1">
        <img
          alt="user"
          className="bg-black lg:h-18 lg:w-20 h-12 w-18 lg:ml-auto md:ml-auto    rounded-full hover:shadow-red-700 hover:shadow-md transition-all"
          src={userImg}
        />
      </div>
    </div>
  );
};

export default Head;
