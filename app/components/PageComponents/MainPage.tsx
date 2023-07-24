import Subscribe from "../Subscribe";
import Container from "../Container";
import Image from "next/image";

const MainPage = function () {
  return (
    <div className="relative z-30 h-[600px]">
      <Container>
        <div className="items-center pt-6 sm:pt-14 h-[430px] z-30 flex flex-col gap-2 relative">
          <h1 className="text-[45px] w-[100%] text-center leading-[45px]  font-semibold tracking-[0.5px] sm:text-[52.5px] sm:leading-[52.5px] md:text-[55.5px] md:leading-[55.5px] lg:text-[70.5px] lg:leading-[70.5px] text-gray900 max-w-[850px]">
            Your{" "}
            <span className="relative border-black whitespace-nowrap h-[70px] ">
              <div className="absolute -bottom-1 w-[100%] left-0">
                <Image
                  alt="Underline illustration"
                  src={"/images/underline.svg"}
                  height={100}
                  width={300}
                />
              </div>
              <span className="relative z-50 bg-header-gradient bg-clip-text text-transparent">
                shortcut
              </span>
            </span>{" "}
            to great design with
            <span className="relative w-[1px] whitespace-nowrap ">
              <span className=" w-[0] z-50 bg-header-gradient bg-clip-text text-transparent">
                <div className="absolute  top-[-22px] scale-[0.8] sm:scale-[0.9] md:scale-[1] right-[-25px] transform rotate-[18deg]">
                  <Image
                    alt="Underline illustration"
                    src={"/images/crown.svg"}
                    height={50}
                    width={50}
                  />
                </div>
                Easy Design
              </span>
            </span>{" "}
          </h1>
          <div className="relative">
            <div className="absolute md:left-[-40px] transform rotate-[20deg] top-[162.5px] xxs:top-[145px] xs:top-[125px] xs:left-[-20px] md:top-[85px] ">
              <Image
                alt="Underline illustration"
                src={"/images/arrow.svg"}
                height={75}
                className="text-transparent bg-transparent"
                width={75}
              />
            </div>
            <h2 className="text-sm mb-2 text-center mt-8 max-w-[400px] md:max-w-[500px] md:text-base  text-gray900">
              Access a vast and growing collection of premium, responsive web
              designs. Fast-track your projects with ready-to-use templates
            </h2>
            <h2 className="text-sm mb-2 text-center max-w-[400px] md:max-w-[500px] md:text-base  text-gray900">
              Browse, select, download. No more design roadblocks. Simplify your
              process with our diverse design collection.
            </h2>
            <p className="mb-16 md:mb-8 text-center text-[14px] text-primaryText">
              *Get notified when we launch*
            </p>
          </div>
          <Subscribe />
        </div>
      </Container>
    </div>
  );
};
export default MainPage;
