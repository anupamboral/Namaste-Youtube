import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

//* this file was created to understand the usage of useMemo() hook
const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false); //* so changing the background color of this box on click of the Change Theme button
  //*heavy operation(finding nth prime number)(Using UseMemo Hook)
  const prime = useMemo(() => findNthPrime(text), [text]); //* as the first  parameter this hook takes a function(not a function call because the hook will call the function itself) (heavy task performing function we want to cache), and in the cacheValue constant it will cache the value which will be return by the  function, and second parameter is the dependency array. here we mention the dependencies. So that means it will cache value between every rerender except when the dependency array changes .
  //* So it will cache the value between every rerender except the text state variable changes because it is mentioned in the dependency array. So in this way, even our other state variable changes like theme color state variable and that cause the rerender still the value will be cached.it will be only recalculated when text state variable changes.
  console.log(text, prime);
  return (
    <div
      className={
        "w-96 h-96 border-2 m-4  border-white " +
        (isDarkTheme && "bg-slate-100 text-black")
      }
    >
      <input
        type="Number"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className=" w-80 text-black bg-slate-500 text-xl rounded-lg p-2 m-2"
      />

      <p className="text-lg"> {prime}</p>
      <button
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        className="p-2 rounded-xl mt-6 bg-slate-600 hover:bg-slate-900"
      >
        Change Theme
      </button>
    </div>
  );
};

export default Demo;
