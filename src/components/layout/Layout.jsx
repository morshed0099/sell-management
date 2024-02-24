
import DrawerRightSide from "../ui/DrawerRightSide";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[200px] hidden border lg:flex h-screen bg-white">
          <NavLink to="/sell">       
            <li>Point Of Sell</li>
          </NavLink>
          <NavLink to="/">       
            <li>Dashborad</li>
          </NavLink>
        </div>
        <div className="md:hidden flex">
          <DrawerRightSide />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
