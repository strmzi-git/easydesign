import { AiOutlineCheckCircle } from "react-icons/ai";

interface FeaturesProps {
  recommended: boolean;
  featuresBool: boolean[];
}

const Features = function ({
  recommended,
  featuresBool,
}: FeaturesProps): JSX.Element {
  return (
    <ul className="list-none text-gray900  gap-[12px] relative z-50 flex items-center flex-col my-2">
      {/* ------ LIST ITEM ------ */}
      <li
        className={`flex items-center text-gray900 w-[100%] gap-2  ${
          recommended
            ? "text-[16px] xs:text-[19px]"
            : "text-[16px] xs:text-[18px]"
        } leading-[20px]`}
      >
        <div className="h-[20px] w-[20px]">
          <AiOutlineCheckCircle
            size={20}
            className={`${
              !featuresBool[0]
                ? "text-primaryText opacity-30"
                : "text-[#03DAC5]"
            }  mr-2  `}
          />
        </div>
        Access to free designs
      </li>
      {/* ------ LIST ITEM ------ */}
      <li
        className={`flex items-center w-[100%] gap-2  ${
          recommended
            ? "text-[16px] xs:text-[19px]"
            : "text-[16px] xs:text-[18px]"
        } leading-[20px]`}
      >
        <div className="h-[20px] w-[20px]">
          <AiOutlineCheckCircle
            size={20}
            className={`${
              !featuresBool[1]
                ? "text-primaryText opacity-30"
                : "text-[#03DAC5]"
            }  mr-2  `}
          />
        </div>
        Access to
        <span className="-mx-1 text-primary1">premium</span>
        designs
      </li>
      {/* ------ LIST ITEM ------ */}
      <li
        className={`flex items-center w-[100%] gap-2  ${
          recommended
            ? "text-[16px] xs:text-[19px]"
            : "text-[16px] xs:text-[18px]"
        } leading-[20px]`}
      >
        <div className="h-[20px] w-[20px]">
          <AiOutlineCheckCircle
            size={20}
            className={`${
              !featuresBool[2]
                ? "text-primaryText opacity-30"
                : "text-[#03DAC5]"
            }  mr-2  `}
          />
        </div>
        Request
        <span className="-mx-1 text-primary1  ">custom</span>
        designs
      </li>
      {/* ------ LIST ITEM ------ */}
      <li
        className={`flex items-center w-[100%] gap-2  ${
          recommended
            ? "text-[16px] xs:text-[19px]"
            : "text-[16px] xs:text-[18px]"
        } leading-[20px]`}
      >
        <div className="h-[20px] w-[20px]">
          <AiOutlineCheckCircle
            size={20}
            className={`${
              !featuresBool[3]
                ? "text-primaryText opacity-30"
                : "text-[#03DAC5]"
            }  mr-2  `}
          />
        </div>
        Submit
        <span className="-mx-1 text-primary1  ">personal</span>
        designs
      </li>
      {/* ------ LIST ITEM ------ */}
      <li
        className={`flex items-center w-[100%] gap-2  ${
          recommended
            ? "text-[16px] xs:text-[19px]"
            : "text-[16px] xs:text-[18px]"
        } leading-[20px]`}
      >
        <div className="h-[20px] w-[20px]">
          <AiOutlineCheckCircle
            size={20}
            className={`${
              !featuresBool[4]
                ? "text-primaryText opacity-30"
                : "text-[#03DAC5]"
            }  mr-2  `}
          />
        </div>
        <span className="text-primary1   -mr-1">Early</span> access to new
        designs
      </li>
      {/* ------ LIST ITEM ------ */}
      <li
        className={`flex items-center w-[100%] gap-2  ${
          recommended
            ? "text-[16px] xs:text-[19px]"
            : "text-[16px] xs:text-[18px]"
        } leading-[20px]`}
      >
        <div className="h-[20px] w-[20px]">
          <AiOutlineCheckCircle
            size={20}
            className={`${
              !featuresBool[5]
                ? "text-primaryText opacity-30"
                : "text-[#03DAC5]"
            }  mr-2  `}
          />
        </div>
        Access to all design assets
      </li>
    </ul>
  );
};

export default Features;
