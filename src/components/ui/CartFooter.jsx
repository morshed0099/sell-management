/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegHandRock } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { useState } from "react";
import Modal from "./Modal";
const CartFooter = ({ setDiscount ,setTax}) => {
  const [modalProps, setModalProps] = useState(null);

  // cart foooter all button action connected with modal and relation ship indipendent component
  //  like sellpage->footercard-> setings button-> modal-> taxtype 
  return (
    <>
      {modalProps && (
        <Modal
          setModalProps={setModalProps}
          // discout collecting form discout componet and set it sell page and woking with totalPice page 
          setDiscount={setDiscount}
          modalProps={modalProps}
          // set tax collect tax details information from taxtype component and set it sell page and working totalpage 
          setTax={setTax}
        />
      )}
      <div className="flex lg:gap-0 gap-1 justify-around flex-wrap  items-center">
        <button className="bg-[#dee1f3] flex items-center px-2 text-[15px] py-1  text-[#7c87d0] rounded-md mt-4 gap-2">
          <TiDeleteOutline size={15} color="#80a1e2" />
          Cancel
        </button>
        <button className="bg-[#dee1f3] flex items-center border border-gray-600 hover:text-[#252b4d] hover:bg-white duration-500 px-2 text-[15px] py-1 text-[#7c87d0] rounded-md mt-4 gap-2">
          <FaRegHandRock size={15} color="#80a1e2" />
          Hold
        </button>
        <button
          onClick={() => setModalProps("Discount")}
          className="bg-[#dee1f3] flex items-center border border-gray-600 hover:text-[#252b4d] hover:bg-white duration-500 px-2 text-[15px] py-1 text-[#7c87d0] rounded-md mt-4 gap-2"
        >
          <GiPayMoney size={15} color="#80a1e2" />
          Discount
        </button>
        <button
          onClick={() => setModalProps("Settings")}
          className="bg-[#dee1f3] flex items-center border border-gray-600 hover:text-[#252b4d] hover:bg-white duration-500 px-2 text-[15px] py-1 text-[#7c87d0] rounded-md mt-4 gap-2"
        >
          <GiReceiveMoney size={15} color="#80a1e2" />
          Settings
        </button>
        <button className="bg-[#dee1f3] border border-gray-600 hover:text-[#252b4d] hover:bg-white duration-500 flex items-center px-2 text-[15px] py-1 text-[#7c87d0] rounded-md mt-4 gap-2">
          <GiReceiveMoney size={15} color="#80a1e2" />
          Pay
        </button>
      </div>
    </>
  );
};

export default CartFooter;
