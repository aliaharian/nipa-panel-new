import { Circle } from "@mui/icons-material";
import { ReactComponent as Tick } from "../../assets/icons/Tick.svg";

type RadioProps = {
  name: string;
  value: string;
  label: string;
  className?: string;
  checked?: boolean;
  handleCheck?: () => void;
};
const Radio = ({
  name,
  label,
  value,
  className,
  checked,
  handleCheck,
}: RadioProps) => {
  return (
    <div
      className={`min-w-[170px] flex-1 ${checked?"border-2 border-primary-o50":"border border-text-400"} p-[13px] rounded-[8px] flex ml-4 mb-4 items-start justify-start relative cursor-pointer ${className}`}
      onClick={handleCheck}
    >
      <input
        type={"radio"}
        checked={checked}
        value={value}
        name={name}
        onChange={handleCheck}
        className="absolute top-0 left-0 opacity-0"
      />
      <div
        className={`flex items-center justify-center min-w-[20px] w-5 h-5  rounded-full ml-2
      ${checked ? "border-none bg-primary-main" : "border border-text-400"}
      `}
      >
        <Circle className="text-white !w-[10px] !h-[10px]"  />
      </div>
      <p className={`text-[14px] text-right ${checked?"text-primary-main":"text-text-500"}`}>{label}</p>
    </div>
  );
};
export default Radio;
