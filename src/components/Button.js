import React from "react";

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="px-5 py-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white ml-2 max-w-96 h-10 text-center">
        {name}
      </button>
    </div>
  );
};

export default Button;
