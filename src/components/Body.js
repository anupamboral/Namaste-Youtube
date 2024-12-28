import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className=" body flex text-white bg- bg-black">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
