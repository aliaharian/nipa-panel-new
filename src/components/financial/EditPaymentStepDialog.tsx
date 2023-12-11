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
import RadioGroup from "../form/RadioGroup";
import Datepicker from "../form/Datepicker";
type EditPaymentStepDialogProps = {
  open: boolean;
  handleClose?: () => void;
  handleSubmit?: (values: any) => void;
  data?: any;
};

type initialValues = {
  id: number | null;
  payTime: Date | null;
  isOnline: string;
  payablePrice: string;
  stepNumber?: number;
};

const EditPaymentStepDialog = ({ open, handleClose, handleSubmit, data }: EditPaymentStepDialogProps) => {
  const initialValues: initialValues = {
    //from data mabe
    id: data?.id || 0,
    stepNumber: data?.step_number || 1,
    payTime: data?.pay_time ? new Date(data?.pay_time) : null,
    isOnline: data?.allow_online ? data?.allow_offline ? "all" : "online" : data?.allow_offline ? "offline" : "" || "",
    payablePrice: data?.payable_price?.toString() || "",
  };
  const { t } = useTranslation("common");
  const validationSchema = Yup.object({
    payablePrice: Yup.string().required(t("required") || ""),
    payTime: Yup.string().required(t("required") || ""),
    isOnline: Yup.string().required(t("required") || ""),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {

      handleSubmit && handleSubmit(values)
      // handleClose?.()

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
      headerText={data?.id ? t("edit_payment_step") : t("add_payment_step")}
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
                name={"payablePrice"}
                label={t("payable_price")}
                type="number"
                placeholder={"قیمت واحد را وارد کنید"}
                formik={formik}
                normal
              />
              <RadioGroup
                className="group"
                name={'isOnline'}
                label={'شیوه مجاز به پرداخت'}
                options={[
                  {
                    label: "آنلاین",
                    value: "online"
                  },
                  {
                    label: "آفلاین",
                    value: "offline"
                  },
                  {
                    label: "همه",
                    value: "all"
                  },

                ]}
                formik={formik}
              />
              <Datepicker
                label="تاریخ سررسید پرداخت"
                name="payTime"
                formik={formik}
                placeholder={"انتخاب تاریخ"}
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
              text={data?.id ? t("edit_payment_step") : t("add_payment_step")}
              onClick={handleSubmitForm}

            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default EditPaymentStepDialog;
