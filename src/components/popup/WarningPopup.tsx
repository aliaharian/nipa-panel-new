import React from "react";
import Popup from "./Popup";
import { InfoCircle, Trash } from "iconsax-react";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import { CircularProgress } from "@mui/material";

type PopupProps = {
  open: boolean;
  title?: string | null;
  onClose: () => void;
  handleConfirm: () => void;
  loading?: boolean;
};
const WarningPopup = ({
  open,
  onClose,
  title,
  handleConfirm,
  loading,
}: PopupProps) => {
  const { t } = useTranslation(["common", "validations"]);
  return (
    <Popup open={open} onClose={onClose}>
      <div className="w-14 h-14 mb-[10px] bg-primary-250 rounded-full items-center justify-center flex text-primary-main">
        <InfoCircle variant="Bold" />
      </div>
      <div>
        <p className="text-center text-[16px] font-semibold mb-[35px]">{title}</p>
      </div>
      <div className="flex items-center justify-between w-full max-w-[236px]">
        <div className="w-[102px]">
          <Button
            disabled={loading}
            text={
              loading ? (
                <CircularProgress color="inherit" size={24} />
              ) : (
                t("yes")
              )
            }
            onClick={!loading ? handleConfirm : () => {}}
          />
        </div>
        <div className="w-[102px]">
          <Button
            disabled={loading}
            text={t("no")}
            onClick={!loading ? onClose : () => {}}
            bordered
          />
        </div>
      </div>
    </Popup>
  );
};
export default WarningPopup;
