import { Add, Edit2, PenTool, Trash } from "iconsax-react";
import { useState } from "react";
import { FormField, FormOption } from "../../../app/models/form";
import Button from "../../button/Button";
import Switch from "../../form/Switch";
import SwitchButton from "../../form/SwitchButton";
import TextField from "../../form/TextField";
import AddDropdownItemDialog, {
  initialValues,
} from "../Dialogs/AddDropdownItemDialog";

type FormBuilderEditElementTabProps = {
  selectedField?: FormField;
  handleUpdateField: (field: FormField) => void;
  handleAddOption: (id: number, option: FormOption) => void;
  handleUpdateOption: (id: number, option: FormOption, index: number) => void;
  handleDeleteOption: (id: number, option: string) => void;
  onlyImage: boolean;
  setOnlyImage: (onlyImage: boolean) => void;
  required: boolean;
  setRequired: (required: boolean) => void;
};

const FormBuilderEditElementTab = ({
  selectedField,
  handleUpdateField,
  handleAddOption,
  handleDeleteOption,
  handleUpdateOption,
  onlyImage,
  setOnlyImage,
  required,
  setRequired,
}: FormBuilderEditElementTabProps) => {
  const [openAddDropdownItemDialog, setOpenAddDropdownItemDialog] =
    useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<FormOption>();

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
  const _handleAddOption = (item: initialValues, update?: boolean) => {
    if (selectedField) {
      console.log("item", item);
      if (item.index !== undefined && item.index !== -1) {
        console.log(
          "sdvsdvsdvdsvosdvinsdoivsdvoisdnvoisdnvsodivnsdoivnsdaovindsav"
        );
        handleUpdateOption(
          selectedField.id,
          {
            label: <p>{item.fieldName}</p>,
            value: item.fieldValue.toString(),
          },
          item.index
        );
      } else {
        handleAddOption(selectedField.id, {
          label: <p>{item.fieldName}</p>,
          value: item.fieldValue.toString(),
        });
      }
    }
  };
  const _handleOpenAddOptionDialog = (item?: FormOption) => {
    console.log("ite", item);
    if (item?.label) {
      setSelectedOption({
        index: selectedField?.options?.findIndex(
          (option) => option.value === item.value
        ),
        value: item.value,
        label: item.label.props.children,
      });
    }
    if (selectedField && selectedField?.options) {
      setOpenAddDropdownItemDialog(true);
    }
  };
  const _handleCloseAddOptionDialog = () => {
    setSelectedOption(undefined);
    setOpenAddDropdownItemDialog(false);
  };
  const _handleDeleteOption = (option: FormOption) => {
    if (selectedField) {
      handleDeleteOption(selectedField.id, option.value);
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
          <div className="w-full mt-[30px]">
            <Switch
              checked={required}
              setChecked={setRequired}
              label={"این فیلد اجباری می باشد"}
            />
          </div>
          {selectedField.type === "uploadFile" && (
            <div className="w-full mt-[30px]">
              <Switch
                checked={onlyImage}
                setChecked={setOnlyImage}
                label={"فقط تصویر"}
              />
            </div>
          )}

          {selectedField.options && (
            <AddDropdownItemDialog
              open={openAddDropdownItemDialog}
              handleClose={_handleCloseAddOptionDialog}
              field={selectedField}
              handleAddOption={_handleAddOption}
              selectedOption={selectedOption}
            />
          )}

          {selectedField.options && (
            <div className="w-full mt-[25px]">
              {selectedField.options.map(
                (option: FormOption, index: number) => (
                  <div
                    key={index}
                    className="mb-[10px] h-14 text-[14px] font-semibold flex items-center rounded-[8px] px-[18px] justify-between bg-text-250"
                  >
                    <p>{option.label}</p>
                    <div className="flex">
                      <div
                        onClick={() => _handleOpenAddOptionDialog(option)}
                        className="w-[24px] h-[24px] ml-1 cursor-pointer hover:bg-text-300 flex items-center justify-center rounded-[4px]"
                      >
                        <Edit2 className="w-[20px] h-[20px]" />
                      </div>
                      <div
                        onClick={() => _handleDeleteOption(option)}
                        className="w-[24px] h-[24px] mr-1 cursor-pointer hover:bg-text-300 flex items-center justify-center rounded-[4px]"
                      >
                        <Trash className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                )
              )}
              <div className="w-full flex items-center justify-end">
                <div className="w-[111px] mt-[30px] float-left">
                  <Button
                    icon={<Add />}
                    text="افزودن"
                    onClick={_handleOpenAddOptionDialog}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default FormBuilderEditElementTab;
