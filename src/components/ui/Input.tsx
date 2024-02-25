import React from "react";

const Input = ({ type, label }) => {
  return (
    <div className="flex gap-4 justify-between mt-2">
      <label className="text-[#a5a5a5] w-[100px]" htmlFor="">
        {label}
      </label>
      <input
        className="border flex-1 w-full rounded-md px-4 py-1"
        type={type}
        name=""
        id=""
      />
    </div>
  );
};

export default Input;
