import React from "react";
import SideBar from "./SideBar";

import { Outlet } from "react-router-dom"; //* see line 108 of of notes

const Body = () => {
  return (
    <div className=" body flex text-white bg- bg-black overflow-hidden">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
