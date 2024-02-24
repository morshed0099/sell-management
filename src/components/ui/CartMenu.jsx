import { FiEdit, FiPower } from "react-icons/fi";
import { PiVanDuotone } from "react-icons/pi";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";

const CartMenu = () => {
  const [modalProps, setModalProps] = useState(null);

  return (
    <>
      {modalProps && (
        <Modal modalProps={modalProps} setModalProps={setModalProps} />
      )}
      <div className="w-full bg-white">
        <div className="flex justify-evenly flex-wrap gap-2 md:gap-1 lg:gap-4 items-center ">
          <button
            onClick={() => setModalProps("note")}
            className="flex gap-2 px-2 py-1 cursor-pointer bg-[#e7e9f6] rounded-md  items-center"
          >
            <FiEdit size={15} color="#5c6ac4" />
            <p className="text-[#6d7aca] text-[12px]">Note</p>
          </button>
          <button
            onClick={() => setModalProps("Shipping")}
            className="flex gap-2 px-2 py-1 bg-[#e7e9f6] rounded-md  items-center"
          >
            <PiVanDuotone size={15} color="#5c6ac4" />
            <p className="text-[#6d7aca]  text-[12px]">Shipping</p>
          </button>
          <button className="flex gap-2 px-2 py-1 bg-[#e7e9f6] rounded-md  items-center">
            <FiPower size={15} color="#5c6ac4" />
            <p className="text-[#6d7aca] text-[12px]">Hold Order</p>
          </button>
          <button  onClick={() => setModalProps("New Item")} className="flex gap-2 px-2 py-1 bg-[#e7e9f6] rounded-md  items-center">
            <FaPlusCircle size={15} color="#5c6ac4" />
            <p className="text-[#6d7aca]  text-[12px]"> New Item</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartMenu;
