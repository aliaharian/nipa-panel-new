
import { ArrowLeft, Trash } from "iconsax-react";
import { MouseEventHandler, ReactNode, useRef, useState } from "react";
import IconMenu from "../menu/IconMenu";
import { ClickAwayListener } from "@mui/material";

type SectionProps = {
  headerTitle?: string;
  children?: ReactNode;
  headerActions?: ReactNode;

};
const Section = ({ headerTitle, children, headerActions }: SectionProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div className="w-full rounded-[6px] bg-white border border-text-300">
      <div className={`border-b border-text-300 ${headerActions?"py-4":"py-7"} pr-5 pl-10 w-full flex items-center justify-between`}>
        {
          headerTitle &&
          <div className=" flex">
            <p className="text-[18px] font-bold text-text-800">
              {headerTitle}
            </p>
          </div>
        }
        {
          headerActions &&
          <div>
            {
              headerActions
            }
          </div>
        }
      </div>

      <div className="py-8 px-5">
        {children}
      </div>
    </div>
  );
};
export default Section;
