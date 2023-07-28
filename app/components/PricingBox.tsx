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
  planLabel: string | boolean;
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
        "pk_live_51NRABnHvKmtkdhL0YjiUf4nvGMXqt7ZIt4lwoAwQugMQYQsJ4IpRsLWEZj4vFoRIuYkRzY7xeU9J9fKFYVE03gdM00v3ZbLcDb"
      )) as any;
      try {
        const response = await axios.post(
          "https://easydesign.dev/api/create-checkout-session",
          {
            priceId,
            success_url: "/",
            userRefId: userRefId,
          }
        );
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
${!planLabel && "bg-opacity-20"}
      ${
        !recommended
          ? "bg-primary1 bg-opacity-[26%] text-bluePrimary3  "
          : "bg-bluePrimary3 text-white"
      }
      w-full rounded-3xl py-[8px] text-center text-[18px]
      `}
      >
        {planLabel || "Unsubscribe"}
      </button>
    </div>
  );
};

export default PricingBox;
