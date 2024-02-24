import image from "../../media/no.jpeg";

// eslint-disable-next-line react/prop-types
const ProductContainer = ({ hadelCart }) => {
  return (
    <div className="border p-1 min-h-[400px] mt-2 rounded">
      <div className="grid gap-2  lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
        <div className="border rounded-md p-1">
          <img src={image} alt="" />
        </div>
        <div
          onClick={() =>
            hadelCart({ price: 259, name: "paulo jins wear", quantity: 1 })
          }
          className="border cursor-pointer rounded-md p-1"
        >
          <img src={image} alt="" />
          <p className="text-center text-gray-400 font-semibold">Price: $259</p>
          <p className="text-[12px] text-gray-400 text-center">
            Paulo Jins wear
          </p>
        </div>
        <div
          onClick={() =>
            hadelCart({ price: 209, name: "hafa jins wear", quantity: 1 })
          }
          className="border  cursor-pointer rounded-md p-1"
        >
          <img src={image} alt="" />
          <p className="text-center text-gray-400 font-semibold">Price: $259</p>
          <p className="text-[12px] text-gray-400 text-center">
            Paulo Jins wear
          </p>
        </div>
        <div className="border rounded-md p-1">
          <img src={image} alt="" />
        
        </div>
        <div className="border rounded-md p-1">
          <img src={image} alt="" />
        </div>
        <div className="border rounded-md p-1">
          <img src={image} alt="" />
        </div>
        <div className="border rounded-md p-1">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
