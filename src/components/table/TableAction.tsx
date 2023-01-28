import { Edit, Eye, More, Trash } from "iconsax-react";
import { useRef, useState } from "react";
import MenuButton from "../button/MenuButton";
import IconMenu from "../menu/IconMenu";

const TableAction = ({ row }: { row: any }) => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-[92px] pb-[5px]" ref={anchorRef}>
        <MenuButton
          after
          icon={<More className="rotate-90 pt-[5px]" />}
          text="عملیات"
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
          items={[
            {
              icon: <Edit variant="Bold" />,
              text: "ویرایش",
              onClick: () => {
                console.log("edit");
              },
            },
            {
              icon: <Eye variant="Bold" />,
              text: "مشاهده جزئیات",
              onClick: () => {
                console.log("edit");
              },
            },
            {
              icon: <Trash variant={"Bold"} />,
              text: "حذف",
              onClick: () => {
                console.log("delete");
              },
            },
          ]}
        />
      </div>
    </>
  );
};

export default TableAction;
