import { AiFillCheckSquare, AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import Button from "./Button";
import { loadStripe } from "@stripe/stripe-js";
import { UserType } from "../types/UserType";
import { toast } from "react-hot-toast";
import Feature from "./Feature";
import Features from "./Features";
import { Quattrocento_Sans } from "next/font/google";
const quattrocentoSans = Quattrocento_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
interface PricingBoxProps {
  recommended?: boolean;
  title?: string;
  price?: string;
  featuresBool: boolean[];
  planLabel: string;
  currentUser: UserType | null;
  subtitle?: string;
  priceId?: string;
  userRefId: string | undefined;
}

const PricingBox = function ({
  recommended,
  title,
  price,
  priceId,
  currentUser,
  featuresBool,
  planLabel,
  userRefId,
  subtitle,
}: PricingBoxProps) {
  const features = [
    "Access to free designs",
    "Access to premium designs",
    "Request custom designs",
    "Submit personal designs",
    "Early access to new designs",
    "Access to all design assets",
  ];

  const handleCheckout = async function () {
    console.log(priceId);
    if (!priceId) return;
    if (!currentUser) {
      toast.error("You must be logged in.");
    } else {
      const stripe = (await loadStripe(
        "pk_test_51NRABnHvKmtkdhL02AD6BABXRyGasTDWkZtNQPDi4pvIn885P7KexM4tywZstd6kZD2OiWoI2ICU7u2BK9QTMjzK00wV5LMrhw"
      )) as any;
      try {
        const response = await axios.post("/api/create-checkout-session", {
          priceId,
          success_url: "/",
          userRefId: userRefId,
        });
        const result = await stripe.redirectToCheckout({
          sessionId: response.data.id,
        });
        console.log(result);
      } catch (err: any) {
        console.log(err.message);
      }
    }
  };

  return (
    <div
      className={`
      ${quattrocentoSans.className}
    relative
    rounded-2xl font-quattrocentoSans
    border border-gray900
    px-[12px] py-8
    w-[100%] xs:w-[300px] h-[400px]
    ${recommended && "transform -translate-y-[30px]"}
    `}
    >
      {recommended && (
        <div className="bg-[#90F6EC] quattrocentoSans.className absolute text-gray900 px-4 py-1 -top-4 right-5 rounded-full">
          Recommended
        </div>
      )}
      <h2 className="text-left leading-[27px] text-[28px]">{title}</h2>
      <div className="flex items-end mb-2 justify-start">
        <h3 className="text-gray900 text-[32px] font-bold">{price}</h3>{" "}
        <span className="text-[16px] text-gray700 opacity-70">
          /mo {subtitle}
        </span>
      </div>
      <div className="mb-4 bg-gray900 h-[1px]"></div>

      <Features
        featuresBool={featuresBool}
        recommended={recommended || false}
      />
      <button
        onClick={handleCheckout}
        className={`  
       font-semibold
mt-[22px]
      ${
        !recommended
          ? "bg-primary1 bg-opacity-[26%] text-bluePrimary3  "
          : "bg-bluePrimary3 text-white"
      }
      w-full rounded-3xl py-[8px] text-center text-[18px]
      `}
      >
        {planLabel}
      </button>
    </div>

    // <div
    //   className={`flex flex-col items-center
    //   relative
    //   hover:translate-y-[-10px]
    //   duration-500
    //   transition
    //   overflow-hidden
    //   ${recommended ? "py-7 pb-5" : " py-[47.5px] pb-8"}
    //   ${recommended ? "border-[#8BCAFF] border-[2px]" : ""}
    //   ${
    //     recommended
    //       ? "w-[310px] md:w-[350px] h-[500px]"
    //       : "w-[290px] md:[300px] h-[450px]"
    //   }
    //   ${recommended ? "shadow-pricingShadow2" : "shadow-pricingShadow"}
    //    bg-white  `}
    // >
    //   {/* <div className="absolute z-20 w-[100%] h-[100%]">
    //     <div className="w-[50%] top-[5%] h-[50%] left-[50%] flex-shrink-0 rounded-[400px] bg-redCircle absolute blur-[125px]"></div>
    //     <div className="w-[50%] top-[50%] h-[50%] right-[15%] flex-shrink-0 absolute rounded-[400px] bg-blueCircle blur-[125px]"></div>
    //   </div> */}
    //   {recommended && (
    //     <div className="bg-yellow-300 z-50 uppercase text-xs font-semibold py-1 w-[200px] text-center absolute top-[18px] right-[-72px] transform rotate-[45deg]">
    //       Save 30%
    //     </div>
    //   )}

    //   {recommended && (
    //     <div className="px-2 py-1 mb-6 relative z-50 rounded-sm bg-primary1 text-white text-[12px] uppercase font-light w-fit">
    //       recommended
    //     </div>
    //   )}
    //   <h3 className="font-semibold relative z-50 h-fit text-[18px] text-center mb-1.5">
    //     {title}
    //   </h3>
    //   <div className="flex relative z-50 flex-col">
    //     <h2 className="text-[#222222] text-[45px] font-bold">
    //       <span className="text-[#222222] text-[25px] font-normal">$</span>
    //       {price}
    //       <span className="text-neutral-600 text-[25px] font-normal ">
    //         {recommended ? "/yr" : "/mo"}
    //       </span>
    //     </h2>
    //     {subtitle && (
    //       <p className="text-neutral-400 uppercase text-xs text-center">
    //         {subtitle}
    //       </p>
    //     )}
    //   </div>
    //   <ul className="list-none relative z-50 flex items-center flex-col my-4">
    //     {features.map((feat: string, index: number) => {
    //       return (
    //         <li
    //           key={Math.random() * 5}
    //           className="flex mb-1 items-center w-[80%] gap-2 text-[15px] leading-[20px]"
    //         >
    //           {featuresBool[index] ? (
    //             <div className="h-[20px] w-[20px]">
    //               <AiOutlineCheckCircle
    //                 size={18}
    //                 color="green"
    //                 // className="text-green-400 mr-2"
    //               />
    //             </div>
    //           ) : (
    //             <div className="h-[20px] w-[20px]">
    //               <AiOutlineCheckCircle
    //                 size={18}
    //                 // className="text-neutral-400  mr-2"
    //               />
    //             </div>
    //           )}

    //           {feat}
    //         </li>
    //       );
    //     })}
    //   </ul>
    //   <div className="relative z-50">
    //     <Button
    //       functionality={() => {
    //         handleCheckout();
    //       }}
    //       disabled={planLabel === "Current Plan"}
    //       label={planLabel}
    //       primary={recommended}
    //     />
    //   </div>
    // </div>
  );
};

export default PricingBox;
