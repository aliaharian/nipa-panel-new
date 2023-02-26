import React, { ReactElement } from "react";
import Tabs from "../tabs/Tabs";
import FormBuilderEditElementTab from "./editElement/FormBuilderEditElementTab";
import FormBuilderElementsTab from "./elements/FormBuilderElementsTab";
import FormBuilderConditionsTab from "./formConditions/FormBuilderConditionsTab";

type FormBuilderSidebarProps = {
  handleChangeTab: (value: string) => void;
  selectedTab: string;
  addElement(element: any): void;
};
const FormBuilderSidebar = ({
  handleChangeTab,
  selectedTab,
  addElement
}: FormBuilderSidebarProps) => {
  const _renderTab = (): ReactElement => {
    switch (selectedTab) {
      case "elements":
        return <FormBuilderElementsTab addElement={addElement}/>;
      case "editElement":
        return <FormBuilderEditElementTab />;
      case "formConditions":
        return <FormBuilderConditionsTab />;
      default:
        return <FormBuilderElementsTab addElement={addElement}/>;
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
