import { Circle } from "@mui/icons-material";
import { ReactComponent as Tick } from "../../assets/icons/Tick.svg";

type RadioProps = {
  name: string;
  value: string;
  label: string;
  className?: string;
  checked?: boolean;
  handleCheck?: () => void;
  lg?: boolean;
};
const Radio = ({
  name,
  label,
  value,
  className,
  checked,
  handleCheck,
  lg
}: RadioProps) => {
  return (
    <div
      className={`${lg?"h-16":""} min-w-[170px] flex-1 ${checked?"border-2 border-primary-o50":"border border-text-400"} p-[13px] rounded-[8px] flex items-center justify-start relative cursor-pointer ${className}`}
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
        className={`flex items-center justify-center min-w-[20px] w-5 h-5  rounded-full me-2
      ${checked ? "border-none bg-primary-main" : "border border-text-400"}
      `}
      >
        <Circle className="text-white !w-[10px] !h-[10px]"  />
      </div>
      <p className={`${lg?"text-[16px]":"text-[14px]"} text-start ${checked?"text-primary-main":"text-text-500"}`}>{label}</p>
    </div>
  );
};
export default Radio;
