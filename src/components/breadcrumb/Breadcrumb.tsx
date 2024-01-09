import { Add, ArrowRight, Setting2, Setting4 } from "iconsax-react";
import Button from "../button/Button";

type breadcrumbProps = {
  title: string;
  actions?: any;
  handleBack?: () => void;
};
const Breadcrumb = ({ title, actions, handleBack }: breadcrumbProps) => {
  return (
    <div className="print:hidden w-full flex items-center justify-between mb-[20px]">
      <div className="flex items-center">
        {handleBack ? (
          <div className="cursor-pointer" onClick={handleBack}>
            <ArrowRight className="mx-[12px] text-gray-500 ltr:rotate-180" />
          </div>
        ) : (
          <span className="inline-block w-[14px] h-[14px] rounded-[2px] bg-secondary-main me-3"></span>
        )}
        <p className="text-gray-500 font-black">{title}</p>
      </div>
      <div className="flex">{actions}</div>
    </div>
  );
};

export default Breadcrumb;
