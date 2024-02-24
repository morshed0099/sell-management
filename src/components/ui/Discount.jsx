import { useState } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const Discount = ({setModalProps,setDiscount}) => {
  const [type, setType] = useState(null);
  const [amount, setAmount] = useState(0);
  const handelDiscount = (e) => {
    e.preventDefault();
    const discout = {
      type,
      amount,
    };
    setDiscount(discout);
    setModalProps(null)
   
  };
  return (
    <div className="space-x-4 p-4">
      <div className="flex gap-4 justify-center items-center">
        <label htmlFor="" className="text-gray-400">
          Discount Type
        </label>
        <select
          onChange={(e) => setType(e.target.value)}
          className="px-2  py-2 border rounded"
        >
          <option selected disabled value="">
            Discount Type
          </option>
          <option value="Flat">Flat</option>
          <option value="Percentage">Percentage</option>
        </select>
      </div>
      <form onSubmit={handelDiscount}>
        <div className="flex relative gap-4 justify-center items-center">
          <label htmlFor="" className="text-gray-400">
            Amaount
          </label>
          <button className=" absolute left-[155px] text-center rounded-md top-[15px] w-[30px]  py-[8px] border-r ">
            {type && type === "Flat" ? <>$</> : <>%</>}
          </button>
          <input
            required
            onChange={(e) => setAmount(e.target.value)}
            placeholder="type your discount here"
            className="border  px-1 pl-12   rounded mt-4  py-2 "
            type="number"
          />
        </div>
        <div className="flex justify-end mt-4">
          <Button name={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default Discount;
