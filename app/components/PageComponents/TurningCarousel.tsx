import { useState } from "react";
import Container from "../Container";
import { DesignType } from "@/app/types/DesignType";
import DesignCover from "../DesignCover";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import ExploreHeader from "../ExploreHeader";

const getDesignsList = async function () {
  const ref = collection(db, "designs");
  const data = await getDocs(ref);
  const docData = data.docs.map((data) => {
    const res = data.data();
    const id = data.id;
    return { id, ...res };
  });

  return docData;
};

const TurningCarousel = async function () {
  const designsList: DesignType[] | [] = await getDesignsList();
  return (
    <div>
      <Container>
        <div className="flex  justify-center md:justify-start">
          <ExploreHeader />
        </div>
        <div className="flex px-4 py-4 items-center flex-col gap-4  overflow-hidden sm:flex-row  w-full">
          {designsList.map((design) => (
            <DesignCover key={Math.random() * 1000} design={design} />
          ))}
          {/* <DesignCover key={Math.random() * 1000} design={designsList[0]} /> */}
        </div>
      </Container>
    </div>
  );
};

export default TurningCarousel;
