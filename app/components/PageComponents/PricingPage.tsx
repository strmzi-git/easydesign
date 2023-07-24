import Container from "../Container";
import PricingBody from "../PricingBody";

const PricingPage = function () {
  return (
    <div className="my-32">
      <Container>
        <div id="pricing" className="w-full gap-6">
          {/* Pricing Header */}
          <div className="flex flex-col items-center py-4 mb-4">
            <h2 className="font-semibold text-[32px] md:text-[45px] w-fit text-center  text-primaryText">
              <span className="relative">
                <div className="absolute opacity-70 bottom-[6px] w-[105%] md:h-[15px] h-[7.5px] bg-primary1 -left-[5px] z-10"></div>
                <span className="relative z-50">Affordable</span>
              </span>{" "}
              subscription plans
            </h2>
            <h4 className="font-light text-[12.5px] md:text-[15px] text-center max-w-[500px] text-[#333333]">
              Sign up in less than 30 seconds. Cancel anytime, no questions, no
              hassle.
            </h4>
            <p className=" font-light text-center text-xs text-primaryText my-2">
              *As we continue to add new designs, the price may increase. Early
              birds will continue to pay the original price.*
            </p>
          </div>
          <PricingBody />
        </div>
      </Container>
    </div>
  );
};

export default PricingPage;
