import { FaPlusCircle } from "react-icons/fa";
import porfile from "../../media/no.jpeg";

const CustomerView = () => {
  return (
    <div className="bg-[#eef0f9] flex justify-between items-center mt-2 py-2 p-4 rounded-md">
      <div className="flex gap-2 items-center">
        <div className="p-2 border rounded-full">
          <img src={porfile} className="rounded-full w-[20px]" alt="" />
        </div>
        <div>
          <p className="text-[#6e7bcb] font-semibold">Strve Jobs</p>
        </div>
      </div>
      <div className="">
        <FaPlusCircle color="#6e7bcb"  size={20} />
      </div>
    </div>
  );
};

export default CustomerView;
