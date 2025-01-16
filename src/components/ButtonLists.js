import React, { useRef } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const list = [
  "All",
  "News",
  "Gaming",
  "Tech",
  "Spirituality",
  "Cooking",
  "Football",
  "Cricket",
  "Podcast",
  "Consciousness",
  "Sahasranaam",
  "Mixes",
  "Software",
  "Engineering",
  "History",
  "React",
  "Javascript",
  "Coding",
  "Jobs",
];
const ButtonLists = () => {
  const scrollRef = useRef(null);

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[0]).width
      );
      scrollRef.current.scrollLeft = scrollLeft - itemWidth * 1;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(scrollRef.current.children[0]).width
      );
      scrollRef.current.scrollLeft = scrollLeft + itemWidth * 1;
    });
  };

  return (
    <div className="flex   bg-black pb-2 flex-shrink">
      <button
        onClick={prev}
        className="hover:rounded-full w-10 h-10 mr-2 px-4 py-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white ml-2  font-extrabold "
      >
        &lt;
      </button>
      <div
        ref={scrollRef}
        className="lg:max-w-6xl bg-black overflow-x-hidden flex mx-2 flex-shrink  md:max-w-xl max-w-60"
      >
        {list.map((btnName, index) => {
          return (
            <Link key={index} to={"/results?search_query=" + btnName}>
              <Button name={btnName} />
            </Link>
          );
        })}
      </div>
      <button
        onClick={next}
        className="hover:rounded-full w-10 h-10  px-4 py-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white ml-2 font-extrabold"
      >
        &gt;
      </button>
    </div>
  );
};

export default ButtonLists;
