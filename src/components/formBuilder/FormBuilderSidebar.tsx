import React, { ReactElement } from "react";
import { Condition, FormField, FormOption } from "../../app/models/form";
import Tabs from "../tabs/Tabs";
import FormBuilderEditElementTab from "./editElement/FormBuilderEditElementTab";
import FormBuilderElementsTab from "./elements/FormBuilderElementsTab";
import FormBuilderConditionsTab from "./formConditions/FormBuilderConditionsTab";

type FormBuilderSidebarProps = {
  handleChangeTab: (value: string) => void;
  selectedTab: string;
  addElement(element: any, id: number): void;
  selectedField?: FormField;
  handleUpdateField: (field: FormField) => void;
  handleAddOption: (id: number, option: FormOption) => void;
  handleUpdateOption: (id: number, option: FormOption, index: number) => void;
  handleDeleteOption: (
    id: number,
    option: string,
    server_id?: number | null
  ) => void;
  setOnlyImage: (onlyImage: boolean) => void;
  setRequired: (required: boolean) => void;
  formElements: FormField[];
  saveConditions: (conditions: Condition[]) => void;
  savedConditions: Condition[];
  setFromBasicData: (required: boolean) => void;
  relatedFields?: FormField[];
};
const FormBuilderSidebar = ({
  handleChangeTab,
  selectedTab,
  addElement,
  selectedField,
  handleUpdateField,
  handleAddOption,
  handleDeleteOption,
  handleUpdateOption,
  setOnlyImage,
  setRequired,
  formElements,
  saveConditions,
  savedConditions,
  setFromBasicData,
  relatedFields,
}: FormBuilderSidebarProps) => {
  const handleSaveConditions = (conditions: Condition[]) => {
    saveConditions(conditions);
  };

  const _renderTab = (): ReactElement => {
    switch (selectedTab) {
      case "elements":
        return (
          <FormBuilderElementsTab
            addElement={addElement}
            relatedFields={relatedFields}
          />
        );
      case "editElement":
        return (
          <FormBuilderEditElementTab
            handleUpdateField={handleUpdateField}
            selectedField={selectedField}
            handleAddOption={handleAddOption}
            handleUpdateOption={handleUpdateOption}
            handleDeleteOption={handleDeleteOption}
            onlyImage={selectedField?.onlyImage || false}
            setOnlyImage={setOnlyImage}
            required={selectedField?.required || false}
            setRequired={setRequired}
            fromBasicData={selectedField?.basic_data_id ? true : false}
            setFromBasicData={setFromBasicData}
          />
        );
      case "formConditions":
        return (
          <FormBuilderConditionsTab
            conditionalfields={formElements.filter((x) => x.options)}
            formElements={formElements}
            saveConditions={handleSaveConditions}
            savedConditions={savedConditions}
          />
        );
      default:
        return <FormBuilderElementsTab addElement={addElement} />;
    }
  };
  return (
    <div className="min-h-[800px] basis-1/4 bg-white pt-[20px] ml-[10px] border border-text-300">
      <Tabs
        handleChange={handleChangeTab}
        items={[
          {
            label: "المان ها",
            value: "elements",
          },
          {
            label: "ویرایش المان",
            value: "editElement",
          },
          {
            label: "شرط های فرم",
            value: "formConditions",
          },
        ]}
        value={selectedTab}
      />
      {_renderTab()}
    </div>
  );
};

export default FormBuilderSidebar;
