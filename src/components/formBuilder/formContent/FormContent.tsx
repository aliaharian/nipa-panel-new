import { Copy, HambergerMenu, Information } from "iconsax-react";
import { useRef } from "react";
import { FormField } from "../../../app/models/form";
import { Close } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { renderElement } from "app/utils/FormActions";

type FormContentProps = {
  setFormElements: (formElements: any) => void;
  formElements: FormField[];
  handleSelectField: (formElement?: FormField) => void;
  lastId: number;
  setLastId: (lastId: number) => void;
  selectedField?: FormField;
  deleteItem: (item: FormField) => void;
  saveFormLoading: boolean;
};

const FormContent = ({
  formElements,
  setFormElements,
  handleSelectField,
  lastId,
  setLastId,
  selectedField,
  deleteItem,
  saveFormLoading,
}: FormContentProps) => {
  const { t } = useTranslation(["common", "validations"]);
  console.log("el", formElements);

  const fieldActions = (element: FormField) => {
    return (
      <div className="flex">
        <div className="flex opacity-0 pointer-events-none	group-hover:pointer-events-auto	 group-hover:opacity-100 transition-all ">
          {(!element.readOnly || element.fromRelatedFields) && (
            <div
              onClick={() => handleDeleteItem(element)}
              id="deleteItem"
              className="cursor-pointer ms-2 w-[30px] h-[30px] rounded-full border border-error-primary flex items-center justify-center"
            >
              <Close className="w-[16px] h-[16px] text-error-primary pointer-events-none" />
            </div>
          )}
          {!element.fromRelatedFields && (
            <div
              onClick={() => handleCopyItem(element)}
              className="cursor-pointer ms-2 w-[30px] h-[30px] rounded-full border border-success-primary flex items-center justify-center"
            >
              <Copy className="w-[16px] h-[16px] text-success-primary" />
            </div>
          )}
        </div>
        {element.fromRelatedFields && (
          <div className="ms-3 bg-secondary-main flex items-center justify-center px-2 py-0.5 rounded-full text-[11px]">
            {t("fromStep")} {element.form?.step?.step_name}
          </div>
        )}
      </div>
    );
  };

  const handleCopyItem = (element: FormField) => {
    //copy element add add it just after the original element in the array
    let tmp = [...formElements];
    const index = tmp.indexOf(element);
    // console.log("item", index);

    if (index > -1) {
      tmp.splice(index + 1, 0, {
        ...element,
        id: lastId + 1,
        server_id: null,
        label: element.label + " " + t("copy"),
        name: element.name + (lastId + 1).toString(),
        placeholder: element.placeholder + (lastId + 1).toString(),
        readOnly: false,
      });
      setFormElements(tmp);
      setLastId(lastId + 1);
    }
  };
  const handleDeleteItem = (element: FormField) => {
    deleteItem(element);
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
    <div className="px-4 py-6 draggable grid grid-cols-4 gap-y-9 gap-x-4">
      {formElements.length === 0 && !saveFormLoading && (
        <div className="col-span-4 flex flex-col items-center justify-center mt-8">
          <div className="w-[50px] rounded-full h-[50px] bg-primary-main text-white flex items-center justify-center">
            <Information />
          </div>
          <p className="text-gray-400 text-[16px] font-bold mt-4">
            {t("addFieldToStart")}
          </p>
        </div>
      )}
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
            className={`flex lg:col-span-4
            ${element.width == 100 ? "col-span-4" : ""}
            ${element.width == 75 ? "col-span-3" : ""}
            ${element.width == 50 ? "col-span-2" : ""}
            `}
          >
            <div
              className={`me-3 cursor-move ${
                selectedField?.id === element.id ? "text-primary-main" : ""
              }`}
            >
              <HambergerMenu />
            </div>
            {renderElement(element, fieldActions, undefined, true)}
          </div>
        );
      })}
    </div>
  );
};
export default FormContent;
