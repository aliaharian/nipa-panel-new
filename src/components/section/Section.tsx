
import { ArrowLeft, Trash } from "iconsax-react";
import { MouseEventHandler, ReactNode, useRef, useState } from "react";
import IconMenu from "../menu/IconMenu";
import { ClickAwayListener } from "@mui/material";

type SectionProps = {
  headerTitle?: string;
  children?: ReactNode

};
const Section = ({ headerTitle, children }: SectionProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div className="w-full rounded-[6px] bg-white border border-text-300">
      {
        headerTitle &&
        <div className="py-7 px-5 border-b border-text-300 flex">
          <p className="text-[18px] font-bold text-text-800">
          {headerTitle}
            </p>
        </div>
      }
      <div className="py-8 px-5">
        {children}
      </div>
    </div>
  );
};
export default Section;
