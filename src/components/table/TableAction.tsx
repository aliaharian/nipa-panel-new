import { Edit, Eye, More, Trash } from "iconsax-react";
import { useRef, useState } from "react";
import MenuButton from "../button/MenuButton";
import IconMenu from "../menu/IconMenu";
import { useTranslation } from "react-i18next";

type TableActionProps = {
  row: any;
  handleAction?: (row: any, action: string) => void;
  items: any[];
  simple?:boolean;
};

const TableAction = ({ row, handleAction, items,simple=false }: TableActionProps) => {
  const anchorRef = useRef(null);
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const _handleAction = (row: any, action: string) => {
    setOpen(false);
    if (handleAction) {
      handleAction(row, action);
    }
  };

  return (
    <>
      <div className={`${simple?"w-[20px]":"w-[92px] pb-[5px]"}`} ref={anchorRef}>
        <MenuButton
          after
          icon={<More className="rotate-90 pt-[5px]" />}
          text={t("action")}
          simple={simple}
          onClick={() => {
            console.log(row);
            setOpen(true);
          }}
        />

        <IconMenu
          anchorEl={anchorRef.current}
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          items={items.map((item: any) => {
            return {
              ...item,
              onClick: () => _handleAction(row, item.name),
            };
          })}
        />
      </div>
    </>
  );
};


export default TableAction;
