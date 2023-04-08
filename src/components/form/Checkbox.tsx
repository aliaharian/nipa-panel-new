import { ReactComponent as Tick } from "../../assets/icons/Tick.svg";

type TextFieldProps = {
  name: string;
  value: string;
  label: string;
  className?: string;
  checked?: boolean;
  handleCheck?: () => void;
};
const Checkbox = ({
  name,
  label,
  value,
  className,
  checked,
  handleCheck,
}: TextFieldProps) => {
  return (
    <div
      className={`flex ml-4 mb-4 items-start justify-start relative cursor-pointer ${className}`}
      onClick={handleCheck}
    >
      <input
        type={"checkbox"}
        checked={checked}
        value={value}
        name={name}
        className="absolute top-0 left-0 opacity-0"
      />
      <div
        className={`w-6 h-6  rounded-[4px] ml-2
      ${checked ? "border-none bg-primary-main" : "border border-text-400"}
      `}
      >
        <Tick className="text-white" />
      </div>
      <p className="text-[14px]">{label}</p>
    </div>
  );
};
export default Checkbox;
