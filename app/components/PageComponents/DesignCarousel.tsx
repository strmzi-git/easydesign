"use client";

import Carousel from "react-material-ui-carousel";
import Container from "../Container";
import { useInterval } from "react-use";
import { useState } from "react";

const DesignCarousel = function () {
  const [activeIndex, setActiveIndex] = useState(0);

  useInterval(() => {
    setActiveIndex((activeIndex + 1) % items.length);
  }, 2000);
  const items = [{ name: "john1" }, { name: "john2" }, { name: "john3" }];

  return (
    <div id="explore" className="w-[100%] border text-gray900">
      <Container>
        <h2 className="font-semibold mb-10 text-[32px] md:text-[45px] w-full text-center  text-gray900">
          Explore our designs
        </h2>
        <div className="flex flex-col relative md:flex-row items-center border w-full justify-center gap-4">
          <div className="relative w-full h-64 overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div key={index} className="w-full h-full flex-none">
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DesignCarousel;
