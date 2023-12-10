import { Add, FilterSearch } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import Autocomplete from "../form/Autocomplete";
import { useEffect, useState } from "react";
import { FormOption } from "@/app/models/form";
import Datepicker from "../form/Datepicker";
import DropDown from "../form/Dropdown";
import transform from "app/utils/transform";
import { getFactorStatuses } from "app/redux/financial/actions";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";

type AddFactorItemDialogProps = {
  open: boolean;
  handleClose?: () => void;
  handleSubmit?: (values: any) => void;
};

type initialValues = {
  user: FormOption | null;
  fromDate: Date | null;
  toDate: Date | null;
  status: string | null;
  type: string | null;
  validity: string | null;
  isOnline: string | null;
};

const AddFactorItemDialog = ({ open, handleClose, handleSubmit }: AddFactorItemDialogProps) => {
  const initialValues: initialValues = {
    user: null,
    fromDate: null,
    toDate: null,
    status: null,
    type: 'all',
    validity: 'all',
    isOnline: 'all',
  };
  const { t } = useTranslation("common");
  const [initialCustomers, setInitialCustomers] = useState<FormOption[]>([])
  const [transactionStatuses, setTransactionStatuses] = useState<FormOption[]>([])
  const Dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {

      handleSubmit && handleSubmit(values)
      handleClose?.()

    },
  });
  const handleSubmitForm = () => {
    formik.handleSubmit()
  }




  // console.log("formik", formik.values);
  const handleCancel = () => {

    handleClose?.()
  }
  return (
    <SideDialog
      headerText={"افزودن به فاکتور"}
      headerIcon={<Add />}
      open={open}
      handleClose={handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 font-bold text-[18px]">
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7">
              <DropDown
                className="group"
                name={"status"}
                label={"وضعیت"}
                options={[...transactionStatuses]}
                placeholder={'انتخاب کنید'}
                formik={formik}
              />
              <Datepicker
                label="تاریخ از"
                name="fromDate"
                formik={formik}
                placeholder={"انتخاب تاریخ"}
              />
              <Datepicker
                label="تاریخ تا"
                name="toDate"
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
              text={t("clearFilters")}
              onClick={handleCancel}
              gray
              className="!text-error-primary"
            />
          </div>
          <div className="w-[207px]">
            <Button
              // disabled={submitdisabled}
              // icon={<Add />}
              text={t("applyFilters")}
              onClick={handleSubmitForm}

            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default AddFactorItemDialog;
