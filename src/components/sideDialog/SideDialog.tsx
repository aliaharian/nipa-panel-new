import { Add, CloseCircle } from "iconsax-react";
import React, { useState } from "react";

type SideDialogProps = {
  open: boolean;
  handleClose?: () => void;
  children?: any;
  headerIcon?: any;
  headerText?: string;
};

const Content = ({ children }: any) => {
  return <div>{children}</div>;
};

const Footer = ({ children }: any) => {
  return <div>{children}</div>;
};

const SideDialog = ({
  open,
  handleClose,
  children,
  headerIcon,
  headerText,
}: SideDialogProps) => {
  const [rand, setRand] = useState<number>(Math.floor(Math.random() * 1000));
  const _handleClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((event.target as HTMLInputElement).id === "dialog" + rand) {
      handleClose?.();
    }
  };
  return (
    <div
      id={`dialog${rand}`}
      onClick={_handleClose}
      className={`w-full h-full fixed bg-black-60 left-0 top-0 transition-all ${
        !open
          ? "pointer-events-none opacity-0 z-0 delay-300"
          : "opacity-1 z-[999] delay-200"
      }`}
    >
      <div
        className={`h-full w-1/2 bg-white transition-all	${
          open ? "translate-x-0 delay-300" : "translate-x-[100%] delay-200"
        }`}
      >
        {headerText && (
          <div className="flex w-full px-8 py-6 items-center justify-between border-b border-text-300">
            <div className="flex items-center">
              <div className="ml-3 w-9 h-9 rounded-[12px] bg-primary-main flex items-center justify-center text-white">
                {headerIcon}
              </div>
              <p className="text-[20px] leading-[20px] font-bold">
                {headerText}
              </p>
            </div>
            <div className="w-9 h-9">
              <button onClick={handleClose} className="w-9 h-9">
                <CloseCircle className="w-9 h-9" />
              </button>
            </div>
          </div>
        )}
        <div className="flex justify-between w-full flex-col h-[calc(100%-85px)]">
          {React.Children.map(children, (child) => {
            if (child.type === Content) {
              return <Content>{child.props.children}</Content>;
            } else if (child.type === Footer) {
              return <Footer>{child.props.children}</Footer>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

SideDialog.Content = Content;
SideDialog.Footer = Footer;

export default SideDialog;
