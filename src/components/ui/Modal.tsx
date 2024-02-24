import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({ children }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className={`absolute w-full h-screen mt-[-1500px] bg-black z-50 bg-opacity-40`}>
      <div className="flex justify-center  items-center w-[100vw] h-[100vh]">
        <div className="bg-white min-h-[250px] min-w-[20%] max-h-[250px] max-w-[90%] rounded-md p-2 overflow-auto">
          <div>
            <div className="flex  justify-end border-b">
              <IoMdCloseCircleOutline
                className="cursor-pointer"
                onClick={() => setModal(false)}
                size={30}
                color="black"
              />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
