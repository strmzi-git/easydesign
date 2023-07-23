import Subscribe from "../Subscribe";
import Container from "../Container";

const MainPage = function () {
  return (
    <div className="relative z-30">
      <Container>
        <div className="items-center pt-6 sm:pt-14 h-[430px] z-30 flex flex-col gap-2 relative">
          <h1 className="text-[40px] text-center leading-[40px]  font-semibold tracking-[0.5px] sm:text-[52.5px] sm:leading-[52.5px] md:text-[55.5px] md:leading-[55.5px] lg:text-[70.5px] lg:leading-[70.5px] text-black max-w-[850px]">
            Your shortcut to great design with Easy Design
          </h1>
          <h2 className="text-sm text-center mt-4 max-w-[500px] md:text-base  text-neutral-700">
            Access a vast and growing collection of premium, responsive web
            designs. Fast-track your projects with ready-to-use templates
          </h2>
          <h2 className="text-sm  mb-4 text-center max-w-[500px] md:text-base  text-neutral-700">
            Browse, select, download. No more design roadblocks. Simplify your
            process with our diverse design collection.
          </h2>
          <Subscribe />
        </div>
      </Container>
    </div>
  );
};
export default MainPage;
