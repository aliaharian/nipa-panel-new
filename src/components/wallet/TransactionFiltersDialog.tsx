import { Add, FilterSearch } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import TextField from "../form/TextField";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import Autocomplete from "../form/Autocomplete";

type TransactionFiltersDialogProps = {
  open: boolean;
  handleClose?: () => void;
};

type initialValues = {
  mobile: string;
};

const TransactionFiltersDialog = ({ open, handleClose }: TransactionFiltersDialogProps) => {
  const initialValues: initialValues = {
    mobile: "",
  };
  const { t } = useTranslation("common");

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  const handleSubmitForm = () => {
    formik.handleSubmit()
  }

  const handleCancel = () => { }
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
                name={"customerName"}
                label={"نام مشتری"}
                options={[
                  {

                    name: "محمد",
                    value: "محمد",
                  },
                  {
                    name: "حسین",
                    value: "حسین",
                  },
                  {
                    name: "علی",
                    value: "علی",
                  },
                ]}
                placeholder={'select one'}
                formik={formik}
              />
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
