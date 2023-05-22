import { Button } from "@mui/material";
import { ArchiveTick, Trash } from "iconsax-react";
import { useEffect, useState } from "react";
import {
  Condition,
  FormField,
  FormOption,
  selectedFieldType,
} from "../../../app/models/form";
import DropDown from "../../form/Dropdown";

type ConditionItemProps = {
  conditionalfields: FormField[];
  formElements: FormField[];
  condition: Condition;
  setCondition: (condition: Condition) => void;
  deleteCondition: (condition: number) => void;
  saveCondition: (condition: number) => void;
};

const ConditionItem = ({
  conditionalfields,
  formElements,
  condition,
  setCondition,
  deleteCondition,
  saveCondition,
}: ConditionItemProps) => {
  const [selectedField, setSelectedField] = useState<selectedFieldType>();
  const [selectedFieldValue, setSelectedFieldValue] = useState<FormOption[]>(
    []
  );
  const [operation, setOperation] = useState<FormOption>();
  const [relationField, setRelationField] = useState<selectedFieldType>();

  const handleDeleteItem = (item: any) => {
    let index = selectedFieldValue.findIndex((x) => x.value == item.value);
    if (index > -1) {
      let newSelectedFieldValue = selectedFieldValue;
      newSelectedFieldValue.splice(index, 1);
      setSelectedFieldValue([...newSelectedFieldValue]);
    }
  };

  useEffect(() => {
    if (
      condition.field &&
      condition.operation &&
      condition.relationField &&
      condition.values
    ) {
      let selectedFieldTmp = conditionalfields.find(
        (x) => x.id.toString() == condition.field
      );

      let relationFieldTmp = formElements.find(
        (x) => x.id.toString() == condition.relationField
      );
      // let selectedFieldValueTmp = selectedFieldTmp?.options;

      if (selectedFieldTmp && relationFieldTmp && condition.values) {
        setSelectedField({
          label: selectedFieldTmp.label,
          value: selectedFieldTmp.id.toString(),
          options: selectedFieldTmp.options,
        });

        //its static
        setOperation(condition.operation);

        setRelationField({
          label: relationFieldTmp.label,
          value: relationFieldTmp.id.toString(),
        });

        setSelectedFieldValue(condition.values);
      }
    }
  }, [condition]);

  const updateConditions = (condition: Condition) => {
    let newCondition: Condition = {
      ...condition,
      saved: false,
    };
    setCondition({ ...newCondition });
  };

  //delete condition
  const handleDeleteCondition = () => {
    deleteCondition(condition.id);
  };

  //save condition
  const handleSaveCondition = () => {
    saveCondition(condition.id);
  };
  const handleChangeField = (e: any) => {
    let selectedField = conditionalfields.find(
      (x) => x.id.toString() == e.target.value
    );

    setSelectedField({ ...e, options: selectedField?.options });

    // console.log({ ...e.target, options: selectedField?.options });

    setSelectedFieldValue([]);
    updateConditions({
      ...condition,
      field: e.target.value,
    });
  };
  console.log("condition", condition);

  const handleChangeOperation = (e: any) => {
    console.log("e", operation);
    setOperation(e.target);
    updateConditions({ ...condition, operation: e.target });
  };

  const handleChangeRelationField = (e: any) => {
    const field = formElements.find((x) => x.id.toString() == e.target.value);
    console.log("field", field);
    if (field) {
      setRelationField({ label: field.label, value: field.id.toString() });
      updateConditions({
        ...condition,
        relationField: field.id,
      });
    }
  };

  const handleChangeValue = (e: any) => {
    const options = selectedField?.options;
    let index = selectedFieldValue.findIndex((x) => x.id == e.target.value);
    if (index > -1) {
    } else {
      setSelectedFieldValue([
        ...selectedFieldValue,
        {
          ...options.find((x: any) => x.id == e.target.value),
        },
      ]);
      updateConditions({
        ...condition,
        values: [
          ...selectedFieldValue,
          {
            ...options.find((x: any) => x.id == e.target.value),
          },
        ],
      });
    }
  };

  ///
  // console.log("selectedField", selectedField);
  // console.log("selectedFieldValue", selectedFieldValue);
  // console.log("operation", operation);
  // console.log("relationField", relationField);

  return (
    <div className="w-full flex flex-col items-start justify-start px-4 border-b pb-[30px] border-text-400 mb-[18px]">
      <DropDown
        className="group mb-[30px]"
        name={"condField"}
        label={"فیلد"}
        options={
          conditionalfields &&
          conditionalfields.map((field) => {
            return {
              label: <p>{field.label}</p>,
              value: field.id.toString(),
            };
          })
        }
        placeholder={"انتخاب کنید"}
        formik={{
          handleChange: handleChangeField,
          values: {
            condField: selectedField?.value,
          },
        }}
      />
      <DropDown
        className={`group ${
          selectedFieldValue.length > 0 ? "mb-[15px]" : "mb-[30px]"
        }`}
        name={"condFieldValue"}
        label={"برابر"}
        options={
          selectedField &&
          selectedField?.options?.map((option: any) => {
            return {
              label: option.label,
              value: option.id,
            };
          })
        }
        placeholder={
          selectedField ? "انتخاب کنید" : "ابتدا فیلد را انتخاب کنید"
        }
        formik={{
          handleChange: handleChangeValue,
          values: {
            condFieldValue: null,
          },
        }}
      />
      {selectedFieldValue.length > 0 && (
        <div className="flex items-center justify-start w-full mb-[30px]">
          {selectedFieldValue.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[97px] h-[48px] rounded-[24px] border border-text-400 flex items-center justify-between pl-[10px] pr-[16px] ml-[8px]"
              >
                <p className="text-[14px]">{item.label}</p>
                <div
                  onClick={() => handleDeleteItem(item)}
                  className="cursor-pointer"
                >
                  <Trash className="w-[20px] h-[20px]" />
                </div>
              </div>
            );
          })}
        </div>
      )}
      <DropDown
        className="group mb-[30px]"
        name={"operation"}
        label={"عملیات"}
        options={[
          { label: <p>نمایش</p>, value: "show" },
          { label: <p>عدم نمایش</p>, value: "hide" },
        ]}
        placeholder={"عملیات"}
        formik={{
          handleChange: handleChangeOperation,
          values: {
            operation: operation?.value,
          },
        }}
      />
      <DropDown
        className="group mb-[30px]"
        name={"relationField"}
        label={"فیلد وابسته"}
        options={
          formElements &&
          selectedField &&
          //form elements minus selected field
          formElements
            .filter((x) => x.id.toString() != selectedField.value)
            .map((field) => {
              return {
                label: <p>{field.label}</p>,
                value: field.id.toString(),
              };
            })
        }
        placeholder={
          selectedField ? "انتخاب کنید" : "ابتدا فیلد را انتخاب کنید"
        }
        formik={{
          handleChange: handleChangeRelationField,
          values: {
            relationField: relationField?.value,
          },
        }}
      />
      <div className="flex items-center justify-between w-full">
        <Button
          onClick={handleDeleteCondition}
          className={`h-[48px] ${
            condition?.saved ? "w-full" : "w-[calc(50%-8px)] ml-[8px]"
          } !rounded-[8px]  !border !border-solid !border-error-primary !text-error-primary `}
        >
          <Trash />
          <p className="text-[14px] font-bold mr-[4px]">حذف شرط</p>
        </Button>
        {!condition?.saved && (
          <Button
            onClick={handleSaveCondition}
            className="h-[48px] w-[calc(50%-8px)] !rounded-[8px] mr-[8px] !border !border-solid !border-success-primary !text-success-primary"
          >
            <ArchiveTick />
            <p className="text-[14px] font-bold mr-[4px]">ذخیره شرط</p>
          </Button>
        )}
      </div>
    </div>
  );
};
export default ConditionItem;
