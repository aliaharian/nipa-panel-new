import { ArrowSquareUp, ArrowUp2 } from "iconsax-react";
import { useState } from "react";

type AccordionProps = {
  children: React.ReactNode;
  title: string;
};
const Accordion = ({ children, title }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="mb-[20px]">
      <div
        onClick={handleToggle}
        className="border border-text-300 w-full h-[72px] bg-white flex items-center justify-between px-[16px] rounded-[5px]"
      >
        <p className="text-primary-dark text-[18px] font-bold cursor-pointer">
          {title}
        </p>
        <div className="w-[28px] h-[28px] bg-text-300 flex items-center justify-center rounded-[8px] cursor-pointer hover:bg-text-400 transition-all">
          <ArrowUp2
            className={`w-[18px] h-[18px] transition-all ${
              open ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden ${
          open ? "h-auto opacity-100" : "h-0 opacity-0"
        } w-full transition-all mt-[20px] flex flex-col justify-start items-start`}
      >
        <div className="border border-text-300 bg-white rounded-[5px] w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
