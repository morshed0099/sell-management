import { useState } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const TaxType = ({setModalProps,setTax}) => {
  const [taxOn, setTaxOn] = useState(null);
  const [taxType, setType] = useState(null);
  const [taxOption, setTaxOption] = useState("Tax On");

  const handelSubmit = () => {
    const tax = {
      taxOn,
      taxType,
    };
    setTax(tax)
    setModalProps(null)
  };

  return (
    <>
      <div className="w-full">
        <button
          onClick={() => setTaxOption("Tax On")}
          className={`px-4 w-1/2  py-4  border ${
            taxOption === "Tax On"
              ? "bg-blue-400 text-white"
              : "bg-white text-blue-900"
          }`}
        >
          Tax On
        </button>
        <button
          onClick={() => setTaxOption("Tax Type")}
          className={`px-4 w-1/2  py-4  border ${
            taxOption === "Tax Type"
              ? "bg-blue-400 text-white"
              : "bg-white text-blue-900"
          }`}
        >
          Tax Type
        </button>
        <div className="p-4">
          {taxOption === "Tax Type" && (
            <>
              <div className="flex mb-4  w-full items-center gap-6">
                {/* set default checked radio button like state colleing and showing your selecet option  */}
                {taxType === "exclusive" ? (
                  <input
                    onChange={(e) => setType(e.target.value)}
                    value="exclusive"
                    name="taxType"
                    className="p-4"
                    checked
                    type="radio"
                  />
                ) : (
                  <input
                    onChange={(e) => setType(e.target.value)}
                    value="exclusive"
                    name="taxType"
                    className="p-4"
                    type="radio"
                  />
                )}

                <label htmlFor="">Exclusive</label>
              </div>
              <div className="flex  w-full items-center gap-6">
                {taxType === "inclusive" ? (
                  <input
                    onChange={(e) => setType(e.target.value)}
                    value="inclusive"
                    name="taxType"
                    className="p-4"
                    checked
                    type="radio"
                  />
                ) : (
                  <input
                    onChange={(e) => setType(e.target.value)}
                    value="inclusive"
                    name="taxType"
                    className="p-4"
                    type="radio"
                  />
                )}

                <label htmlFor="">Inclusive</label>
              </div>
            </>
          )}
          {taxOption === "Tax On" && (
            <>
              <div className="flex w-full items-center mb-4 gap-6">
                {taxOn === "after" ? (
                  <input
                    onChange={(e) => setTaxOn(e.target.value)}
                    value="after"
                    name="taxOn"
                    checked
                    className="p-4"
                    type="radio"
                  />
                ) : (
                  <input
                    onChange={(e) => setTaxOn(e.target.value)}
                    value="after"
                    name="taxOn"
                    className="p-4"
                    type="radio"
                  />
                )}
                <label htmlFor="">After Discount</label>
              </div>
              <div className="flex  w-full items-center gap-6">
                {taxOn === "before" ? (
                  <input
                    onChange={(e) => setTaxOn(e.target.value)}
                    value="before"
                    name="taxOn"
                    className="p-4"
                    checked
                    type="radio"
                  />
                ) : (
                  <input
                    onChange={(e) => setTaxOn(e.target.value)}
                    value="before"
                    name="taxOn"
                    className="p-4"
                    type="radio"
                  />
                )}
                <label htmlFor="">Bfefor Discount</label>
              </div>
            </>
          )}
          <div className=" flex  justify-end">
            <button onClick={() => handelSubmit()}>
              <Button name={"Submit"} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxType;
