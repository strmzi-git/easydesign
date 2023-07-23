"use client";

interface FilterItemProp {
  label: string;
  functionality?: (label: string, bool: boolean) => void;
  isSelected?: boolean;
}

const FilterItem = function ({
  label,
  functionality,
  isSelected,
}: FilterItemProp): JSX.Element {
  return (
    <p
      onClick={() => {
        functionality && functionality(label, !isSelected);
      }}
      className={`h-[100%] ${
        isSelected && "bg-neutral-200"
      } w-fit px-6 flex-1 whitespace-nowrap cursor-pointer duration-300  hover:bg-neutral-200 flex items-center justify-center`}
    >
      {label}
    </p>
  );
};

export default FilterItem;
