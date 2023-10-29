import { Add, Edit2, Trash } from "iconsax-react";
import { useEffect, useState } from "react";
import { FormField, FormOption } from "../../../app/models/form";
import Button from "../../button/Button";
import Switch from "../../form/Switch";
import TextField from "../../form/TextField";
import AddDropdownItemDialog, {
  initialValues,
} from "../Dialogs/AddDropdownItemDialog";
import { useTranslation } from "react-i18next";
import DropDown from "components/form/Dropdown";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { basicDatasList } from "app/redux/basicData/actions";

type FormBuilderEditElementTabProps = {
  selectedField?: FormField;
  handleUpdateField: (field: FormField) => void;
  handleAddOption: (id: number, option: FormOption) => void;
  handleUpdateOption: (id: number, option: FormOption, index: number) => void;
  handleDeleteOption: (
    id: number,
    option: string,
    server_id?: number | null
  ) => void;
  onlyImage: boolean;
  setOnlyImage: (onlyImage: boolean) => void;
  required: boolean;
  setRequired: (required: boolean) => void;
  fromBasicData: boolean;
  setFromBasicData: (required: boolean) => void;
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
  fromBasicData,
  setFromBasicData,
}: FormBuilderEditElementTabProps) => {
  const [openAddDropdownItemDialog, setOpenAddDropdownItemDialog] =
    useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<FormOption>();
  const basicDatas = useAppSelector((state) => state.basicData.basicDatas);
  const { t } = useTranslation();
  const Dispatch = useAppDispatch();
  console.log("selected", selectedField);
  const _handleUpdateField = (e: any) => {
    if (selectedField) {
      let tmp: FormField = { ...selectedField };
      if (e.target.name == "basic_data") {
        let basicDataTmp = basicDatas?.find((x) => x.id == e.target.value);
        console.log("basicDataTmp", basicDataTmp);

        if (basicDataTmp) {
          tmp = {
            ...tmp,
            [e.target.name]: basicDataTmp,
            basic_data_id: basicDataTmp?.id,
            basicDataItems: basicDataTmp.items.map((item) => ({
              id: item.id,
              label: <p>{item.name}</p>,
              server_id: item.id,
              value: item.code,
            })),
          };
          handleUpdateField({ ...tmp });
        }
      } else {
        tmp = {
          ...tmp,
          [e.target.name]: e.target.value,
        };
        handleUpdateField({ ...tmp });
      }
    }
  };
  useEffect(() => {
    !basicDatas && Dispatch(basicDatasList());
  }, []);
  const _handleAddOption = (item: initialValues, update?: boolean) => {
    if (selectedField) {
      if (item.index !== undefined && item.index !== -1) {
        handleUpdateOption(
          selectedField.id,
          {
            label: <p>{item.fieldName}</p>,
            value: item.fieldValue.toString(),
            id: item.id,
            server_id: item.server_id,
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
        id: item.id,
        server_id: item.server_id,
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
      handleDeleteOption(selectedField.id, option.value, option.server_id);
    }
  };
  return (
    <div>
      {!selectedField ? (
        <p>لطفا یک فیلد را برای ویرایش انتخاب کنید</p>
      ) : selectedField.fromRelatedFields ? (
        <p>این فیلد از طریق این فرم قابل ویرایش نمی باشد</p>
      ) : selectedField.readOnly ? (
        <p>این فیلد قابل ویرایش نمی باشد</p>
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

          {selectedField.options ? (
            <div className="w-full mt-[30px]">
              <Switch
                checked={fromBasicData}
                setChecked={setFromBasicData}
                label={t("fromBasicDatas") || ""}
              />
            </div>
          ) : (
            ""
          )}

          {selectedField.options && fromBasicData ? (
            <DropDown
              className="group mt-[30px]"
              name={"basic_data"}
              label={"داده اولیه"}
              options={
                basicDatas
                  ? basicDatas.map((data) => {
                      return {
                        label: <p>{data.name}</p>,
                        value: data.id.toString(),
                      };
                    })
                  : []
              }
              placeholder={"انتخاب کنید"}
              formik={{
                handleChange: (e: any) => _handleUpdateField(e),
                values: {
                  basic_data: selectedField.basic_data?.id.toString(),
                },
              }}
            />
          ) : (
            ""
          )}

          {selectedField.type === "uploadFile" && (
            <div className="w-full mt-[30px]">
              <Switch
                checked={onlyImage}
                setChecked={setOnlyImage}
                label={t("onlyImage") || ""}
              />
            </div>
          )}

          {selectedField.options && !fromBasicData ? (
            <AddDropdownItemDialog
              open={openAddDropdownItemDialog}
              handleClose={_handleCloseAddOptionDialog}
              field={selectedField}
              handleAddOption={_handleAddOption}
              selectedOption={selectedOption}
            />
          ) : (
            ""
          )}

          {selectedField.options && !fromBasicData ? (
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
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};
export default FormBuilderEditElementTab;
