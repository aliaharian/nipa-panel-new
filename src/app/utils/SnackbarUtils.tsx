import { useSnackbar, VariantType, WithSnackbarProps } from "notistack";
import React from "react";

let useSnackbarRef: WithSnackbarProps;
export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  success(msg: string) {
    this.toast(msg, {
      variant: "success",
      className:
        "!bg-white border border-success-secondary !rounded-[12px] !shadow-none !text-text-800 [&>div>svg]:text-success-primary !w-[400px] !h-[65px]",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      //close snackbar after 1 second
      autoHideDuration: 3000,
      //close on click
      onClick: () => {
        //close
        
      },

      onClose: () => {
        console.log("dsvdvd");
      },
      // persist: true,
    });
  },
  warning(msg: string) {
    this.toast(msg, {
      variant: "warning",
      className:
        "!bg-white border border-warning-secondary !rounded-[12px] !shadow-none !text-text-800 [&>div>svg]:text-warning-primary !w-[400px] !h-[65px]",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      onClose: () => {
        console.log("dsvdvd");
      },
      autoHideDuration: 1000,

      // persist: true,
    });
  },
  info(msg: string) {
    this.toast(msg, {
      variant: "info",
      className:
        "!bg-white border border-info-secondary !rounded-[12px] !shadow-none !text-text-800 [&>div>svg]:text-info-primary !w-[400px] !h-[65px]",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      onClose: () => {
        console.log("dsvdvd");
      },
      autoHideDuration: 1000,

      // persist: true,
    });
  },
  error(msg: string) {
    this.toast(msg, {
      variant: "error",
      className:
        "!bg-white border border-error-secondary !rounded-[12px] !shadow-none !text-text-800 [&>div>svg]:text-error-primary !w-[400px] !h-[65px]",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
      onClose: () => {
        console.log("dsvdvd");
      },
      autoHideDuration: 1000,

      // persist: true,
    });
  },
  toast(msg: string, variant: any) {
    useSnackbarRef.enqueueSnackbar(msg, variant);
  },
};
