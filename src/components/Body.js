import React from "react";
import SideBar from "./SideBar";

import { Outlet } from "react-router-dom"; //* see line 108 of of notes
import Head from "./Head";

const Body = () => {
  return (
    <div className="">
      <div>
        <div>
          <Head />
        </div>
        <div className=" body flex text-white  bg-black overflow-hidden">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
