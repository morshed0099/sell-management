import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div className="mt-1 relative shadow-md">
      <input
        className="pl-8 py-1 w-full rounded border-none outline-none"
        type="search"
        placeholder="search product ..."
      />
      <FiSearch className="absolute top-[10px] left-[7px] " size={15} />
    </div>
  );
};

export default Searchbar;
