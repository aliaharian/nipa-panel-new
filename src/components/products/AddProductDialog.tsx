import { Add } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import TextField from "../form/TextField";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import DropDown from "../form/Dropdown";
import UploadGroup from "../form/UploadGroup";
import TextArea from "../form/TextArea";
import * as Yup from "yup";
import { Image } from "app/models/product";
import { saveProduct, setSaveSuccess } from "app/redux/products/actions";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useEffect, useState } from "react";
import SnackbarUtils from "app/utils/SnackbarUtils";

type OrderFiltersDialogProps = {
  open: boolean;
  handleClose?: () => void;
};

type initialValues = {
  code: string;
  name: string;
  status: number;
  custom: number;
  description: string;
  price: string;
  images: Image[];
};

const AddProductDialog = ({ open, handleClose }: OrderFiltersDialogProps) => {
  const { t } = useTranslation(["common", "validations"]);
  const Dispatch = useAppDispatch();
  const saveSuccess = useAppSelector(
    (state: any) => state.products.saveSuccess
  );

  const [submitdisabled, setSubmitDisabled] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    code: Yup.string().required(
      t("productCode.required", { ns: "validations" }) || ""
    ),
    name: Yup.string().required(
      t("productName.required", { ns: "validations" }) || ""
    ),
    description: Yup.string().required(
      t("productDescription.required", { ns: "validations" }) || ""
    ),
    price: Yup.string().when("custom", {
      is: 0,
      then: Yup.string().required(
        t("productPrice.required", { ns: "validations" }) || ""
      ),
      otherwise: Yup.string(),
    }),
  });

  const initialValues: initialValues = {
    code: "",
    name: "",
    status: 1,
    custom: 1,
    description: "",
    price: "",
    images: [],
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("valuekkkks", values);
      Dispatch(saveProduct(values));
    },
  });
  const handleSubmitForm = () => {
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
  return (
    <SideDialog
      headerText={t("addProduct")}
      headerIcon={<Add />}
      open={open}
      handleClose={_handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 font-bold text-[18px]">
          <p className="text-right">{t("enterProductDetail")}</p>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7">
              <TextField
                name="code"
                label={t("productCode")}
                type="text"
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

            {formik.values.custom == 0 && (
              <div className="mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7">
                <TextField
                  name="price"
                  label={t("price")}
                  type="number"
                  placeholder={t("productPrice.placeholder", {
                    ns: "validations",
                  })}
                  formik={formik}
                />
              </div>
            )}
            <div className="mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7">
              <UploadGroup
                className="group"
                name="images"
                label={t("productImages")}
                placeholder={t("uploadNewImage")}
                imageOnly={true}
                formik={formik}
                setPending={setSubmitDisabled}
              />
            </div>
            <div className="mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7">
              <TextArea
                name={"description"}
                label={t("description")}
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
              text={t("addProduct")}
              onClick={handleSubmitForm}
            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default AddProductDialog;
