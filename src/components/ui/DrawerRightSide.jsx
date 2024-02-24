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
        <IoIosMenu size={30} color="black" />
      </div>
      <div
        className={`duration-300 absolute ease-linear h-full w-full top-0 transition-all  ${
          open ? "bg-black bg-opacity-40 w-[100%] absolute left-0 h-full top-0  " : "ml-[-1500px] absolute bg-opacity-0  "
        }`}
      >
        <div className="flex sticky top-0">
          <div className="w-[200px] bg-white h-screen ">
            <div>
            <NavLink to='/'><li>Dashboard</li></NavLink>
            <NavLink to='/sell'><li>Point of Sell</li></NavLink>
            </div>
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
