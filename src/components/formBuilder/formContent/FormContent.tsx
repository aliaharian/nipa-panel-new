import { Copy, HambergerMenu } from "iconsax-react";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FormField } from "../../../app/models/form";
import TextField from "../../form/TextField";
import { Close } from "@mui/icons-material";
import DropDown from "../../form/Dropdown";
import Checkbox from "../../form/Checkbox";
import CheckboxGroup from "../../form/CheckboxGroup";
import TextArea from "../../form/TextArea";
import UploadFile from "../../form/UploadFile";

type FormContentProps = {
  setFormElements: (formElements: any) => void;
  formElements: FormField[];
  handleSelectField: (formElement?: FormField) => void;
  lastId: number;
  setLastId: (lastId: number) => void;
  selectedField?: FormField;
};

const FormContent = ({
  formElements,
  setFormElements,
  handleSelectField,
  lastId,
  setLastId,
  selectedField,
}: FormContentProps) => {
  const renderElement = (element: FormField): ReactElement => {
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
            type="number"
            options={element.options}
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
            options={element.options}
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
  const fieldActions = (element: FormField) => {
    return (
      <div className="flex opacity-0 pointer-events-none	group-hover:pointer-events-auto	 group-hover:opacity-100 transition-all ">
        <div
          onClick={() => handleDeleteItem(element)}
          id="deleteItem"
          className="cursor-pointer mr-2 w-[30px] h-[30px] rounded-full border border-error-primary flex items-center justify-center"
        >
          <Close className="w-[16px] h-[16px] text-error-primary pointer-events-none" />
        </div>
        <div
          onClick={() => handleCopyItem(element)}
          className="cursor-pointer mr-2 w-[30px] h-[30px] rounded-full border border-success-primary flex items-center justify-center"
        >
          <Copy className="w-[16px] h-[16px] text-success-primary" />
        </div>
      </div>
    );
  };

  const handleCopyItem = (element: FormField) => {
    //copy element add add it just after the original element in the array
    let tmp = [...formElements];
    const index = tmp.indexOf(element);
    console.log("item", index);

    if (index > -1) {
      tmp.splice(index + 1, 0, {
        ...element,
        id: lastId + 1,
        name: element.name + (lastId + 1).toString(),
        placeholder: element.placeholder + (lastId + 1).toString(),
      });
      setFormElements(tmp);
      setLastId(lastId + 1);
    }
  };
  const handleDeleteItem = (element: FormField) => {
    let tmp = [...formElements];
    const index = tmp.indexOf(element);
    console.log("item", index);

    if (index > -1) {
      tmp.splice(index, 1);
      setFormElements(tmp);
      if (element.id == selectedField?.id) {
        // setTimeout(() => {
        handleSelectField(undefined);
        // }, 1);
      }
    }
  };

  const dragItem = useRef<any>();
  const dragOverItem = useRef<any>();

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
  };

  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
  };

  const drop = (e: any) => {
    const copyListItems = [...formElements];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setFormElements(copyListItems);
  };

  //   console.log('formElements', formElements)
  return (
    <div className="px-4 py-6 draggable grid grid-cols-1 gap-9">
      {formElements.map((element, index) => {
        return (
          <div
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            onClick={(e: any) => {
              e.target.id !== "deleteItem" && handleSelectField(element);
            }}
            draggable
            className="flex"
          >
            <div
              className={`ml-3 cursor-move ${
                selectedField?.id === element.id ? "text-primary-main" : ""
              }`}
            >
              <HambergerMenu />
            </div>
            {renderElement(element)}
          </div>
        );
      })}
    </div>
  );
};
export default FormContent;
