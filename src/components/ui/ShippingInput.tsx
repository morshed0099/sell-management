import React from "react";
import Input from "./Input";
import Button from "./Button";

const ShippingInput = () => {
  return (
    <div className="flex flex-col w-full  gap-4 px-2 py-2">
      <Input label="Name" type="text" />
      <Input label="Email" type="email" />
      <Input label="City" type="text" />
      <Input label="State" type="text" />
      <Input label="Street" type="text" />
      <Input label="Zip Code" type="text" />
      <Input label="Street" type="text" />
      <Input label="Zip Code" type="text" />
      <div>
        <Button outline={null} name="Submit" />
      </div>
    </div>
  );
};

export default ShippingInput;
