import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="px-4 py-1 bg-[#7373da] text-white rounded-md mt-2">
        {name}
      </button>
    </div>
  );
};

export default Button;
