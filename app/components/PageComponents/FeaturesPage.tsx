import { AiOutlineStock } from "react-icons/ai";
import Container from "../Container";
import { FaFigma } from "react-icons/fa";
import FeatureBox from "../FeaturesBox";
import { MdOutlineGppGood } from "react-icons/md";
import { SlSizeActual } from "react-icons/sl";
import Feature from "../Feature";

const FeaturesPage = function () {
  return (
    <div className="mb-14" id="features">
      <Container>
        <div className=" mt-20 flex justify-center items-center flex-col md:flex-row lg:items-start gap-6 ">
          {/* <FeatureBox
            icon={MdOutlineGppGood}
            title="Unmatched quality"
            text="Gain access to a curated collection of high-quality designs each handpicked and created by seasoned designers"
          /> */}
          <FeatureBox
            title="Growing collection"
            text="Explore a diverse range of design templates in our ever-growing library, ensuring you always find the perfect fit for your project."
            icon={AiOutlineStock}
          />
          <FeatureBox
            icon={FaFigma}
            title="Designers Unite"
            text="Step into the spotlight by submitting your own designs. Get featured alongside our curated design selection. "
          />
          <FeatureBox
            icon={SlSizeActual}
            title="Fully responsive"
            text="No matter the device, our designs are built to adapt. Enjoy fully responsive templates that look great on all screen sizes."
          />
        </div>
      </Container>
    </div>
  );
};

export default FeaturesPage;
