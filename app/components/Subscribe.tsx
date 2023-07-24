"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";

import Input from "./Input";
import Button from "./Button";
import { db } from "../firebase";
const Subscribe = function () {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  const formSubmit: SubmitHandler<FieldValues> = async function (data) {
    try {
      const docRef = await addDoc(collection(db, "subscribers"), {
        email: data.email,
      });
      console.log(docRef.id);
      reset();
    } catch (err) {
      console.log("An error occured!");
    }
  };
  return (
    <div className="relative  justify-center  w-full max-w-[450px] flex flex-col sm:flex-row items-center gap-4 sm:gap-2 ">
      <Input
        glass
        errors={errors}
        formId="email"
        register={register}
        placeholder="Email Address"
        id="input"
      />
      <div className={` md:absolute right-1 rounded-lg overflow-hidden  `}>
        <Button
          primary
          functionality={handleSubmit(formSubmit)}
          label="Get Early Access!"
        />
      </div>
    </div>
  );
};

export default Subscribe;
