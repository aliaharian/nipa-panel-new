import { FormField } from "../../../app/models/form";
import TextField from "../../form/TextField";

type FormBuilderEditElementTabProps = {
  selectedField?: FormField;
  handleUpdateField: (field: FormField) => void;
};

const FormBuilderEditElementTab = ({
  selectedField,
  handleUpdateField,
}: FormBuilderEditElementTabProps) => {
  const _handleUpdateField = (e: any) => {
    if (selectedField) {
      console.log("eeeee", e);
      let tmp: FormField = { ...selectedField };
      tmp = {
        ...tmp,
        [e.target.name]: e.target.value,
      };
      handleUpdateField({ ...tmp });
    }
  };
  return (
    <div>
      {!selectedField ? (
        <p>لطفا یک فیلد را برای ویرایش انتخاب کنید</p>
      ) : (
        <div className="w-full flex flex-col items-start justify-start px-4">
          <p className="text-text-450 mb-[20px]">
            نوع فیلد: {selectedField.type}
          </p>
          <TextField
            className="mb-[30px]"
            name={"label"}
            label={"عنوان فیلد"}
            type="text"
            placeholder={"عنوان فیلد"}
            formik={{
              handleChange: (e: any) => _handleUpdateField(e),
              values: {
                label: selectedField.label,
              },
            }}
          />
          <TextField
            className="mb-[30px]"
            name={"name"}
            label={"نامک فیلد"}
            type="text"
            placeholder={"نامک فیلد"}
            formik={{
              handleChange: (e: any) => _handleUpdateField(e),
              values: {
                name: selectedField.name,
              },
            }}
          />
            <TextField
            className="group"
            name={"placeholder"}
            label={"متن جایگزین"}
            type="text"
            placeholder={"متن جایگزین"}
            formik={{
              handleChange: (e: any) => _handleUpdateField(e),
              values: {
                placeholder: selectedField.placeholder,
              },
            }}
          />
        </div>
      )}
    </div>
  );
};
export default FormBuilderEditElementTab;
