import React from "react";
import SideBar from "./SideBar";

import { Outlet } from "react-router-dom"; //* see line 108 of of notes
import Head from "./Head";

const Body = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="relative">
=======
      <div>
>>>>>>> bd1fdf985bea3ed11d494f70db79bc74ae94cc93
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
