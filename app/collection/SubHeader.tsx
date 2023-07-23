"use client";

import { RxCaretSort } from "react-icons/rx";
import FilterItem from "./FilterItem";
import { useState } from "react";
type FilterType = {
  "Multi Page": boolean;
  "Dark Mode": boolean;
  Blog: boolean;
  "Landing Page": boolean;
  [key: string]: boolean;
};

const SubHeader = function () {
  const [filters, setFilter] = useState<FilterType>({
    "Multi Page": false,
    "Dark Mode": false,
    Blog: false,
    "Landing Page": false,
  });
  const [showFilters, setShowFilter] = useState(false);

  return (
    <div className="flex w-[100%] h-[100px] justify-between overflow-hidden relative border-b items-center ">
      <div className="flex w-[100%] flex-col gap-1 items-center">
        <h3 className="text-2xl ">Collection</h3>
        <p className="text-sm">
          Browse through our carefully curated design collection
        </p>
        <p className="text-sm">
          Each design can be purchased individually for the specified price, or
          gain access to all with{" "}
          <span className=" italic font-semibold cursor-pointer text-primary1">
            premium
          </span>{" "}
        </p>
      </div>
      {/* <div
        className={`h-[70%] bg-neutral-100  flex transform duration-300 transition absolute items-center left-[100%]
        ${showFilters ? "translate-x-[-120%]" : ""}
        `}
      >
        {Object.entries(filters).map((item) => (
          <FilterItem
            functionality={(label: string, bool: boolean) => {
              const newFilters: FilterType = { ...filters };
              newFilters[label] = bool;
              setFilter({ ...newFilters });
            }}
            key={Math.random()}
            label={item[0]}
            isSelected={item[1]}
          />
        ))}
      </div> */}

      {/* <div
        onClick={() => setShowFilter(!showFilters)}
        className="w-[145px] border-2 hover:bg-primary1 bg-white hover:text-white duration-300 cursor-pointer border-primary1 flex items-center justify-start px-4 h-[70%] relative overflow-hidden "
      >
        <p className="text-lg ">Filter Items</p>
        <RxCaretSort size={25} className="absolute top-2 right-[2px]" />
      </div> */}
    </div>
  );
};

export default SubHeader;
