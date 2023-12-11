import { Add, Task } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import transform from "app/utils/transform";
type ChangeLogDialogProps = {
  open: boolean;
  handleClose?: () => void;
  handleSubmit?: (values: any) => void;
  data?: any;
};


const ChangeLogDialog = ({ open, handleClose, data }: ChangeLogDialogProps) => {

  const { t } = useTranslation("common");

  const parseLogType = (log: any) => {
    switch (log.modifiedType) {
      case "field":
        return (
          <p>
            {t("updateField")} &nbsp;
            <span className="inline-block font-bold text-[16px]">{t(log.fieldName)}</span>
            &nbsp;{t("fromProduct")} &nbsp;
            <span className="inline-block font-bold text-[16px]">{log.product}</span>
            &nbsp;{t("from")} &nbsp;
            <span className="inline-block font-bold text-[16px]">{log.oldValue}</span>
            &nbsp;{t("to")} &nbsp;
            <span className="inline-block font-bold text-[16px]">{log.newValue}</span>
          </p>
        )
      default:
        return <p>
          {t(log.modifiedType)} &nbsp;
        </p>
    }
  }
  return (
    <SideDialog
      headerText={t("factorChanges")}
      headerIcon={<Task />}
      open={open}
      handleClose={handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 text-[18px]">
          <ul>
            {
              data?.map((item: any, index: number) => (
                <li key={index} className="flex justify-between items-center border-b border-text-300 py-[16px]">
                  <div className="flex items-center">
                    <div className="text-[#3D4851] text-[14px]">{parseLogType(item)}</div>
                  </div>
                  <div className="text-[#3D4851] text-[14px]">{t('by')} {item.user_full_name || t('admin')} {t('at')} {transform.renderChatTime(transform.dateToTimestamp(item.created_at))}</div>
                </li>
              ))
            }

          </ul>

        </div>
      </SideDialog.Content>
      
    </SideDialog>
  );
};

export default ChangeLogDialog;
