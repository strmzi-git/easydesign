import Header from "@/app/components/Header";
import Body from "./Body";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/PageComponents/Footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import ToasterProvider from "@/app/components/providers/ToasterProvider";
import LinkDisplay from "@/app/components/LinkDisplay";

const retrieveData = async function (id: string) {
  const docRef = doc(db, "designs", id);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();

  return docData;
};

const Page = async function ({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await retrieveData(id);
  console.log(data);

  return (
    <div>
      <ToasterProvider />
      <Header subPage />
      <div className="flex flex-col gap-12">
        {data && <Body designData={{ ...data, id }} />}

        <Footer />
      </div>
    </div>
  );
};

export default Page;
