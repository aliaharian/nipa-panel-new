import {
  ArrowDown,
  ArrowDown2,
  ArrowRight,
  Global,
  Login,
  Logout,
  Notification,
} from "iconsax-react";
import { setCollapseMenu } from "../../app/redux/application/actions";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import IconMenu from "../menu/IconMenu";
import { useRef, useState } from "react";
import { logout } from "app/redux/users/actions";
import { useTranslation } from "react-i18next";

const Header = () => {
  const Dispatch = useAppDispatch();
  const collapseMenu = useAppSelector((state) => state.app.collapseMenu);
  const user = JSON.parse(localStorage.getItem("nipa_user") || "");
  const { i18n } = useTranslation();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleCollapseMenu = () => {
    console.log("collapse menu");
    Dispatch(setCollapseMenu(!collapseMenu));
  };
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    document.body.dir = i18n.dir();
    //set lang in local storage
    localStorage.setItem(process.env.REACT_APP_LANG_STORAGE_KEY || "nipa-lang", lng);
    //reload
    window.location.reload();
    // theme.direction = i18n.dir();
  }
  return (
    <div className="print:hidden w-full h-[80px] bg-white flex items-center justify-between pe-9 sticky top-0 z-50">
      <div>
        <ArrowRight
          onClick={handleCollapseMenu}
          className={`ltr:rotate-180 ${collapseMenu && "rtl:rotate-180 ltr:rotate-0"}`}
        />
      </div>
      <div className="flex">
        <div className="p-[20px] me-5">
          <Notification />
        </div>
        <div
          ref={anchorRef}
          onClick={() => setOpen(true)}
          className="flex items-center pe-2 ps-4 cursor-pointer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm8UnQUb93iMa_J1a9GuKRJ1LWIzTD8dxrA&usqp=CAU"
            // src="https://avatars.githubusercontent.com/u/47092464?v=4"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full"
          />
          <p className="mx-[10px]">{user.name ? user.name + " " + user.last_name : user.mobile}</p>
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
            {
              icon: <Global />,
              text: "تغییر زبان",
              onClick: () => {
                //change language with i18n
                changeLanguage(i18n.language === "fa" ? "en" : "fa");
                setOpen(false);
              },
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Header;
