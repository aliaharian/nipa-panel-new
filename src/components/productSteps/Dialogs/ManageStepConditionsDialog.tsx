import { Add, Trash } from "iconsax-react";
import SideDialog from "../../sideDialog/SideDialog";
import { useFormik } from "formik";
import Button from "../../button/Button";
import { productStep, role } from "app/models/redux-models";
import { useTranslation } from "react-i18next";
import DropDown from "components/form/Dropdown";
import SnackbarUtils from "app/utils/SnackbarUtils";
import productService from "app/redux/products/service";
import productSlice from "app/redux/products/slice";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useEffect, useState } from "react";
import { FormOption, selectedFieldType } from "@/app/models/form";

export type initialValues = {
  selectedRoles: role[];
};

type AddDropdownItemDialogProps = {
  open: boolean;
  handleClose?: () => void;
  step: productStep | null;
  otherSteps: productStep[];
};
const ManageStepConditionsDialog = ({
  open,
  handleClose,
  step,
  otherSteps,
}: AddDropdownItemDialogProps) => {
  const { t } = useTranslation();
  const productSteps = useAppSelector((state) => state.products.productSteps);
  const Dispatch = useAppDispatch();
  const conditionalfields = step?.forms[0].optionalFields;
  const [selectedField, setSelectedField] = useState<any>();
  const [selectedFieldValue, setSelectedFieldValue] = useState<FormOption[]>(
    []
  );
  const [relationField, setRelationField] = useState<selectedFieldType>();
  const handleSubmitForm = () => {
    // formik.submitForm();
    productService.addProductConditions({
      stepId: step?.id,
      fieldId: selectedField?.value,
      optionId: selectedFieldValue.map((opt) => opt.id),
      nextStepId: relationField?.value,
    });

    handleClose?.();
    SnackbarUtils.success(t("successSaveProductStepconds"));

  };

  console.log("step", selectedField);
  useEffect(() => {
    if (step) {
      setSelectedField({
        name: "condField",
        value: step.conditions?.[0]?.form_field_id.toString() || "0",
        options: conditionalfields.find(
          (x: any) =>
            x.id.toString() == step.conditions?.[0]?.form_field_id.toString()
        )?.options,
      });

      setRelationField({
        label: step.conditions?.[0]?.next_product_step_id.toString() || "0",
        value: step.conditions?.[0]?.next_product_step_id.toString() || "0",
      });

      let optTmp: FormOption[] = [];
      step.conditions?.map((condition) => {
        let option = conditionalfields
          .find((x: any) => x.id == condition.form_field_id)
          ?.options.find((x: any) => x.id == condition.form_field_option_id);
        if (option) optTmp.push(option);
      });
      setSelectedFieldValue([...optTmp]);
    }
  }, [step]);
  const _handleClose = () => {
    handleClose?.();
    // formik.setFieldValue("selectedRoles", []);
  };

  const handleDeleteItem = (item: any) => {
    console.log("item", item);
    let tmp = [...selectedFieldValue];
    let index = tmp.findIndex((x: any) => x.option == item.option);
    if (index > -1) {
      console.log("index", index);
      console.log("selectedFieldValue", tmp);
      let newSelectedFieldValue = selectedFieldValue;
      newSelectedFieldValue.splice(index, 1);
      setSelectedFieldValue([...newSelectedFieldValue]);
    }
  };

  const handleChangeField = (e: any) => {
    let selectedField = conditionalfields.find(
      (x: any) => x.id.toString() == e.target.value
    );

    setSelectedField({ ...e.target, options: selectedField?.options });

    setSelectedFieldValue([]);
  };
  const handleChangeNextStep = (e: any) => {
    const field = otherSteps.find((x) => x.id.toString() == e.target.value);
    if (field) {
      setRelationField({ label: field.step_name, value: field.id.toString() });
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
    }
  };

  return (
    <SideDialog
      headerText={t("addConditionFor") + " " + (step?.step_name || "")}
      headerIcon={<Add />}
      open={open}
      handleClose={_handleClose}
    >
      <SideDialog.Content>
        <div className="p-7">
          <div className="w-full flex flex-col items-start justify-start px-4">
            <DropDown
              className="group mb-[30px]"
              name={"condField"}
              label={"فیلد"}
              options={
                conditionalfields &&
                conditionalfields.map((field: any) => {
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
                    label: <p>{option.label}</p>,
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
                      key={Math.random() * 10000}
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
              name={"relationField"}
              label={"مرحله بعدی برابر"}
              options={
                otherSteps &&
                otherSteps.map((field) => {
                  return {
                    label: <p>{field.step_name}</p>,
                    value: field.id.toString(),
                  };
                })
              }
              placeholder={
                selectedField ? "انتخاب کنید" : "ابتدا فیلد را انتخاب کنید"
              }
              formik={{
                handleChange: handleChangeNextStep,
                values: {
                  relationField: relationField?.value,
                },
              }}
            />
          </div>
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="mt-20 px-7 flex justify-between items-center py-[25px] border border-text-300">
          <div className="w-[126px]">
            <Button text="انصراف" onClick={_handleClose} gray />
          </div>
          <div className="w-[182px]">
            <Button text={t("saveSetting")} onClick={handleSubmitForm} />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default ManageStepConditionsDialog;
