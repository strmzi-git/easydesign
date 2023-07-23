"use client";

import Image from "next/image";
import Link from "next/link";
import { DesignType } from "../types/DesignType";
import { AiOutlineDownload, AiOutlineHeart } from "react-icons/ai";

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { storage } from "../firebase";
import { toast } from "react-hot-toast";

import { useState } from "react";

interface DesignCardProps {
  design?: DesignType;
}

// const download = async () => {
//   try {
//     const url = await getDownloadURL(fileRef);

//     // This can be downloaded directly:
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "blob";
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.style.display = "none";
//       a.href = url;
//       // the filename you want
//       a.download = "your-file-name.txt";
//       document.body.appendChild(a);
//       a.click();
//       window.URL.revokeObjectURL(url);
//       console.log("Helo");
//       toast.success("Successfully downloaded design");
//     };
//     xhr.open("GET", url);
//     xhr.send();
//   } catch (error) {
//     console.error(error);
//   }
// };

const DesignCard = function ({ design }: DesignCardProps) {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = ref(storage, "text.txt");

  const retrieveImageUrl = async function () {
    const imageRef = ref(storage, "images/Product.png");
    const url = await getDownloadURL(imageRef);
    setImageUrl(url);
  };

  retrieveImageUrl();

  return (
    <div className="relative mb-4 aspect-square gap-4 flex flex-col flex-1 max-w-[400px] sm:min-w-[300px]">
      <div className="h-[70%] sm:min-h-[250px] w-[100%] flex items-center justify-center rounded-md bg-primary1">
        <div className="w-[90%] rounded-md h-[90%] bg-primary3"></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="text-l sm:text-[18px] sm:leading-[26px]">
            Premium - {design?.title}
          </p>
          <p className="px-2 py-1 bg-neutral-200 h-fit rounded-md text-sm">
            7.99€
          </p>
        </div>
        <p className="mb-2">A short description of the product...</p>
        <div className="w-[100%] flex justify-between">
          <Link
            href={`/collection/${design?.id}`}
            className="px-2 text-sm rounded-sm py-2 whitespace-nowrap w-[100%] text-center bg-neutral-100"
          >
            View design
          </Link>
          {/* <p className="bg-primary1 text-sm px-2 py-2 text-white rounded-sm">
            Premium
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
