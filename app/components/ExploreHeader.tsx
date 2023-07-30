"use client";

import { Explore } from "@mui/icons-material";
import { useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ExploreHeader = function () {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          const inputEl = document.getElementById("email") as HTMLInputElement;
          inputEl.focus();
        }, 700);
      }}
      className="w-auto cursor-pointer flex gap-2 items-center"
    >
      <h3 className="text-[28px] text-gray900">Continue Exploring</h3>
      <AiOutlineArrowRight size={20} />
    </div>
  );
};

export default ExploreHeader;
