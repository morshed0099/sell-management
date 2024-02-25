import { useState } from "react";
import CartFooter from "../ui/CartFooter";
import CartList from "../ui/CartList";
import CartMenu from "../ui/CartMenu";
import CategoyButton from "../ui/CategoyButton";
import CustomerView from "../ui/CustomerView";
import DrawerRightSide from "../ui/DrawerRightSide";
import Modal from "../ui/Modal";
import ProductContainer from "../ui/ProductContainer";
import Searchbar from "../ui/Searchbar";
import TotalPrice from "../ui/TotalPrice";
import LeftSideDrawer from "../ui/LeftSideDrawer";

const SellPageLayout = () => {
  const [addToCart, setAddToCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  // tax information is commeing from taxtype componet with connected modal footer seting button
  const [tax, setTax] = useState(null);

  // calculate card total product and existing produt will be not duplicate and quantity will be increasing
  let array = [];
  const hadelCart = (card) => {
    const exit = addToCart.find((el) => el?.name === card?.name);
    if (exit) {
      const oldData = addToCart.filter((el) => el.name !== exit.name);
      exit.quantity = Number(exit.quantity) + Number(card?.quantity);
      exit.price = exit.quantity * card.price;
      array.push(...oldData, exit);
      setAddToCart(array);
    } else {
      array.push(card, ...addToCart);
      setAddToCart(array);
    }
  };

  return (
    <div className="relative">
      <div className="z-50 relative">
        <Modal />
      </div>
      <div className="flex lg:flex-row px-1 flex-col gap-2">
        <div className=" border flex-1 flex-wrap w-full p-2 h-screen">
          <div className="flex gap-4">
            <DrawerRightSide />
            <CartMenu />
          </div>
          <CustomerView />
          {addToCart &&
            addToCart?.map((product, idx) => (
              <CartList key={idx} product={product} />
            ))}
          <TotalPrice addToCart={addToCart} discount={discount} />

          {/* sell page footer connected with modal  */}
          <CartFooter setDiscount={setDiscount} setTax={setTax} />
        </div>
        <div className="flex-1 px-1">
          <div>
            <Searchbar />
            <div className="flex justify-center gap-1 items-center">
              <CategoyButton />
              <LeftSideDrawer />
            </div>
            <ProductContainer hadelCart={hadelCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPageLayout;
