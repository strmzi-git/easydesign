import { collection, getDocs } from "firebase/firestore";
import Container from "../components/Container";
import DesignCard from "./DesignCard";

import FilterBy from "./SubHeader";
import { db } from "../firebase";
import LoadingUI from "./LoadingUI";
import { Suspense } from "react";
import SubHeader from "./SubHeader";

async function getDesigns() {
  const ref = collection(db, "designs");
  const data = await getDocs(ref);
  const docData = data.docs.map((data) => {
    const res = data.data();
    const id = data.id;
    return { id, ...res };
  });

  return docData;
}

const BodyComponent = async function () {
  const designData = await getDesigns();

  return (
    <Container>
      <div className="w-[100%]">
        <SubHeader />

        <div className="h-[100%] gap-4 w-[100%] flex flex-wrap py-8  sm:justify-center md:justify-start ">
          {designData.map((card) => (
            // <Suspense fallback={<LoadingUI />}>
            <>
              <DesignCard key={Math.random()} design={card} />
              <DesignCard key={Math.random()} design={card} />
              <DesignCard key={Math.random()} design={card} />
              <DesignCard key={Math.random()} design={card} />
            </>
            // </Suspense>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BodyComponent;
