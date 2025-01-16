import React from "react";
import SideBar from "./SideBar";

import { Outlet } from "react-router-dom"; //* see line 108 of of notes
import Head from "./Head";

const Body = () => {
  return (
    <div>
      <div className="relative">
        <Head />
      </div>
      <div className=" body flex text-white bg- bg-black overflow-hidden">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
