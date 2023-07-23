import { IconType } from "react-icons";

interface FeatureBoxProps {
  title?: string;
  icon?: IconType;
  text?: string;
}

const FeatureBox = function ({ title, text, icon: Icon }: FeatureBoxProps) {
  return (
    <div className="transition duration-300 pt-8 hover:translate-y-[-2%] rounded-[20px] items-center md:w-[300px] pb-2 min-h-[180px] w-[300px] bg-[#FFF]  shadow-lg relative flex-col gap-2 px-6  flex bg-opacity-60 md:min-h-[240px] z-50  ">
      {Icon && <Icon size={45} className="mb-4 text-primary1 " />}
      <h3 className="text-[#1A1B1F] z-50  relative  text-lg">{title}</h3>
      <h4 className="font-light text-sm text-center text-[#626262] relative z-50 ">
        {text}
      </h4>
    </div>
  );
};

export default FeatureBox;
