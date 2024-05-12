import { Add, Trash } from "iconsax-react";
import SideDialog from "../../sideDialog/SideDialog";
import { useFormik } from "formik";
import Button from "../../button/Button";
import { productStep, role } from "app/models/redux-models";
import { useTranslation } from "react-i18next";
import DropDown from "components/form/Dropdown";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { useEffect, useState } from "react";
import { FormOption } from "@/app/models/form";
import * as Yup from "yup";
import TextField from "components/form/TextField";
import { Divider } from "@mui/material";
import Alert from "components/alert/Alert";
import {
  useAddProductStepConditions,
  useUpdateProductStep,
} from "app/queries/productSteps/hooks";

export type initialValues = {
  selectedRoles: role[];
};

type AddDropdownItemDialogProps = {
  open: boolean;
  handleClose?: () => void;
  step: productStep | null;
  otherSteps: productStep[];
};
type IInitialValues = {
  condField?: string | null;
  condFieldValue?: string | null;
  relationField?: string | null;
  defaultNextStep: string | null;
  stepName: string;
};
const ManageStepConditionsDialog = ({
  open,
  handleClose,
  step,
  otherSteps,
}: AddDropdownItemDialogProps) => {
  const { t } = useTranslation();
  const [initialValues] = useState<IInitialValues>({
    condField: null,
    condFieldValue: null,
    relationField: null,
    defaultNextStep: null,
    stepName: step?.step_name || "",
  });
  const validationSchema = Yup.object().shape({
    stepName: Yup.string().required(
      t("name.required", { ns: "validations" }) || ""
    ),
    defaultNextStep: Yup.mixed().required(
      t("name.required", { ns: "validations" }) || ""
    ),
  });
  const { mutate: updateProductStep } = useUpdateProductStep();
  const { mutate: addProductStepConditions } = useAddProductStepConditions();
  const formik = useFormik<IInitialValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (step && values.defaultNextStep) {
        setLoading(true);
        updateProductStep(
          {
            stepId: step.id,
            stepName: values.stepName,
            defaultNextStep: values.defaultNextStep,
          },
          {
            onSuccess: () => {
              //
              if (
                values.condField &&
                values.condFieldValue &&
                values.relationField
              ) {
                addProductStepConditions(
                  {
                    stepId: step.id,
                    fieldId: values.condField,
                    optionId: selectedFieldValue.map((opt) => opt.value),
                    nextStepId: values.relationField,
                  },
                  {
                    onSuccess: () => {
                      SnackbarUtils.success("مرحله با موفقیت ویرایش شد");
                      setLoading(false);
                      formik.resetForm();
                      handleClose?.();
                    },
                    onError: (e) => {
                      SnackbarUtils.error("مرحله ویرایش شد اما شرط ثبت نشد");
                      setLoading(false);
                    },
                  }
                );
              } else {
                SnackbarUtils.success("مرحله با موفقیت ویرایش شد");
                setLoading(false);
                formik.resetForm();
                handleClose?.();
              }
            },
            onError: () => {
              SnackbarUtils.error("خطا در ویرایش مرحله");
              setLoading(false);
            },
          }
        );
      }
    },
  });

  const conditionalfields = step?.forms[0]?.optionalFields;
  const [selectedField, setSelectedField] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFieldValue, setSelectedFieldValue] = useState<FormOption[]>(
    []
  );
  const handleSubmitForm = () => {
    formik.submitForm();
  };

  useEffect(() => {
    if (step) {
      formik.setValues({
        stepName: step.step_name,
        defaultNextStep: step.next_step_id ? step.next_step_id + "" : null,
        condField: step.conditions?.[0]?.form_field_id.toString() || null,
        relationField:
          step.conditions?.[0]?.next_product_step_id.toString() || null,
      });

      const optTmp: FormOption[] = [];
      step.conditions?.map((condition) => {
        let option = conditionalfields
          ?.find((x: any) => x.id == condition.form_field_id)
          ?.options?.find(
            (x: any) =>
              x.id === condition.form_field_option_id ||
              x.id === condition.basic_data_item_id
          );
        console.log("option", option);
        if (option) optTmp.push({ ...option, value: option.id });
      });
      console.log("optTmp", optTmp);

      setSelectedFieldValue(
        optTmp.map((item) => ({ value: item.value, label: item.name }))
      );
      // setSelectedFieldValue([{value:2,label:"ok"}])
    }
  }, [step]);
  const _handleClose = () => {
    handleClose?.();
  };

  const handleDeleteItem = (item: any) => {
    let tmp = [...selectedFieldValue];
    let index = tmp?.findIndex(
      (x: any) => x.value.toString() === item.value.toString()
    );
    if (index > -1) {
      let newSelectedFieldValue = selectedFieldValue;
      newSelectedFieldValue.splice(index, 1);
      setSelectedFieldValue([...newSelectedFieldValue]);
    }
  };

  useEffect(() => {
    if (formik.values["condField"]) {
      // setSelectedFieldValue([]);
      const selectedFieldTmp = conditionalfields?.find(
        (x: any) => x.id.toString() === formik.values["condField"]
      );
      setSelectedField(selectedFieldTmp);
    }
  }, [formik.values["condField"]]);
  useEffect(() => {
    if (formik.values["condFieldValue"]) {
      const tmp = [
        ...selectedFieldValue.map((item) => item.value),
        formik.values["condFieldValue"],
      ];
      const unique = [...new Set(tmp)];
      setSelectedFieldValue(
        unique.map((item) => {
          return {
            value: item,
            label:
              selectedField?.options?.find(
                (x: any) => x.id.toString() === item.toString()
              )?.name ||
              selectedField?.options?.find(
                (x: any) => x.id.toString() === item.toString()
              )?.label ||
              "",
          };
        })
      );
    }
  }, [formik.values["condFieldValue"]]);

  console.log("selected", selectedFieldValue);
  return (
    <SideDialog
      headerText={t("addConditionFor") + " " + (step?.step_name || "")}
      headerIcon={<Add />}
      open={open}
      handleClose={_handleClose}
    >
      <SideDialog.Content>
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="p-7">
            <div className="w-full flex flex-col items-start justify-start px-4">
              <TextField
                className="group mb-[30px]"
                name={"stepName"}
                label={"نام مرحله"}
                type="text"
                placeholder={"وارد کنید"}
                formik={formik}
              />
              <DropDown
                className="group mb-[30px]"
                name={"defaultNextStep"}
                label={"مرحله بعد پیش فرض"}
                options={
                  otherSteps &&
                  otherSteps.map((field) => {
                    return {
                      label: <p>{field.step_name}</p>,
                      value: field.id.toString(),
                    };
                  })
                }
                placeholder={"انتخاب کنید"}
                formik={formik}
              />
              <p className="text-primary-main font-bold">
                تعیین شرط برای مرحله بعد
              </p>
              <Divider className="!bg-priamry-main w-full !my-4" />
              {conditionalfields?.length > 0 ? (
                <>
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
                    formik={formik}
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
                          label: <p>{option.label || option.name}</p>,
                          value: option.id,
                        };
                      })
                    }
                    placeholder={
                      selectedField
                        ? "انتخاب کنید"
                        : "ابتدا فیلد را انتخاب کنید"
                    }
                    formik={formik}
                  />
                  {selectedFieldValue.length > 0 && (
                    <div className="flex items-center justify-start w-full mb-[30px]">
                      {selectedFieldValue.map((item, index) => {
                        return (
                          <div
                            key={Math.random() * 10000}
                            className="w-[97px] h-[48px] rounded-[24px] border border-text-400 flex items-center justify-between pe-2 ps-4 me-2"
                          >
                            <p className="text-[14px]">
                              {item.label || item.name}
                            </p>
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
                      selectedField
                        ? "انتخاب کنید"
                        : "ابتدا فیلد را انتخاب کنید"
                    }
                    formik={formik}
                  />
                </>
              ) : (
                <Alert
                  text="
                فرم این مرحله قابلیت شرط گذاری ندارد
                "
                  type="error"
                  title=""
                />
              )}
            </div>
          </div>
        </form>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="mt-8 px-7 flex justify-between items-center py-[25px] border border-text-300">
          <div className="w-[126px]">
            <Button
              loading={loading}
              disabled={loading}
              text="انصراف"
              onClick={_handleClose}
              gray
            />
          </div>
          <div className="w-[182px]">
            <Button
              loading={loading}
              disabled={loading}
              text={t("saveSetting")}
              onClick={handleSubmitForm}
            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default ManageStepConditionsDialog;
