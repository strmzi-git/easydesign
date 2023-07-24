"use client";
import { error } from "console";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  id?: string;
  errors?: FieldErrors;
  glass?: boolean;
  formId: string;
}

const Input = function ({
  placeholder,
  id,
  formId,
  register,
  glass,
  errors,
}: InputProps): JSX.Element {
  return (
    <div
      className={`relative grow w-full rounded-lg z-0 bg-white bg-opacity-40 max-w-[450px] `}
    >
      <input
        {...register(formId, { required: true })}
        id={formId}
        className={`pl-4 pr-2 ${
          glass && "blur-50px"
        } flex items-center rounded-lg relative shadow-lg pr-[40%] md:shadow-sm w-full z-50 bg-transparent outline-none h-[55px] text-black peer`}
        placeholder=" "
      />

      <label
        className={`absolute text-sm top-[5px] z-30 transform transition duration-300 peer-placeholder-shown:scale-[0.95] peer-placeholder-shown:translate-y-[11px]  left-4 peer-focus:scale-[0.75] peer-focus:translate-y-[-4px] origin-left  peer-focus:text-[#333333] `}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
