import CartFooter from "../ui/CartFooter";
import CartList from "../ui/CartList";
import CartMenu from "../ui/CartMenu";
import CategoyButton from "../ui/CategoyButton";
import CustomerView from "../ui/CustomerView";
import DrawerRightSide from "../ui/DrawerRightSide";
import Modal from "../ui/Modal";
import Searchbar from "../ui/Searchbar";
import TotalPrice from "../ui/TotalPrice";

const SellPageLayout = () => {
  return (
    <div className="lg:flex-row flex-col relative flex flex-grow gap-2 ">
      <Modal />
      <div className="flex-1 border w-full p-2 h-screen">
        <div className="flex gap-4">
          <DrawerRightSide />
          <CartMenu />
        </div>
        <CustomerView />
        <CartList />
        <TotalPrice />
        <CartFooter />
      </div>
      <div className="flex-1 w-full  h-screen">
        <div>
          <div>
            <Searchbar />
          </div>
          <div>
            <CategoyButton  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellPageLayout;
