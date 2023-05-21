import { Add } from "iconsax-react";
import SideDialog from "../../sideDialog/SideDialog";
import TextField from "../../form/TextField";
import { useFormik } from "formik";
import { FormField, FormOption } from "../../../app/models/form";
import Button from "../../button/Button";
import { useEffect } from "react";

export type initialValues = {
  index?: number;
  fieldName: string;
  fieldValue: string;
  id?: number;
};

type AddDropdownItemDialogProps = {
  open: boolean;
  handleClose?: () => void;
  field: FormField;
  handleAddOption: (item: initialValues) => void;
  selectedOption?: FormOption;
};
const AddDropdownItemDialog = ({
  open,
  handleClose,
  field,
  handleAddOption,
  selectedOption,
}: AddDropdownItemDialogProps) => {
  console.log("selectedOptionselectedOptionselectedOptionselectedOptionselectedOption", selectedOption);
  const initialValues: initialValues = {
    index: selectedOption?.index || -1,
    id: selectedOption?.index || 0,
    fieldName: selectedOption?.label || "",
    fieldValue: selectedOption?.value || "",
  };

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      handleAddOption(values);
      formik.setFieldValue("fieldName", "");
      formik.setFieldValue("fieldValue", "");
      formik.setFieldValue("index", -1);
      handleClose?.();
    },
  });
  useEffect(() => {
    if (selectedOption) {
      formik.setFieldValue("fieldName", selectedOption.label);
      formik.setFieldValue("fieldValue", selectedOption.value);
      formik.setFieldValue("index", selectedOption.index);
      formik.setFieldValue("id", selectedOption.id);
    }
  }, [selectedOption]);

  const handleSubmitForm = () => {
    formik.submitForm();
  };
  console.log("cscscscscscs", field);
  const _handleClose = () => {
    handleClose?.();
    formik.setFieldValue("fieldName", "");
    formik.setFieldValue("fieldValue", "");
    formik.setFieldValue("index", -1);
  };
  return (
    <SideDialog
      headerText={`${selectedOption ? "ویرایش" : "افزودن"} ${field.label}`}
      headerIcon={<Add />}
      open={open}
      handleClose={_handleClose}
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
        <div className="mt-20 px-7 flex justify-between items-center py-[25px] border border-text-300">
          <div className="w-[126px]">
            <Button text="انصراف" onClick={_handleClose} gray />
          </div>
          <div className="w-[182px]">
            <Button
              text={`${selectedOption ? "ویرایش" : "افزودن"} ${field.label}`}
              onClick={handleSubmitForm}
            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default AddDropdownItemDialog;
