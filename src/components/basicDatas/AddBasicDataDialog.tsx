import { Add } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import TextField from "../form/TextField";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import DropDown from "../form/Dropdown";
import * as Yup from "yup";
import { setSaveSuccess } from "app/redux/products/actions";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useEffect, useState } from "react";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { BasicData, BasicDataItem } from "app/models/basicData";
import basicDataService from "app/redux/basicData/service";

type OrderFiltersDialogProps = {
  open: boolean;
  handleClose?: () => void;
  getBasicData: () => void;
};

const AddBasicDataDialog = ({
  open,
  handleClose,
  getBasicData,
}: OrderFiltersDialogProps) => {
  const { t } = useTranslation(["common", "validations"]);
  const Dispatch = useAppDispatch();
  const saveSuccess = useAppSelector(
    (state: any) => state.products.saveSuccess
  );

  const [submitdisabled, setSubmitDisabled] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    type: Yup.string().required(
      t("code.required", { ns: "validations" }) || ""
    ),
    name: Yup.string().required(
      t("name.required", { ns: "validations" }) || ""
    ),
  });

  const initialValues: BasicData = {
    id: 0,
    name: "",
    type: "",
    items: [],
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log("valuekkkks", values);

      let res = await basicDataService.addBasicData(values);
      if (res.id) {
        getBasicData();
        handleClose?.();
      }
    },
  });

  const handleSubmitForm = () => {
    console.log('ok',formik)
    formik.handleSubmit();
  };
  const _handleClose = () => {
    handleClose && handleClose();
    formik.resetForm();
  };
  useEffect(() => {
    if (saveSuccess) {
      _handleClose();
      Dispatch(setSaveSuccess(false));
      SnackbarUtils.success(t("addProductSuccess"));
    }
  }, [saveSuccess]);
  // console.log("edit", editData);
  // console.log("formik.values", formik.values);
  return (
    <SideDialog
      headerText={t("addBasicData")}
      headerIcon={<Add />}
      open={open}
      handleClose={_handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 font-bold text-[18px]">
          <p className="text-right">{t("enterBasicDataDetail")}</p>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7">
              <TextField
                name="type"
                label={t("typeEn")}
                type={"text"}
                placeholder={t("type.placeholder", {
                  ns: "validations",
                })}
                formik={formik}
              />
              <TextField
                name="name"
                label={t("name")}
                type="text"
                placeholder={t("name.placeholder", {
                  ns: "validations",
                })}
                formik={formik}
              />
            </div>
          </form>
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="py-[24px] border-t border-text-300 px-7 flex justify-between">
          <div className="w-[126px]">
            <Button
              disabled={submitdisabled}
              text="انصراف"
              onClick={_handleClose}
              gray
            />
          </div>
          <div className="w-[207px]">
            <Button
              disabled={submitdisabled}
              icon={<Add />}
              text={t("addBasicData")}
              onClick={handleSubmitForm}
              
            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default AddBasicDataDialog;
