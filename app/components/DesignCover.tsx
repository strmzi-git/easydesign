import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import { DesignType } from "../types/DesignType";
import Image from "next/image";

interface DesignCoverProps {
  design: DesignType;
}
const retrieveImageUrls = async function (imageName: string) {
  const imageRef = ref(storage, `images/${imageName}`);
  const url = await getDownloadURL(imageRef);
  return url;
};

const DesignCover: React.FC<DesignCoverProps> = async function ({ design }) {
  if (!design.photoUrls) return;
  const imageUrls = await retrieveImageUrls(design.photoUrls[0]);
  return (
    <div className="relative shadow-lg">
      {/* <div className="absolute z-30 top-0 left-0 h-[100%] w-[100%] duration-500 bg-transparent hover:bg-white hover:scale-[1.05] cursor-pointer "></div> */}
      <div className="px-2 opacity-100 py-2 relative z-20 bg-white rounded-lg flex transition ">
        <Image
          src={imageUrls}
          className="h-[100%] hover:scale-[1.05] duration-500 xs:min-h-[300px] xs:min-w-[300px] s:h-[350px] s:w-[350px] md:w-[400px] md:h-[400px] lg:h-[450px] lg:w-[450px] aspect-square object-cover transform"
          alt="Product Mangement app landing page"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default DesignCover;
