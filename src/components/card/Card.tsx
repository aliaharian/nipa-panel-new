import { ArrowLeft, Trash } from "iconsax-react";
import { MouseEventHandler, useRef, useState } from "react";
import IconMenu from "../menu/IconMenu";
import { ClickAwayListener } from "@mui/material";
import { useTranslation } from "react-i18next";

type CardProps = {
  arrow?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  handleDelete?: () => void;
};
const Card = ({ arrow = true, children, onClick, handleDelete }: CardProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef(null);
  const {t}  = useTranslation();

  return (
    <div
      ref={anchorRef}
      onContextMenu={(e: any) => {
        e.preventDefault();
        setOpenMenu(true);
      }}
      onClick={(e: any) => {
        !openMenu && onClick?.();
      }}
      className="transition-all cursor-pointer flex items-center justify-between w-full py-8 px-[23px] bg-white border border-text-300 hover:shadow rounded-[6px] text-text-500 hover:text-primary-main"
    >
      <div>{children}</div>
      {arrow && (
        <div className="ltr:rotate-180">
          <ArrowLeft />
        </div>
      )}
      <ClickAwayListener
        onClickAway={(e) => {
          e.preventDefault();
          setOpenMenu(false);
        }}
      >
        <IconMenu
          anchorEl={anchorRef.current}
          open={openMenu}
          handleClose={() => {
            setOpenMenu(false);
          }}
          items={[
            {
              icon: <Trash variant={"Bold"} />,
              text: t("delete"),
              onClick: () => {
                setOpenMenu(false);
                handleDelete?.();
              },
            },
          ]}
        />
      </ClickAwayListener>
    </div>
  );
};
export default Card;
