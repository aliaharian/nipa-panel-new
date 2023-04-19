import SwitchButton from "./SwitchButton";

type SwitchProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  label?: string;
};
const Switch = ({ checked, setChecked, label }: SwitchProps) => {
  return (
    <div className="w-full p-[8px] h-[48px] flex items-center justify-between border border-text-400 rounded-[8px] transition-al">
      <p className="cursor-pointer text-text-800 text-[14px]" onClick={()=>setChecked(!checked)}>{label}</p>
      <SwitchButton checked={checked} setChecked={setChecked} />
    </div>
  );
};
export default Switch;
