import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const LeftSideDrawer = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  return (
    <div>
      <div>
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="mt-3 ml-4"
        >
          <BsThreeDotsVertical size={30} />
        </button>
      </div>
      <div
        className={`duration-500 z-50  absolute ease-linear  transition-all  ${
          categoryOpen
            ? "w-full top-0 absolute bg-black bg-opacity-80 right-0 h-full"
            : "absolute top-0"
        }`}
      >
        <div className={`${categoryOpen ? "w-full h-full " : "w-0"}`}>
          <div className="flex justify-end sticky top-0 ">
            <div onClick={() => setCategoryOpen(false)} className="text-white">
              {categoryOpen ? (
                <IoClose
                  size={40}
                  color="white"
                  className="font-bold text-2xl mt-1 ml-2"
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`duration-300 ease-linear ${
                categoryOpen ? "w-[400px] h-screen bg-white " : "w-0 "
              }`}
            >
              {categoryOpen ? "section" : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideDrawer;
