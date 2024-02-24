/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const CartList = ({ product }) => {
  console.log(product);
  return (
    <div className="flex items-center mt-2 gap-2">
      <div>
        <FiEdit color="#778591" size={15} />
      </div>
      <div className="border flex-1 ">
        <div className="flex  justify-evenly">
          <div>
            <p className="text-[#778591]">{product?.name}</p>
          </div>
          <div>
            <p className="text-[#778591]">$890</p>
          </div>
          <div className="flex justify-center gap-4 p-1 items-center">
            <div className="bg-gray-400 rounded-full p-1">
              <FaPlus color="white" size={10} />
            </div>
            <div>
              <p className="text-[#778591]">{product?.quantity}</p>
            </div>
            <div className="bg-gray-400 rounded-full p-1">
              <FaMinus color="white" size={10} />
            </div>
          </div>
          <div>
            <p className="text-[#778591]">${product?.price}</p>
          </div>
        </div>
      </div>
      <div>
        <RiDeleteBin6Line size={15} color="red" />
      </div>
    </div>
  );
};

export default CartList;
