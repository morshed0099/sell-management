const TotalPrice = () => {
  return (
    <>
      <div className="flex justify-end">
        <div>
          <div className="flex mt-4 px-2 justify-end ">
            <div className="border-b w-full border-t px-4 flex items-center justify-between">
              <p className="text-[12px] text-[#8a96a0]">Subtotal </p>
              <p>$5890</p>
            </div>
          </div>
          <div className="flex px-2   justify-end">
            <div className="border-b px-4 w-full flex items-center justify-between gap-20 ">
              <p className="text-[12px] text-[#8a96a0]">TAX </p>
              <p>$50</p>
            </div>
          </div>
          <div className="flex px-2 justify-end">
            <div className="border-b w-full px-4 flex items-center justify-between gap-20 ">
              <p className="text-[12px] text-[#8a96a0]">Shipping </p>
              <p>$5</p>
            </div>
          </div>
          <div className="flex px-2  justify-end">
            <div className="border-b px-4 w-full flex items-center justify-between gap-20 ">
              <p className="text-[12px] text-[#3674d9]">Discount On Cart </p>
              <p>$5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e1eaf9] px-2 py-2 rounded-md flex justify-between items-center">
        <div>
          <p className="text-[10px]  text-[#3674d9]">Total Count(13)</p>
        </div>
        <div>
            <p className="text-1xl font-semibold text-[#3674d9]">Total</p>
        </div>
        <div>
        <p className="text-1xxl font-semibold text-[#3674d9]">$25889</p>
        </div>
      </div>
    </>
  );
};

export default TotalPrice;