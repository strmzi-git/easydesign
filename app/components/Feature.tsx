import Container from "./Container";

interface FeatureProps {
  title: string;
  content: string;
  image?: string;
}

const Feature = function ({
  title,
  content,
  image,
}: FeatureProps): JSX.Element {
  return (
    <Container>
      <div className="mt-16 transform duration-300 hover:translate-y-[-1%] bg-[#FFF] bg-opacity-30 rounded-3xl shadow-lg  ">
        <div className="flex py-8 sm:py-4 flex-col px-2 md:px-8 md:min-h-[250px] md:flex-row gap-16 md:gap-4 items-center md:max-h-[500px] ">
          <div className="w-[100%] md:w-[50%]">
            <h2 className="text-left mb-2 text-[25px] sm:text-[35px] sm:leading-[35px] text-primaryText  leading-[25px]">
              {title}
            </h2>
            <h4 className="text-left text-primaryText font-light text-xs sm:text-md">
              {content}
            </h4>
          </div>
          <div className="w-[100%] md:w-[50%] px-8 h-[100%] bg-green-200 ">
            <div className="h-[450px] w-[250px] ">
              <p>Hi</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Feature;
