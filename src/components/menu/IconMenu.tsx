import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { MenuItemProps } from "../../app/models/menu";
import { Menu } from "@mui/material";

type IconMenuProps = {
  items: MenuItemProps[];
  open: boolean;
  handleClose: () => void;
  anchorEl: any;
};
export default function IconMenu({
  items,
  open,
  handleClose,
  anchorEl,
}: IconMenuProps) {
  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          width: "187px",
          border: "1px solid #e8e8e8",
          boxShadow: "none",
          borderRadius: "6px !important",
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
      {items.map((item, index) => (
        <MenuItem
          disabled={item.disabled}
          sx={{
            "&:hover": {
              backgroundColor: "#e9edf3",
            },
            "& span": {
              fontSize: "14px !important",
              color: "#000",
            },
            "& svg": {
              color: "#7f7f7f !important",
            },
          }}
          onClick={item.onClick}
          key={index}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
              ⌘X
            </Typography> */}
        </MenuItem>
      ))}
    </Menu>
  );
}
