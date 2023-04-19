import React, { ReactElement } from "react";
import { FormField, FormOption } from "../../app/models/form";
import Tabs from "../tabs/Tabs";
import FormBuilderEditElementTab from "./editElement/FormBuilderEditElementTab";
import FormBuilderElementsTab from "./elements/FormBuilderElementsTab";
import FormBuilderConditionsTab from "./formConditions/FormBuilderConditionsTab";

type FormBuilderSidebarProps = {
  handleChangeTab: (value: string) => void;
  selectedTab: string;
  addElement(element: any): void;
  selectedField?: FormField;
  handleUpdateField: (field: FormField) => void;
  handleAddOption: (id: number, option: FormOption) => void;
  handleUpdateOption: (id: number, option: FormOption, index: number) => void;
  handleDeleteOption: (id: number, option: string) => void;
  setOnlyImage: (onlyImage: boolean) => void;
  setRequired: (required: boolean) => void;
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
}: FormBuilderSidebarProps) => {
  const _renderTab = (): ReactElement => {
    switch (selectedTab) {
      case "elements":
        return <FormBuilderElementsTab addElement={addElement} />;
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
          />
        );
      case "formConditions":
        return <FormBuilderConditionsTab />;
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
