import {
  ArrowDown,
  ArrowDown2,
  ArrowRight,
  Login,
  Logout,
  Notification,
} from "iconsax-react";
import { setCollapseMenu } from "../../app/redux/application/actions";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import IconMenu from "../menu/IconMenu";
import { useRef, useState } from "react";
import { logout } from "app/redux/users/actions";

const Header = () => {
  const Dispatch = useAppDispatch();
  const collapseMenu = useAppSelector((state) => state.app.collapseMenu);
  const user = JSON.parse(localStorage.getItem("nipa_user") || "");

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleCollapseMenu = () => {
    console.log("collapse menu");
    Dispatch(setCollapseMenu(!collapseMenu));
  };
  return (
    <div className="w-full h-[80px] bg-white flex items-center justify-between pl-[36px] sticky top-0 z-50">
      <div>
        <ArrowRight
          onClick={handleCollapseMenu}
          className={`${collapseMenu && "rotate-180"}`}
        />
      </div>
      <div className="flex">
        <div className="p-[20px] ml-[20px]">
          <Notification />
        </div>
        <div
          ref={anchorRef}
          onClick={() => setOpen(true)}
          className="flex items-center pr-[7px] pl-[16px] cursor-pointer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm8UnQUb93iMa_J1a9GuKRJ1LWIzTD8dxrA&usqp=CAU"
            // src="https://avatars.githubusercontent.com/u/47092464?v=4"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full"
          />
          <p className="mx-[10px]">{user.name?user.name+" "+user.last_name : user.mobile}</p>
          <ArrowDown2 />
        </div>
        <IconMenu
          anchorEl={anchorRef.current}
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          items={[
            {
              icon: <Logout />,
              text: "خروج",
              onClick: () => {
                Dispatch(logout());
              },
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Header;
