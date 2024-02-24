import React from "react";

const Button = ({ name, outline }) => {
  return (
    <div>
      <button
        className={`
      px-4 py-1   rounded-md mt-2
      ${
        outline 
          ? " border text-gray-500"
          : "border  bg-[#7373da] text-white"
      }
      `}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
