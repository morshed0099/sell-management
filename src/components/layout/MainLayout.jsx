import { useState } from "react";
import DrawerRightSide from "../ui/DrawerRightSide";

const MainLayout = () => {
  const [open, setOpent] = useState(false);

  return (
    <div className="flex gap-2 relative">
      <div className="flex-1 w-full  h-screen">
        <DrawerRightSide />
        <h1>hii</h1>
      </div>
      <div className="flex-1 w-full  h-screen">
        <h1>hehe</h1>
      </div>
    </div>
  );
};

export default MainLayout;
