import React, { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"; //* see 116 line of notes

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  console.log(params.get("v"));
  useEffect(() => {
    //* for closing the sidebar when we open the watch page
    dispatch(closeMenu());
    const videoLoader = async () => {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/captions?part=snippet&videoId=M7FIvfx5J10&key=AIzaSyABDEgLcdCwAgnJj6gRhm-2HP6AdmQooXs"
      );
      const json = await data.json();
      console.log(json);
    };
    videoLoader();
  }, []);
  return <div>WatchPage</div>;
};

export default WatchPage;
