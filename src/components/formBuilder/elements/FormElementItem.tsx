import { ReactElement } from "react";

type FormElementItemProps = {
  icon: ReactElement;
  label: string;
  onClick: (element: any, id: number) => void;
  type: string;
  id: number;
};
const FormElementItem = ({
  icon,
  label,
  onClick,
  type,
  id,
}: FormElementItemProps) => {
  return (
    <div
      onClick={() => onClick(type, id)}
      className="w-full h-[80px] flex flex-col items-center justify-center bg-text-200 rounded-[6px] cursor-pointer"
    >
      <div>{icon}</div>
      <p className="text-[12px] mt-[10px] text-text-700 font-medium">{label}</p>
    </div>
  );
};
export default FormElementItem;
