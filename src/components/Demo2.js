import React, { useRef, useState } from "react";

const Demo2 = () => {
  console.log("rendering");
  let x = 10;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  return (
    <div
      className={"w-96 h-96 border-2 m-4  border-white mt-24 bg-emerald-400"}
    >
      <button
        onClick={() => {
          x = x + 1;
          console.log(x);
        }}
        className=" m-2 p-2 rounded-lg bg-green-700"
      >
        Increase let(X)
      </button>
      <p className="p-2 text-black font-bold text-xl"> let(X) :- {x}</p>

      <button
        onClick={() => {
          setY(y + 1);
        }}
        className=" m-2 p-2 rounded-lg bg-green-700"
      >
        Increase State(Y)
      </button>
      <p className="p-2 text-black font-bold text-xl"> State(y) :- {y}</p>

      <button
        onClick={() => {
          ref.current = ref.current + 1;
          console.log(ref);
        }}
        className=" m-2 p-2 rounded-lg bg-green-700"
      >
        Increase Ref
      </button>
      <p className="p-2 text-black font-bold text-xl"> Ref :- {ref.current}</p>
    </div>
  );
};

export default Demo2;
