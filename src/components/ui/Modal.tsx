import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import NoteMessage from "./NoteMessage";
import ShippingInput from "./ShippingInput";

const Modal = ({ modalProps, setModalProps }) => {
  return (

      <div
        className={`w-full duration-300 ease-linear transition  absolute
       bg-black z-50 bg-opacity-40 ${
         modalProps
           ? "flex top-0 left-0 h-full overflow-hidden  absolute"
           : "hidden"
       }`}
      >
        <div className="flex justify-center   items-center w-[100vw] h-[100vh]">
          <div className="bg-white  min-h-[40%] min-w-[40%] max-h-[95%] max-w-[90%] rounded-md  overflow-auto">
            <div className="flex sticky top-0 bg-white  justify-between gap-4 items-center w-full border-b">
              <div className="flex-1 text-center py-4 uppercase">
                {modalProps}
              </div>
              <div className="flex-2" onClick={() => setModalProps(null)}>
                <IoMdCloseCircleOutline
                  className="cursor-pointer"
                  size={30}
                  color="black"
                />
              </div>
            </div>
            <div>{modalProps === "note" && <NoteMessage />}</div>
            <div>{modalProps === "Shipping" && <ShippingInput />}</div>
            <div>{modalProps === "New Item" && <ShippingInput />}</div>
          </div>
        </div>
      </div>
 
  );
};

export default Modal;
