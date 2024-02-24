import CartList from "../ui/CartList";
import CartMenu from "../ui/CartMenu";
import CustomerView from "../ui/CustomerView";
import DrawerRightSide from "../ui/DrawerRightSide";

const SellPageLayout = () => {
  return (
    <div className="lg:flex-row flex-col relative flex flex-grow gap-2 ">
      <div className="flex-2 border w-full p-2 h-screen">
        <div className="flex gap-4">
          <DrawerRightSide />
          <CartMenu />
        </div>
        <CustomerView />
        <CartList />
      </div>
      <div className="flex-2 w-full  h-screen">
        <h1>hehe</h1>
      </div>
    </div>
  );
};

export default SellPageLayout;
