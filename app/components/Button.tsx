import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  functionality?: () => void;
  primary?: boolean;
  uppercase?: boolean;
  disabled?: boolean;
  icon?: IconType;
  thin?: boolean;
  bold?: boolean;
}

const Button = function ({
  label,
  uppercase,
  functionality,
  disabled,
  icon: Icon,
  primary,
  bold,
  thin,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={() => {
        console.log(disabled);
        if (!disabled) {
          if (functionality) functionality();
        }
      }}
      disabled={disabled}
      className={`
      gap-2
      ${bold ? "font-semibold" : "font-normal"}
        ${!disabled && "hover:translate-y-[-5%] transform duration-300"}
        ${disabled && "bg-neutral-200 opacity-30 cursor-default"}
        ${uppercase && "uppercase text-sm shadow-lg font-semibold"}
        ${primary ? " bg-primary1 text-white " : "bg-primary2 text-white"}

        justify-center shadow-md rounded-lg flex items-center min-w-[150px]  font-semibold  ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }   px-2
        ${thin ? "h-[37.5px]" : "h-[45px]"}
        `}
    >
      {label}
      {Icon && <Icon size={25} />}
    </button>
  );
};

export default Button;
