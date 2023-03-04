import { Add, Setting4 } from "iconsax-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FormField } from "../../app/models/form";
import { setCollapseMenu } from "../../app/redux/app/actions";
import { useAppDispatch } from "../../app/redux/hooks";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Button from "../../components/button/Button";
import FormBuilderSidebar from "../../components/formBuilder/FormBuilderSidebar";
import FormContent from "../../components/formBuilder/formContent/FormContent";
import Tabs from "../../components/tabs/Tabs";

const FormBuilder = () => {
  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(setCollapseMenu(true));
  });
  const [selectedTab, setSelectedTab] = useState<string>("elements");
  const handleChangeTab = (value: string): void => {
    setSelectedTab(value);
  };
  const [formElements, setFormElements] = useState<FormField[]>([]);
  const [selectedField, setSelectedField] = useState<FormField>();

  const [lastId, setLastId] = useState<number>(0);
  const handleAddElement = (element: string) => {
    const tmp = {
      name: "input" + element + (lastId + 1).toString(),
      placeholder: element + (lastId + 1).toString(),
      label: "عنوان فیلد",
      type: element,
      required: false,
      order: 0,
      id: lastId + 1,
    };
    setFormElements([...formElements, tmp]);
    setLastId(lastId + 1);
  };
  const handleSelectField = (element: FormField) => {
    console.log(element);
    setSelectedField(element);
  };
  const handleUpdateField = (field: FormField) => {
    console.log('ij',field)
    let tmp = [...formElements];
    let foundIndex = tmp.findIndex((x) => x.id == field.id);
    tmp[foundIndex] = { ...field };
    setFormElements([...tmp]);
    setSelectedField({...field});
  };
  return (
    <div className="w-full h-full">
      <Breadcrumb
        actions={
          <>
            {" "}
            <div className="w-[186px]">
              <Button
                icon={<Setting4 />}
                text="فیلتر پیشرفته"
                onClick={() => {}}
                simple
              />
            </div>
            <div className="w-[186px] mr-[16px]">
              <Button icon={<Add />} text="ثبت سفارش جدید" href="submit" />
            </div>
          </>
        }
        title="فرم ساز"
      />
      <div className="w-full flex">
        <FormBuilderSidebar
          handleChangeTab={handleChangeTab}
          selectedTab={selectedTab}
          addElement={handleAddElement}
          selectedField={selectedField}
          handleUpdateField={handleUpdateField}
        />
        <div className="basis-3/4 bg-white mr-[10px]">
          <FormContent
            lastId={lastId}
            setLastId={setLastId}
            formElements={formElements}
            selectedField={selectedField}
            setFormElements={setFormElements}
            handleSelectField={handleSelectField}
          />
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
