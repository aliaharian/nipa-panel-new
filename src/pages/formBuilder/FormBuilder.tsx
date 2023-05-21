import { Add, ArchiveTick, Eye, Setting4 } from "iconsax-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Condition, FormField, FormOption } from "../../app/models/form";
import { setCollapseMenu } from "../../app/redux/application/actions";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import SnackbarUtils from "../../app/utils/SnackbarUtils";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Button from "../../components/button/Button";
import FormBuilderSidebar from "../../components/formBuilder/FormBuilderSidebar";
import FormContent from "../../components/formBuilder/formContent/FormContent";
import Tabs from "../../components/tabs/Tabs";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProductStepInfo } from "app/redux/products/actions";
import { Save } from "@mui/icons-material";

const FormBuilder = () => {
  const Dispatch = useAppDispatch();
  let { code, step_id } = useParams();

  useEffect(() => {
    Dispatch(setCollapseMenu(true));
  });
  const [selectedTab, setSelectedTab] = useState<string>("elements");
  const handleChangeTab = (value: string): void => {
    setSelectedTab(value);
  };
  const [formElements, setFormElements] = useState<FormField[]>([]);
  const [selectedField, setSelectedField] = useState<FormField>();
  const [savedConditions, setSavedConditions] = useState<Condition[]>([]);
  const productStepInfo = useAppSelector(
    (state) => state.products.productStepInfo
  );
  const [lastId, setLastId] = useState<number>(0);
  const { t } = useTranslation(["common", "validations"]);
  const Navigate = useNavigate();
  console.log("cond", savedConditions);
  useEffect(() => {
    Dispatch(getProductStepInfo(parseInt(step_id || "0")));
  }, []);
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
    if (element === "uploadFile") {
      tmp = { ...tmp, onlyImage: false };
    }
    setFormElements([...formElements, tmp]);
    setLastId(lastId + 1);
  };
  const handleSelectField = (element?: FormField) => {
    if (!element) {
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
        options: [
          ...options,
          { ...option, id: Math.floor(Math.random() * 100) },
        ],
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
      let options = [...(tmp[foundIndex].options || [])];
      let optionIndex = options.findIndex((x) => x.value == option);
      if (optionIndex > -1) {
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

  const setOnlyImage = (value: boolean) => {
    let tmp = [...formElements];

    let foundIndex = tmp.findIndex((x) => x.id == selectedField?.id);

    if (foundIndex > -1) {
      tmp[foundIndex] = {
        ...tmp[foundIndex],
        onlyImage: value,
      };
      setFormElements([...tmp]);
      setSelectedField({ ...tmp[foundIndex] });
    }
  };

  const setRequired = (value: boolean) => {
    let tmp = [...formElements];

    let foundIndex = tmp.findIndex((x) => x.id == selectedField?.id);

    if (foundIndex > -1) {
      tmp[foundIndex] = {
        ...tmp[foundIndex],
        required: value,
      };
      setFormElements([...tmp]);
      setSelectedField({ ...tmp[foundIndex] });
    }
  };
  const saveConditions = (conditions: Condition[]) => {
    setSavedConditions([...conditions.filter((x) => x.saved)]);
    console.log(conditions.filter((x) => x.saved));
  };
  const handleDeleteItem = (element: FormField) => {
    //add alert for delete
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
  const handleBack = () => {
    Navigate(`/products/${code}/steps`);
  };
  return (
    <div className="w-full h-full">
      <Breadcrumb
        handleBack={handleBack}
        actions={
          <>
            {" "}
            <div className="w-[186px]">
              <Button
                icon={<Eye />}
                text={t("viewForm")}
                onClick={() => {}}
                gray
              />
            </div>
            <div className="w-[138px] mr-[16px]">
              <Button icon={<ArchiveTick />} text={t("saveForm")} onClick={()=>{}} />
            </div>
          </>
        }
        title={`${t("formBuilder")} ${t("step")} ${
          productStepInfo?.step_name
        } ${t("product")} ${productStepInfo?.product?.name}`}
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
          setOnlyImage={setOnlyImage}
          setRequired={setRequired}
          formElements={formElements}
          saveConditions={saveConditions}
          savedConditions={savedConditions}
        />
        <div className="basis-3/4 bg-white mr-[10px]">
          <FormContent
            lastId={lastId}
            setLastId={setLastId}
            formElements={formElements}
            selectedField={selectedField}
            setFormElements={setFormElements}
            handleSelectField={handleSelectField}
            deleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
