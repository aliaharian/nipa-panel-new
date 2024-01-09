import { ArrowLeft, Trash } from "iconsax-react";
import { MouseEventHandler, ReactNode, useRef, useState } from "react";
import IconMenu from "../menu/IconMenu";
import { ClickAwayListener } from "@mui/material";

type SectionProps = {
  headerTitle?: string;
  children?: ReactNode;
  headerActions?: ReactNode;
  printPadding?: boolean;
};
const Section = ({
  headerTitle,
  children,
  headerActions,
  printPadding,
}: SectionProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div className="w-full rounded-[6px] bg-white border border-text-300">
      {headerTitle && (
        <div
          className={`border-b border-text-300 ${
            headerActions ? "py-4" : "py-7"
          } ps-5 pe-6 w-full flex items-center justify-between`}
        >
          {headerTitle && (
            <div className=" flex">
              <p className="text-[18px] font-bold text-text-800">
                {headerTitle}
              </p>
            </div>
          )}
          {headerActions && <div>{headerActions}</div>}
        </div>
      )}

      <div
        className={`py-8 px-5 ${printPadding ? "print:px-0 print:py-0" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};
export default Section;
