import { ReactElement } from "react";
import { FormField } from "../models/form";
import TextField from "components/form/TextField";
import TextArea from "components/form/TextArea";
import UploadFile from "components/form/UploadFile";
import DropDown from "components/form/Dropdown";
import CheckboxGroup from "components/form/CheckboxGroup";

export const renderElement = (
  element: FormField,
  fieldActions: (element: any) => void = (element: any) => {}
): ReactElement => {
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
          formik={{
            handleChange: () => {},
          }}
        />
      );
    case "textArea":
      return (
        <TextArea
          className="group"
          name={element.name}
          label={element.label}
          inputActions={() => fieldActions(element)}
          formik={{
            handleChange: () => {},
          }}
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
          formik={{
            handleChange: () => {},
          }}
        />
      );
    case "uploadFile":
      return (
        <UploadFile
          className="group"
          name={element.name}
          label={element.label}
          imageOnly={element.onlyImage}
          placeholder={element.placeholder}
          inputActions={() => fieldActions(element)}
          formik={{
            handleChange: () => {},
          }}
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
          formik={{
            handleChange: () => {},
          }}
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
          formik={{
            handleChange: () => {},
          }}
        />
      );
    default:
      return <p>not defined</p>;
  }
};
