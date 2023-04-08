import { Add } from "iconsax-react";
import SideDialog from "../../sideDialog/SideDialog";
import TextField from "../../form/TextField";
import { useFormik } from "formik";
import { FormField } from "../../../app/models/form";
import Button from "../../button/Button";

type AddDropdownItemDialogProps = {
  open: boolean;
  handleClose?: () => void;
  field: FormField;
};

type initialValues = {
  mobile: string;
};

const AddDropdownItemDialog = ({
  open,
  handleClose,
  field,
}: AddDropdownItemDialogProps) => {
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

  console.log("cscscscscscs", field);
  return (
    <SideDialog
      headerText={`افزودن ${field.label}`}
      headerIcon={<Add />}
      open={open}
      handleClose={handleClose}
    >
      <SideDialog.Content>
        <div className="p-7">
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7">
              <TextField
                name="fieldName"
                label="عنوان فیلد"
                type="text"
                placeholder="عنوان فیلد را وارد نمایید"
                formik={formik}
              />
              <TextField
                name="fieldValue"
                label="نامک فیلد"
                type="text"
                placeholder="نامک فیلد را وارد نمایید"
                formik={formik}
              />
            </div>
          </form>
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="mt-20 px-7">
          <Button text="تایید و دریافت کد" type="submit" />
          <Button text="ورود با کلمه عبور" href={"/auth/verify"} simple />
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default AddDropdownItemDialog;
