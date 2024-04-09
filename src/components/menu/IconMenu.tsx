import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { MenuItemProps } from "../../app/models/menu";
import { Dialog, Menu, useMediaQuery } from "@mui/material";
import transform from "app/utils/transform";

type IconMenuProps = {
  items: MenuItemProps[];
  open: boolean;
  handleClose: () => void;
  anchorEl: any;
  profileInfo?: boolean;
};
export default function IconMenu({
  items,
  open,
  handleClose,
  anchorEl,
  profileInfo,
}: IconMenuProps) {
  const user = JSON.parse(localStorage.getItem("nipa_user") || "");
  const isMobile = useMediaQuery("(max-width:767px)");
  return isMobile ? (
    <Dialog
      open={open}
      onClose={handleClose}
      // className="bg-primary-main"
      fullWidth
    >
      hello
    </Dialog>
  ) : (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          width: profileInfo ? "280px" : "190px",
          border: "1px solid #e8e8e8",
          boxShadow: "none",
          borderRadius: "8px !important",
          marginTop: 1,
        },
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {profileInfo && (
        <MenuItem
          sx={{
            backgroundColor: "white !important",
            padding: "24px 25px",
            borderBottom: "1px solid #ededed",
            "&:hover": {
              backgroundColor: "#fff !important",
            },
            "& span": {
              fontSize: "14px !important",
              color: "#000",
            },
            "& svg": {
              color: "#7f7f7f !important",
            },
          }}
        >
          <div className="flex w-full gap-x-[10px] items-center justify-start">
            <div className="bg-primary-main/40 border border-text-300 w-[53px] h-[53px] overflow-hidden rounded-full flex items-center justify-center">
              {user.avatar ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm8UnQUb93iMa_J1a9GuKRJ1LWIzTD8dxrA&usqp=CAU"
                  alt="avatar"
                  className="w-full h-full fit-cover rounded-full"
                />
              ) : (
                <p className="text-[20px] font-bold">
                  {user.name?.split("")?.[0]?.toUpperCase()}
                </p>
              )}
            </div>
            <div>
              <p className="text-text-800">
                {user.name} {user.last_name}
              </p>
              <p className="text-text-500 text-[14px] mt-1">
                {transform.toPersianDigits(user.mobile)}
              </p>
            </div>
          </div>
        </MenuItem>
      )}
      {items.map((item, index) => (
        <MenuItem
          disabled={item.disabled}
          sx={{
            padding: profileInfo ? "12px 25px" : "6px 16px",
            "&:hover": {
              backgroundColor: "#e9edf3",
            },
            "& span": {
              fontSize: "14px !important",
              color: "#000",
            },
            // "& svg": {
            //   color: "#7f7f7f !important",
            // },
          }}
          onClick={item.onClick}
          key={index}
        >
          <ListItemIcon className={profileInfo ? "svg:!text-text-700" : ""}>
            {item.icon}
          </ListItemIcon>
          <ListItemText className={profileInfo ? "text-text-700" : ""}>
            {item.text}
          </ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
              ⌘X
            </Typography> */}
        </MenuItem>
      ))}
    </Menu>
  );
}
