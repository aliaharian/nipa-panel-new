import { Add } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import TextField from "../form/TextField";
import { useFormik } from "formik";

type OrderFiltersDialogProps = {
  open: boolean;
  handleClose?: () => void;
};

type initialValues = {
  mobile: string;
};

const OrderFiltersDialog = ({ open, handleClose }: OrderFiltersDialogProps) => {
  const initialValues: initialValues = {
    mobile: "",
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
      headerText={"افزودن کاربر جدید"}
      headerIcon={<Add />}
      open={open}
      handleClose={handleClose}
    >
      <div className="p-7">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7">
            <TextField
              name="mobile"
              label="شماره موبایل"
              type="text"
              placeholder="شماره همراه خود را وارد نمایید"
              formik={formik}
            />
            <TextField
              name="mobile"
              label="شماره موبایل"
              type="tel"
              placeholder="شماره همراه خود را وارد نمایید"
              formik={formik}
            />
          </div>
          {/* <div className="mt-20">
          <Button text="تایید و دریافت کد" type="submit" />
          <Button text="ورود با کلمه عبور" href={"/auth/verify"} simple/>
        </div> */}
        </form>
      </div>
    </SideDialog>
  );
};

export default OrderFiltersDialog;
