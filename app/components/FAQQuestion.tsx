"use client";

import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
// import { Collapse, Card, CardBody } from "@material-tailwind/react";

interface FAQQuestionProps {
  question: string;
  answer: string;
}

const FAQQuestion = function ({ question, answer }: FAQQuestionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`relative  w-[300px] sm:w-[525px] md:w-[550px] flex flex-col lg:w-[600px] shadow-md rounded-md bg-white`}
    >
      <div
        onClick={() => setOpen(!open)}
        className=" border-b cursor-pointer bg-white justify-between gap-6 w-[100%] h-[80px] flex items-center px-8 relative"
      >
        <p className=" max-w-[450px] text-[#222222] text-sm sm:text-md">
          {question}
        </p>
        <FaChevronDown className="" size={25} />
      </div>

      {/* <Collapse open={open}>
        <Card>
          <CardBody className="w-[100%] h-[100%] border-none px-8 py-4 text-sm sm:text-md ">
            {answer}
          </CardBody>
        </Card>
      </Collapse> */}
    </div>
  );
};

export default FAQQuestion;
