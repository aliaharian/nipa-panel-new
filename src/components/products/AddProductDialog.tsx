import { Add } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import TextField from "../form/TextField";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import DropDown from "../form/Dropdown";
import UploadGroup from "../form/UploadGroup";

type OrderFiltersDialogProps = {
  open: boolean;
  handleClose?: () => void;
};

type initialValues = {
  code: string;
  name: string;
  status: number;
  custom: number;
};

const AddProductDialog = ({ open, handleClose }: OrderFiltersDialogProps) => {
  const { t } = useTranslation(["common", "validations"]);

  const initialValues: initialValues = {
    code: "",
    name: "",
    status: 1,
    custom: 1,
  };

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <SideDialog
      headerText={t("addProduct")}
      headerIcon={<Add />}
      open={open}
      handleClose={handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 font-bold text-[18px]">
          <p className="text-right">{t("enterProductDetail")}</p>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7">
              <TextField
                name="code"
                label={t("productCode")}
                type="number"
                placeholder={t("productCode.placeholder", {
                  ns: "validations",
                })}
                formik={formik}
              />
              <TextField
                name="name"
                label={t("productName")}
                type="text"
                placeholder={t("productName.placeholder", {
                  ns: "validations",
                })}
                formik={formik}
              />
              <DropDown
                className="group"
                name="status"
                label={t("status")}
                options={[
                  { label: <p>{t("active")}</p>, value: 1 },
                  { label: <p>{t("inactive")}</p>, value: 0 },
                ]}
                placeholder={t("productStatus.placeholder", {
                  ns: "validations",
                })}
                formik={formik}
              />
              <DropDown
                className="group"
                name="custom"
                label={t("productType")}
                options={[
                  { label: <p>{t("custom")}</p>, value: 1 },
                  { label: <p>{t("normal")}</p>, value: 0 },
                ]}
                placeholder={t("productType.placeholder", {
                  ns: "validations",
                })}
                formik={formik}
              />
            </div>
            <div className="mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7">
              <UploadGroup
                className="group"
                name="custom"
                label={t("productImages")}
                placeholder={t("uploadNewImage")}
                imageOnly={true}
                formik={formik}
              />
            </div>
          </form>
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="mt-20 mx-7">
          <Button text="تایید و دریافت کد" type="submit" />
          <Button text="ورود با کلمه عبور" href={"/auth/verify"} simple />
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default AddProductDialog;
