import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const DrawerRightSide = () => {
  const [open, setOpent] = useState(false);

  return (
    <div>
      <div className="cursor-pointer relative" onClick={() => setOpent(!open)}>
        <IoIosMenu size={40} color="black" />
      </div>
      <div
        className={`duration-300 absolute ease-linear transition-all w-full h-screen top-0 ${
          open ? "bg-gray-600 bg-opacity-20" : "ml-[-1500px] bg-opacity-0  "
        }`}
      >
        <div className="flex ">
          <div className="w-[200px] bg-white h-screen">
            <NavLink to="/dahsborad">
              <li>Dashboard</li>
            </NavLink>
          </div>
          <div onClick={() => setOpent(!open)}>
            <IoClose
              size={40}
              color="white"
              className="font-bold text-2xl mt-1 ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerRightSide;
