import { Add, FilterSearch } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import TextField from "../form/TextField";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import Autocomplete from "../form/Autocomplete";
import walletService from "app/redux/wallet/service";
import { useEffect, useState } from "react";
import { FormOption } from "@/app/models/form";
import Datepicker from "../form/Datepicker";
import DropDown from "../form/Dropdown";
import RadioGroup from "../form/RadioGroup";
import transform from "app/utils/transform";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { getTransactionStatuses } from "app/redux/wallet/actions";

type TransactionFiltersDialogProps = {
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

const TransactionFiltersDialog = ({ open, handleClose, handleSubmit }: TransactionFiltersDialogProps) => {
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
  const statuses = useAppSelector(state => state.wallet.transactionStatuses);
  const Dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      // console.log("values", values);
      //sorting datas
      const data = {
        user_id: values.user?.value ? values.user?.value === 'all' ? null : values.user?.value : null,
        transaction_status_id: values.status ? values.status === "all" ? null : values.status : null,
        is_valid: values.validity === 'all' ? null : values.validity === 'valid' ? true : false,
        date_from: values.fromDate//convert to laravel date
          ? transform.toISOLocal(values.fromDate)
          : null,
        date_to: values.toDate//convert to laravel date
          ? transform.toISOLocal(values.toDate)
          : null,
        transaction_type: values.type === 'all' ? null : values.type === 'withdrawal' ? 'Withdrawal' : 'allDeposits',
        payment_method: values.isOnline === 'all' ? null : values.isOnline === 'online' ? 'online' : 'offline',
      }
      handleSubmit && handleSubmit(data)
      handleClose?.()

    },
  });
  const handleSubmitForm = () => {
    formik.handleSubmit()
  }
  useEffect(() => {
    // fetchCustomers("").then((res: FormOption[]) => {
    //   setInitialCustomers(res)
    // })
    if (open) {
      !statuses && Dispatch(getTransactionStatuses())
    }

  }, [open])
  useEffect(() => {
    if (!statuses) {
      setTransactionStatuses([{
        value: "all",
        label: <p>همه</p>
      }])
    } else {
      setTransactionStatuses([{
        value: "all",
        label: <p>همه</p>
      }, ...statuses?.map((status: any) => {
        return {
          value: status.id.toString(),
          label: <p>{status.name}</p>
        }
      })])
    }
  }, [statuses])
  const fetchCustomers = async (value: string) => {
    const res = await walletService.getWalletsUsers(value)
    // console.log("res", res);
    if (!res) {
      return []
    }

    return [{
      label: "همه",
      value: null,
    }, ...res?.map((customer: any) => {
      return {
        label: customer.user.name ? customer.user.name + " " + customer.user.last_name : customer.user.mobile,
        value: customer.id,
      }
    })]
  }

  // console.log("formik", formik.values);
  const handleCancel = () => {
    formik.resetForm()
    handleSubmit && handleSubmit({
      user_id: null,
      transaction_status_id: null,
      is_valid: null,
      date_from: null,
      date_to: null,
      transaction_type: null,
      payment_method: null,
    })
    handleClose?.()
  }
  return (
    <SideDialog
      headerText={"فیلتر کیف پول و تراکنش ها"}
      headerIcon={<FilterSearch />}
      open={open}
      handleClose={handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 font-bold text-[18px]">
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7">
              <Autocomplete
                className="group"
                name={"user"}
                fetchList={fetchCustomers}
                label={"نام مشتری"}
                options={[...initialCustomers]}
                placeholder={'select one'}
                formik={formik}
              />
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
              <RadioGroup
                className="group"
                name={'type'}
                label={'نوع تراکنش'}
                options={[
                  {
                    label: "همه",
                    value: "all"
                  },
                  {
                    label: "برداشت از کیف پول",
                    value: "withdrawal"
                  },
                  {
                    label: "واریز به کیف پول",
                    value: "deposit"
                  },

                ]}
                formik={formik}
              />
              <RadioGroup
                className="group"
                name={'validity'}
                label={'اعتبار تراکنش'}
                options={[
                  {
                    label: "همه",
                    value: "all"
                  },
                  {
                    label: "نهایی شده",
                    value: "valid"
                  },
                  {
                    label: "نهایی نشده",
                    value: "invalid"
                  },

                ]}
                formik={formik}
              />
              <RadioGroup
                className="group"
                name={'isOnline'}
                label={'نوع انجام تراکنش'}
                options={[
                  {
                    label: "همه",
                    value: "all"
                  },
                  {
                    label: "آنلاین",
                    value: "online"
                  },
                  {
                    label: "آفلاین",
                    value: "offline"
                  },

                ]}
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

export default TransactionFiltersDialog;
