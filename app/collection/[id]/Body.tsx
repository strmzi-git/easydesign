"use client";

import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import LinkDisplay from "@/app/components/LinkDisplay";
import { storage } from "@/app/firebase";
import { DesignType } from "@/app/types/DesignType";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { AiOutlineDownload } from "react-icons/ai";

interface BodyProps {
  designData: DesignType;
}

const retrieveImageUrls = async function (imageName: string) {
  const imageRef = ref(storage, `images/${imageName}`);
  const url = await getDownloadURL(imageRef);
  return url;
};

const Body = function ({ designData }: BodyProps) {
  const photos = [];

  const fileRef = ref(storage, designData.downloadUrl);
  const download = async () => {
    try {
      const url = await getDownloadURL(fileRef);

      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = designData.downloadUrl as string;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        toast.success("Successfully downloaded design");
      };
      xhr.open("GET", url);
      xhr.send();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <LinkDisplay name={designData.title!} />
      <div className="flex px-8 mt-0 border py-8 items-center gap-2 flex-col md:flex-row h-[750px] md:h-[590px]">
        {/* <Image src={designData.photoUrls![0]} width={200} height={200} /> */}
        <div className="w-[100%] h-[100%] md:w-[49%] bg-opacity-80 relative shadow-lg overflow-hidden">
          <div className="w-[50%] top-[15%] h-[100%] right-[5%] flex-shrink-0 rounded-[400px] bg-redCircle absolute blur-[130px]"></div>
          <div className="w-[50%] top-[40%] h-[100%] left-[5%] flex-shrink-0 absolute rounded-[400px] bg-blueCircle blur-[130px]"></div>
        </div>
        <div className="w-[100%] h-[100%] md:w-[49%] text-center flex flex-col py-12 px-8 ">
          <h2 className="text-2xl md:text-4xl font-light mb-4 text-[#222222] text-">
            {designData.title}
          </h2>
          <p className="text-sm mb-4 text-left font-normal text-[#22222]">
            Author:
            <Link
              className="text-sm ml-1 font-normal text-primary1"
              href={designData.authorLink || "/"}
            >
              {designData.author}
            </Link>
          </p>

          {designData.descriptions!.length >= 1 &&
            designData.descriptions!.map((text) => (
              <p
                key={text}
                className="font-light leading-[20px] mb-4 text-sm text-left text-[#333333]"
              >
                {text}
              </p>
            ))}
          <div className="flex gap-2 flex-wrap">
            {designData.tags!.length >= 1 &&
              designData.tags!.map((tag) => (
                <span
                  key={tag}
                  className="font-light  px-[12px] py-2 rounded-sm bg-primary2  
              leading-[20px] mb-4 text-sm text-left text-white"
                >
                  {tag[0].toUpperCase() + tag.slice(1)}
                </span>
              ))}
          </div>
          <Button
            icon={AiOutlineDownload}
            primary
            functionality={download}
            bold
            label="Download Template"
          />
        </div>
      </div>
    </Container>
  );
};

export default Body;
