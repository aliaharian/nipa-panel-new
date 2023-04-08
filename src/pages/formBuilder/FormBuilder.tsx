import { Add, Setting4 } from "iconsax-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FormField, FormOption } from "../../app/models/form";
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
    let tmp: FormField = {
      name: "input" + element + (lastId + 1).toString(),
      placeholder: element + (lastId + 1).toString(),
      label: "عنوان فیلد",
      type: element,
      required: false,
      id: lastId + 1,
    };
    if (element === "dropDown" || element === "checkbox") {
      tmp = { ...tmp, options: [] };
    }
    setFormElements([...formElements, tmp]);
    setLastId(lastId + 1);
  };
  const handleSelectField = (element?: FormField) => {
    console.log(element);
    if (!element) {
      console.log("null heah?");
      setSelectedField(undefined);
      handleChangeTab("elements");
    } else {
      setSelectedField(element);
      handleChangeTab("editElement");
    }
  };
  const handleUpdateField = (field: FormField) => {
    let tmp = [...formElements];
    let foundIndex = tmp.findIndex((x) => x.id == field.id);
    if (foundIndex !== -1) {
      tmp[foundIndex] = { ...field };
      setFormElements([...tmp]);
      setSelectedField({ ...field });
    }
  };
  const handleAddOption = (id: number, option: FormOption) => {
    let tmp = [...formElements];
    let foundIndex = tmp.findIndex((x) => x.id == id);
    if (foundIndex !== -1 && tmp[foundIndex].options) {
      const options = tmp[foundIndex].options || [];
      tmp[foundIndex] = {
        ...tmp[foundIndex],
        options: [...options, option],
      };
      setFormElements([...tmp]);
      setSelectedField({ ...tmp[foundIndex] });
    }
  };
  const handleUpdateOption = (
    id: number,
    option: FormOption,
    index: number
  ) => {
    let tmp = [...formElements];
    let foundIndex = tmp.findIndex((x) => x.id == id);
    if (foundIndex !== -1 && tmp[foundIndex].options) {
      let options = tmp[foundIndex].options || [];
      options[index] = option;
      tmp[foundIndex] = {
        ...tmp[foundIndex],
        options: [...options],
      };
      setFormElements([...tmp]);
      setSelectedField({ ...tmp[foundIndex] });
    }
  };

  const handleDeleteOption = (id: number, option: string) => {
    let tmp = [...formElements];
    let foundIndex = tmp.findIndex((x) => x.id == id);
    if (foundIndex !== -1 && tmp[foundIndex].options) {
      console.log("index is", foundIndex);
      let options = [...(tmp[foundIndex].options || [])];
      let optionIndex = options.findIndex((x) => x.value == option);
      if (optionIndex > -1) {
        console.log("option index is ", optionIndex);
        options.splice(optionIndex, 1);
        tmp[foundIndex] = {
          ...tmp[foundIndex],
          options: [...options],
        };

        setFormElements([...tmp]);
        setSelectedField({ ...tmp[foundIndex] });
      }
    }
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
          handleAddOption={handleAddOption}
          handleUpdateOption={handleUpdateOption}
          handleDeleteOption={handleDeleteOption}
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
