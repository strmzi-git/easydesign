import Header from "./components/Header";
import MainPage from "./components/PageComponents/MainPage";
import FeaturesPage from "./components/PageComponents/FeaturesPage";
import PricingPage from "./components/PageComponents/PricingPage";
import ToasterProvider from "./components/providers/ToasterProvider";
import Image from "next/image";
import CallToAction from "./components/PageComponents/CallToAction";
import Footer from "./components/PageComponents/Footer";
import FAQ from "./components/FAQ";
import DesignCarousel from "./components/PageComponents/DesignCarousel";
// bg-custom-gradient
export default function Home() {
  return (
    <div className="relative  ">
      <div className="h-[115vh] overflow-hidden  w-[100vw] absolute ">
        <div className="absolute z-20 w-[100%]  h-[100%]">
          <div className="w-[50%] top-[5%] opacity-60 h-[50%] left-[50%] flex-shrink-0 rounded-[400px] bg-blueCircle absolute blur-[200px]"></div>
          <div className="w-[50%] top-[10%] opacity-60 h-[45%] left-[2%] flex-shrink-0 absolute rounded-[400px] bg-blueCircle blur-[200px]"></div>
        </div>
        <div className="flex w-[100%] z-30 absolute h-[750px] items-start justify-between gap-[75px] flex-shrink-0">
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
          <div className="bg-line-gradient-horizontal w-[1.5px] h-[100%] flex-shrink-0"></div>
        </div>
        <div className="flex w-[100%] z-30 flex-col absolute h-[300px] justify-between gap-[80px] flex-shrink-0">
          <div className="w-[100%] h-[1px] flex-shrink-0 bg-line-gradient-vertical"></div>
          <div className="w-[100%] h-[1px] flex-shrink-0 bg-line-gradient-vertical"></div>
          <div className="w-[100%] h-[1px] flex-shrink-0 bg-line-gradient-vertical"></div>
          <div className="w-[100%] h-[1px] flex-shrink-0 bg-line-gradient-vertical"></div>
          <div className="w-[100%] h-[1px] flex-shrink-0 bg-line-gradient-vertical"></div>
          <div className="w-[100%] h-[1px] flex-shrink-0 bg-line-gradient-vertical"></div>
          <div className="w-[100%] h-[1px] flex-shrink-0 bg-line-gradient-vertical"></div>
        </div>

        {/* <div className="z-0 bg-white w-[500px] h-[500px] border border-white rounded-full top-[-4%] right-[-5%] blur-3xl shadow-2xl bg-opacity-20 absolute"></div>
        <div className="z-0 bg-white w-[500px] h-[500px] border border-white rounded-full top-[-30%] left-[55%] blur-3xl shadow-2xl bg-opacity-20 absolute"></div>
        <div className="z-0 bg-white w-[500px] h-[500px] border border-white rounded-full blur-3xl top-[15%] left-[5%] absolute  bg-opacity-30"></div>
        <div className="z-0 bg-white triangle-clip w-[1000px] h-[1000px] blur-2xl top-[-15%] left-[-15%] absolute  bg-opacity-10"></div>
        <div className="z-0 bg-white triangle-clip w-[500px] h-[500px] blur-2xl top-[65%] transform rotate-[-35deg] left-[80%] absolute  bg-opacity-10"></div>
        <div className="z-0 bg-white triangle-clip w-[30px] h-[30px]  top-[10%] left-[15%] absolute  bg-opacity-90 blur-md"></div>
        <div className="z-0 bg-white triangle-clip w-[30px] h-[30px]  top-[65%] left-[5%] absolute  bg-opacity-90 blur-md"></div>
        <div className="z-0 bg-white triangle-clip w-[30px] h-[30px]  top-[73%] left-[65%] absolute  bg-opacity-90 blur-md"></div>
        <div className="z-0 bg-white triangle-clip w-[30px] h-[30px]  top-[25%] left-[95%] absolute  bg-opacity-90 blur-md"></div>
        <div className="z-0 bg-white triangle-clip w-[30px] h-[30px]  top-[46%] left-[28%] absolute  bg-opacity-90 blur-md"></div>
        <div className="z-0 bg-white triangle-clip w-[30px] h-[30px]  top-[68%] left-[83%] absolute  bg-opacity-90 blur-md"></div> */}
      </div>

      <ToasterProvider />
      <Header />
      <MainPage />
      <FeaturesPage />
      {/* <DesignCarousel /> */}
      <PricingPage />
      {/* <CallToAction /> */}
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
}
