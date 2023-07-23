import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import ToasterProvider from "../components/providers/ToasterProvider";
import BodyComponent from "./BodyComponent";

const CollectionPage = function () {
  return (
    <div className="">
      <ToasterProvider />
      <Header subPage={true} />
      <BodyComponent />
      <div className="flex items-center bg-primary3 flex-col gap-2 h-[175px] justify-center ">
        <p>
          Sign up to our email list to get notified immediately when we release
          new designs or have appealing offers discounts
        </p>
        <Subscribe />
      </div>
    </div>
  );
};
export default CollectionPage;
