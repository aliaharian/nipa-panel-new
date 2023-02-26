import { CloseCircle, Copy, HambergerMenu } from "iconsax-react";
import { ReactElement, useEffect, useRef, useState } from "react";
import { FormField } from "../../../app/models/form";
import TextField from "../../form/TextField";
import { Draggable } from "react-drag-reorder";
import { Close } from "@mui/icons-material";

type FormContentProps = {
  setFormElements: (formElements: any) => void;
  formElements: FormField[];
};

const FormContent = ({ formElements, setFormElements }: FormContentProps) => {
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
      default:
        return <p>not defined</p>;
    }
  };
  const fieldActions = (element: FormField) => {
    return (
      <div className="flex opacity-0 pointer-events-none	group-hover:pointer-events-auto	 group-hover:opacity-100 transition-all ">
        <div
          onClick={() => handleCopyItem(element)}
          className="cursor-pointer mr-2 w-[30px] h-[30px] rounded-full border border-error-primary flex items-center justify-center"
        >
          <Close className="w-[16px] h-[16px] text-error-primary" />
        </div>
        <div
          onClick={() => handleDeleteItem(element)}
          className="cursor-pointer mr-2 w-[30px] h-[30px] rounded-full border border-success-primary flex items-center justify-center"
        >
          <Copy className="w-[16px] h-[16px] text-success-primary" />
        </div>
      </div>
    );
  };

  const handleCopyItem = (element: FormField) => {};
  const handleDeleteItem = (element: FormField) => {
    let tmp = [...formElements];
    const index = tmp.indexOf
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
    <div className="px-4 py-6 draggable">
      {formElements.map((element, index) => {
        return (
          <div
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
            className="flex"
          >
            <div className="ml-3 cursor-move">
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
