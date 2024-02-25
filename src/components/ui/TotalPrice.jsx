/* eslint-disable react/prop-types */

import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TotalPrice = ({ addToCart, discount }) => {
  const [shipping, setShipping] = useState(0);
  let tax;
  const TaxType = "export";
  const taxOn = "before discount";

  if (TaxType && TaxType === "export") {
    tax = 20;
  } else {
    tax = 40;
  }

  let subTotal = 0;
  let total = addToCart?.reduce(
    (curren, total) => (subTotal = curren + total.price),
    0
  );
  if (taxOn && taxOn === "before discount") {
    total = subTotal + tax;
  }
  // discount calculate and shipping charge
  if (discount && discount.type === "Flat") {
    total = subTotal - discount.amount;
    console.log(subTotal, "dfg");
  }
  if (discount && discount.type !== "Flat") {
    total = subTotal - (subTotal * discount.amount) / 100;
    console.log(subTotal, "try");
  }

  return (
    <>
      <div className="flex justify-end">
        <div>
          <div className="flex mt-4 px-2 justify-end ">
            <div className="border-b w-full border-t px-4 flex items-center justify-between">
              <p className="text-[12px] text-[#8a96a0]">Subtotal </p>
              <p>${subTotal}</p>
            </div>
          </div>
          <div className="flex px-2   justify-end">
            <div className="border-b px-4 w-full flex items-center justify-between gap-20 ">
              <p className="text-[12px] text-[#8a96a0]">TAX </p>
              <p>${tax}</p>
            </div>
          </div>
          <div className="flex px-2 justify-end">
            <div className="border-b w-full px-4 flex items-center justify-between gap-20 ">
              <p className="text-[12px] text-[#8a96a0]">Set Shipping </p>
              <div>
                <input
                  onChange={(e) => setShipping(Number(e.target.value))}
                  type="number"
                  className="w-[40px] border bg-gray-100  border-none  "
                />
                <span>$</span>
              </div>
            </div>
          </div>
          <div className="flex px-2  justify-end">
            <div className="border-b px-4 w-full flex items-center justify-between gap-20 ">
              <p className="text-[12px] text-[#3674d9]">Discount On Cart </p>
              <p>
                {/* discount type wise discount show  */}
                {discount && discount.type === "Flat" ? (
                  <>${discount.amount || 0}</>
                ) : (
                  <>${(subTotal * discount.amount) / 100 || 0}</>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e1eaf9] px-2 py-2 rounded-md flex justify-between items-center">
        <div>
          <p className="text-[10px]  text-[#3674d9]">
            Total Count({addToCart?.length})
          </p>
        </div>
        <div>
          <p className="text-1xl font-semibold text-[#3674d9]">Total</p>
        </div>
        <div>
          <p className="text-1xxl font-semibold text-[#3674d9]">
            {(shipping && shipping > 0) || (subTotal && subTotal > 0 || total)
              ? total + shipping || subTotal + shipping
              : 0}
            $
          </p>
        </div>
      </div>
    </>
  );
};

export default TotalPrice;
