import { ReactElement } from "react";
import { FormField } from "../models/form";
import TextField from "components/form/TextField";
import TextArea from "components/form/TextArea";
import UploadFile from "components/form/UploadFile";
import DropDown from "components/form/Dropdown";
import CheckboxGroup from "components/form/CheckboxGroup";
import * as Yup from "yup";
import UploadGroup from "components/form/UploadGroup";

export const renderElement = (
  element: FormField,
  fieldActions: (element: any) => void = (element: any) => {},
  formik?: any,
  mock?: boolean
): ReactElement => {
  const formikProp = formik
    ? formik
    : {
        handleChange: () => {},
        setFieldValue: () => {},
        values: null,
      };
      // console.log("element",element)
  switch (element.type) {
    case "text":
      return (
        <TextField
          className="group"
          name={element.name}
          label={element.label}
          type="text"
          placeholder={element.placeholder}
          inputActions={() => fieldActions(element)}
          formik={formikProp}
        />
      );
    case "textArea":
      return (
        <TextArea
          className="group"
          name={element.name}
          label={element.label}
          inputActions={() => fieldActions(element)}
          formik={formikProp}
        />
      );
    case "number":
      return (
        <TextField
          className="group"
          name={element.name}
          label={element.label}
          type="number"
          placeholder={element.placeholder}
          inputActions={() => fieldActions(element)}
          formik={formikProp}
        />
      );
    case "uploadFile":
      return (
        // <UploadFile
        //   className="group"
        //   name={element.name}
        //   label={element.label}
        //   imageOnly={element.onlyImage}
        //   placeholder={element.placeholder}
        //   inputActions={() => fieldActions(element)}
        //   formik={formikProp}
        // />
        <UploadGroup
          className="group"
          name={element.name}
          label={element.label}
          placeholder={element.placeholder}
          imageOnly={element.onlyImage}
          formik={formikProp}
          setPending={element.setPending}
          mock={mock || false}
          noBadge={element.noBadge || false}
        />
      );
    case "dropDown":
      return (
        <DropDown
          className="group"
          name={element.name}
          label={element.label}
          options={element.basicDataItems || element.options}
          placeholder={element.placeholder}
          inputActions={() => fieldActions(element)}
          formik={formikProp}
        />
      );
    case "checkbox":
      return (
        <CheckboxGroup
          className="group"
          name={element.name}
          label={element.label}
          options={element.basicDataItems || element.options}
          placeholder={element.placeholder}
          inputActions={() => fieldActions(element)}
          formik={formikProp}
        />
      );
    default:
      return <p>not defined</p>;
  }
};

export const renderFormInitialValues = (elements: FormField[]) => {
  let res: any = {};
  elements.map((element) => {
    switch (element.type) {
      case "text":
      case "textArea":
        res[element.name] = element.answer || "";
        break;
      case "uploadFile":
      case "dropDown":
        res[element.name] = element.answer || null;
        break;
      case "number":
        res[element.name] = element.answer || 0;
        break;
      case "checkbox":
        res[element.name] = element.answer || [];
        break;
    }
  });
  return res;
};

export const renderFormValidation = (
  elements: FormField[],
  conditions: any[],
  formik: any
) => {
  let res: any = {};
  elements.map((element) => {
    const cond = conditions.find(
      (x) => x.relational_form_field_id == element.id
    );
    let showItem = true;
    if (cond) {
      //check conditions
      const mainField = elements.find((x) => x.id == cond.form_field_id);
      let opt;
      if (mainField) {
        if (mainField.basic_data_id) {
          opt = mainField?.basicDataItems?.find(
            (x) => x.server_id == cond.form_field_option_id
          );
        } else {
          opt = mainField?.options?.find(
            (x) => x.server_id == cond.form_field_option_id
          );
        }
      }
      if (mainField && opt) {
        if (cond.operation == 1) {
          if (
            formik.values[mainField.name] === opt.value ||
            formik.values[mainField.name]?.indexOf(opt.value) > -1
          ) {
            showItem = true;
          } else {
            showItem = false;
          }
        } else {
          if (
            !(
              formik.values[mainField.name] === opt.value ||
              formik.values[mainField.name]?.indexOf(opt.value) > -1
            )
          ) {
            showItem = true;
          } else {
            showItem = false;
          }
        }
      }
      // console.log("main", mainField);
    }

    if (showItem) {
      switch (element.type) {
        case "text":
        case "textArea":
          res[element.name] = element.required
            ? Yup.string().required("این فیلد اجباری است")
            : Yup.string();
          break;
        case "uploadFile":
          if (element.required) {
            res[element.name] = Yup.string()
              .nullable()
              .required("این فیلد اجباری است");
          }
          break;
        case "dropDown":
          // if (element.required) {
          res[element.name] = Yup.string()
            .nullable()
            .required("این فیلد اجباری است");
          // }
          break;
        case "number":
          res[element.name] = element.required
            ? Yup.number().required("این فیلد اجباری است")
            : Yup.number();
          break;
        case "checkbox":
          res[element.name] = element.required
            ? Yup.array()
                .of(Yup.string())
                .min(1, "این فیلد اجباری است")
                .required("این فیلد اجباری است")
            : Yup.array().of(Yup.string()).nullable();
          // res[element.name] = [];
          break;
      }
    }
  });

  return res;
};
