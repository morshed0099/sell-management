
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegHandRock } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
const CartFooter = () => {
    return (
        <div className="flex justify-between flex-wrap  items-center">
            <button className="bg-[#dee1f3] flex items-center px-4 py-1 text-[#7c87d0] rounded-md mt-4 gap-2">
                <TiDeleteOutline size={25} color="#80a1e2"/>
                Cancel
            </button>
            <button className="bg-[#dee1f3] flex items-center px-4 py-1 text-[#7c87d0] rounded-md mt-4 gap-2">
                <FaRegHandRock size={25} color="#80a1e2"/>
                Hold
            </button>
            <button className="bg-[#dee1f3] flex items-center px-4 py-1 text-[#7c87d0] rounded-md mt-4 gap-2">
                <GiPayMoney size={25} color="#80a1e2" />
                Discount
            </button>
            <button className="bg-[#dee1f3] flex items-center px-4 py-1 text-[#7c87d0] rounded-md mt-4 gap-2">
                <GiReceiveMoney size={25} color="#80a1e2" />
                Pay
            </button>
        </div>
    );
};

export default CartFooter;