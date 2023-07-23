import Container from "../Container";

const Footer = function () {
  return (
    <div className="w-full py-4 h-[150px] relative mt-16  ">
      <div className="absolute z-20 w-[100%]  h-[100%]">
        <div className="w-[80%] top-[40%] h-[80%] left-[20%] flex-shrink-0 rounded-[400px] bg-blueCircle absolute blur-[120px]"></div>
        <div className="w-[80%] top-[40%] h-[80%] right-[20%] flex-shrink-0 absolute rounded-[400px] bg-blueCircle blur-[120px]"></div>
      </div>
      <Container>
        <div className="flex flex-col gap-4 items-center justify-center h-[100%] w-[100%]">
          <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-2 ">
            <div className="flex flex-col md:items-start items-center h-[100%]">
              <h2 className="text-xl">Easy Design</h2>
              <p className="text-center text-sm mt-2 md:text-left">
                Gain access to an evergrowing collection of professional web
                designs and templates with easy design.
              </p>
            </div>
            <ul className="list-none mt-6 md:flex-row md:w-[50%] md:justify-end md:mt-0 text-center w-[100%] flex flex-col gap-2">
              <li className="text-sm">Home</li>
              <li className="text-sm">Features</li>
              <li className="text-sm">Pricing</li>
              <li className="text-sm">Collection</li>
            </ul>
          </div>
          <p className="text-sm">All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
