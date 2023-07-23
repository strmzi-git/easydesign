import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

const LinkDisplay = function ({ name }: { name: string }) {
  return (
    <div className="w-[100%] text-md h-[50px] flex items-center px-18">
      <Link href={"/collection"} className="text-[#222222] font-light ">
        collection
      </Link>
      <MdChevronRight size={15} /> <span className="font-normal">{name}</span>
    </div>
  );
};

export default LinkDisplay;
