import { FiEdit, FiPower } from "react-icons/fi";
import { PiVanDuotone } from "react-icons/pi";
import { FaPlusCircle } from "react-icons/fa";
const CartMenu = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex justify-evenly flex-wrap gap-2 md:gap-1 lg:gap-4 items-center ">
        <div className="flex gap-2 px-2 py-1 bg-[#e7e9f6] rounded-md  items-center">
          <FiEdit size={15} color="#5c6ac4" />
          <p className="text-[#6d7aca] ">Note</p>
        </div>
        <div className="flex gap-2 px-2 py-1 bg-[#e7e9f6] rounded-md  items-center">
          <PiVanDuotone size={15} color="#5c6ac4" />
          <p className="text-[#6d7aca] ">Shipping</p>
        </div>
        <div className="flex gap-2 px-2 py-1 bg-[#e7e9f6] rounded-md  items-center">
          <FiPower size={15} color="#5c6ac4" />
          <p className="text-[#6d7aca] ">Hold Order</p>
        </div>
        <div className="flex gap-2 px-2 py-1 bg-[#e7e9f6] rounded-md  items-center">
          <FaPlusCircle size={15} color="#5c6ac4" />
          <p className="text-[#6d7aca] "> New Item</p>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
