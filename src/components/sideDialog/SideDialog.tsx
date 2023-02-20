import { Add, CloseCircle } from "iconsax-react";
import { useState } from "react";

type SideDialogProps = {
  open: boolean;
  handleClose?: () => void;
  children?: any;
  headerIcon?: any;
  headerText?: string;
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
      className={`w-full h-full absolute bg-black-60 left-0 top-0 z-10 ${
        !open && "hidden"
      }`}
    >
      <div className="h-full w-1/2 bg-white">
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

        {children}
      </div>
    </div>
  );
};
export default SideDialog;
