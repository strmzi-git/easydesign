"use client";
import Image from "next/image";
import Input from "../Input";
import { FieldValues, useForm } from "react-hook-form";
import Button from "../Button";
import Container from "../Container";
import Subscribe from "../Subscribe";

const CallToAction = function () {
  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: { email: "" } });

  return (
    <Container>
      <div className="h-[300px] py-4 md:h-[250px] w-[100%] my-24 flex items-center justify-center ">
        <div className="w-[95%] py-6 md:pt-6 px-8 xl:w-[70%] relative h-[90%] md:justify-center overflow-hidden flex flex-col items-center gap-2 md:gap-6 border-primaryText border bg-primary3 border-opacity-25 rounded-2xl">
          <h2 className="text-black sm:w-[90%] w-[95%] text-center text-[16px] md:text-[25px] md:leading-[35px] leading-[22.5px]">
            Stay in the loop! Receive updates about our growing collection of
            professional designs
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-2 items-center md:justify-center ">
            {/* <Input
              register={register}
              errors={errors}
              formId={"email"}
              placeholder="Your best email"
            />
            <Button label="3-day free trial" /> */}
            <Subscribe />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CallToAction;
