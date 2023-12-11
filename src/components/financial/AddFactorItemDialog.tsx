import { Add, FilterSearch } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import DropDown from "../form/Dropdown";
import TextField from "../form/TextField";
import * as Yup from "yup";
import { useEffect } from "react";
import { factorItem } from "app/models/financial";
type AddFactorItemDialogProps = {
  open: boolean;
  handleClose?: () => void;
  handleSubmit?: (values: any) => void;
  data?: any;
};

type initialValues = {
  id: number;
  code: string | null;
  name: string | null;
  countType: string | null;
  unitPrice: string | null;
  offPrice: string | null;
  additionalPrice: string | null;
  description: string | null;
  count: string | null;
  width: string | null;
  height: string | null;
};

const AddFactorItemDialog = ({ open, handleClose, handleSubmit, data }: AddFactorItemDialogProps) => {
  const initialValues: initialValues = {
    //from data mabe
    id: data?.id || 0,
    code: data?.code || "",
    name: data?.name || "",
    countType: data?.count_type || "quantity",
    unitPrice: data?.unit_price?.toString() || "",
    offPrice: data?.off_price?.toString() || "",
    additionalPrice: data?.additional_price?.toString() || "",
    description: data?.description || "",
    count: data?.count?.toString() || "1",
    width: data?.width?.toString() || "",
    height: data?.height?.toString() || "",

  };
  const { t } = useTranslation("common");
  const validationSchema = Yup.object({
    code: Yup.string().required(t("required", { ns: "validations" }) || ""),
    name: Yup.string().required(t("required", { ns: "validations" }) || ""),
    countType: Yup.string().required(t("required", { ns: "validations" }) || ""),
    unitPrice: Yup.number().required(t("required", { ns: "validations" }) || ""),
    // offPrice: Yup.number().required(t("required", { ns: "validations" }) || ""),
    // additionalPrice: Yup.number().required(t("required", { ns: "validations" }) || ""),
    // description: Yup.string().required(t("required", { ns: "validations" }) || ""),
    count: Yup.number().required(t("required", { ns: "validations" }) || ""),
    width: //conditional
      Yup.number().when('countType', {
        is: 'm2',
        then: Yup.number().required(t("required", { ns: "validations" }) || ""),
        otherwise: Yup.number()
      }),
    height: //conditional
      Yup.number().when('countType', {
        is: 'm2',
        then: Yup.number().required(t("required", { ns: "validations" }) || ""),
        otherwise: Yup.number()
      }),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {

      handleSubmit && handleSubmit(values)
      handleClose?.()

    },
  });
  const handleSubmitForm = () => {
    formik.handleSubmit()
  }

  useEffect(() => {
    formik.setValues(initialValues)
  }
    , [data])


  const handleCancel = () => {
    formik.resetForm()
    handleClose?.()
  }
  return (
    <SideDialog
      headerText={data?.id ? t("edit_factor_item") : t("add_factor_item")}
      headerIcon={<Add />}
      open={open}
      handleClose={handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 text-[18px]">
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7">
              <TextField
                className="group"
                name={"code"}
                label={"کد"}
                type="text"
                placeholder={"کد را وارد کنید"}
                formik={formik}
                normal
                readonly={data?.product_id || data?.order_id ? true : false}
              />

              <TextField
                className="group"
                name={"name"}
                label={"نام"}
                type="text"
                placeholder={"نام را وارد کنید"}
                formik={formik}
                normal
                readonly={data?.product_id || data?.order_id ? true : false}
              />
              <DropDown
                className="group"
                name={"countType"}
                label={"واحد شمارش"}
                options={[
                  {
                    label: <p>تعدادی</p>,
                    value: 'quantity'
                  },
                  {
                    label: <p>متر مربعی</p>,
                    value: 'm2'
                  }
                ]}
                placeholder={'انتخاب کنید'}
                formik={formik}
                readonly={data?.product_id || data?.order_id ? true : false}
              />

              <TextField
                className="group"
                name={"count"}
                label={t("count")}
                type="number"
                placeholder={"تعداد را وارد کنید"}
                formik={formik}
                normal
                readonly={data?.product_id || data?.order_id ? true : false}
              />

              {
                formik.values.countType == 'm2' &&
                <TextField
                  className="group"
                  name={"width"}
                  label={t("width")}
                  type="number"
                  placeholder={"عرض را وارد کنید"}
                  formik={formik}
                  normal
                  readonly={data?.product_id || data?.order_id ? true : false}
                />
              }
              {
                formik.values.countType == 'm2' &&
                <TextField
                  className="group"
                  name={"height"}
                  label={t("height")}
                  type="number"
                  placeholder={"ارتفاع را وارد کنید"}
                  formik={formik}
                  normal
                  readonly={data?.product_id || data?.order_id ? true : false}
                />
              }
              <TextField
                className="group"
                name={"unitPrice"}
                label={t("unit_price")}
                type="number"
                placeholder={"قیمت واحد را وارد کنید"}
                formik={formik}
                normal
              />
              <TextField
                className="group"
                name={"offPrice"}
                label={t("discount")}
                type="number"
                placeholder={"تخفیف را وارد کنید"}
                formik={formik}
                normal
              />
              <TextField
                className="group"
                name={"additionalPrice"}
                label={t('additional')}
                type="number"
                placeholder={"اضافات را وارد کنید"}
                formik={formik}
                normal
              />
            </div>
            <div className="mt-7">
              <TextField
                className="group"
                name={"description"}
                label={t('description')}
                type="text"
                placeholder={"توضیحات را وارد کنید"}
                formik={formik}
                multiline
                normal
              />
            </div>
          </form>
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="py-[24px] border-t border-text-300 px-7 flex justify-between">
          <div className="w-[126px]">
            <Button
              // disabled={submitdisabled}
              text={t("cancel")}
              onClick={handleCancel}
              gray
              className="!text-error-primary"
            />
          </div>
          <div className="w-[207px]">
            <Button
              // disabled={submitdisabled}
              // icon={<Add />}
              text={data?.id ? t("edit_factor_item") : t("add_factor_item")}
              onClick={handleSubmitForm}

            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default AddFactorItemDialog;
