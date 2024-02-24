import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div >
      <div className="mt-1 pb-1 relative shadow-md">
        <input
          className="pl-8 z-10 py-1 w-full rounded border-none outline-none"
          type="search"
          placeholder="search product ..."
        />
        <FiSearch className=" absolute z-10 top-[10px] left-[7px] " size={15} />
      </div>
    </div>
  );
};

export default Searchbar;
