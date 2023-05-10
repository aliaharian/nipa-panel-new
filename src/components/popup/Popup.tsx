import { Dialog, DialogContent, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type PopupProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
const Popup = ({ open, onClose, children }: PopupProps) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      //set width 452px
      sx={{
        "& .MuiDialog-paper": {
          width: "452px",
        },
      }}
    >
      <DialogContent className="flex items-center justify-center flex-col">{children}</DialogContent>
    </Dialog>
  );
};
export default Popup;
