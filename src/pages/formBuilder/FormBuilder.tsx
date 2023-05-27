import { ArchiveTick, Eye } from "iconsax-react";
import { useEffect, useState } from "react";
import { Condition, FormField, FormOption } from "../../app/models/form";
import { setCollapseMenu } from "../../app/redux/application/actions";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Button from "../../components/button/Button";
import FormBuilderSidebar from "../../components/formBuilder/FormBuilderSidebar";
import FormContent from "../../components/formBuilder/formContent/FormContent";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProductStepInfo } from "app/redux/products/actions";
import formService from "app/redux/forms/service";

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
  const [formId, setFormId] = useState<number>(0);
  const productStepInfo = useAppSelector(
    (state) => state.products.productStepInfo
  );
  const [lastId, setLastId] = useState<number>(0);
  const { t } = useTranslation(["common", "validations"]);
  const Navigate = useNavigate();
  useEffect(() => {
    Dispatch(getProductStepInfo(parseInt(step_id || "0")));
  }, []);
  const handleAddElement = (element: string, id: number) => {
    let tmp: FormField = {
      name: "input" + element + (lastId + 1).toString(),
      placeholder: element + (lastId + 1).toString(),
      label: "عنوان فیلد",
      type: element,
      typeId: id,
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

  useEffect(() => {
    if (productStepInfo) {
      if (productStepInfo.forms?.length > 0) {
        setFormId(productStepInfo.forms?.[0].id);
        loadForm(productStepInfo.forms?.[0].id);
      } else {
        createForm();
      }
    }
  }, [productStepInfo]);
  const loadForm = async (id: number) => {
    const response = await formService.getForm(id);
    console.log(response);
  };

  const createForm = async () => {
    const response = await formService.createForm({
      name: "form" + productStepInfo?.id,
      product_id: productStepInfo?.product_id,
      product_steps: productStepInfo?.id?.toString(),
    });
    setFormId(response.id);

    // console.log(response);
  };

  const handleSaveForm = async () => {
    console.log("save form", formElements);
    //save form fields and save their ids as server_id
    let tmp = [...formElements];
    tmp.map((item, index) => {
      if (item.server_id) {
        let res = formService.updateFormField(item.server_id, {
          name: item.name,
          form_field_type_id: item.typeId,
          label: item.label,
          placeholder: item.placeholder,
          // helper_text: "",
          required: item.required,
          min: 1,
          max: 100,
        });
        res.then((response) => {
          console.log("updated!", response);
        });
      } else {
        let res = formService.createFormField({
          name: item.name,
          form_field_type_id: item.typeId,
          label: item.label,
          placeholder: item.placeholder,
          // helper_text: "",
          required: item.required,
          min: 1,
          max: 100,
        });
        res.then((response) => {
          console.log(response);
          tmp[index] = {
            ...tmp[index],
            server_id: response.id,
          };
          setFormElements([...tmp]);
        });
      }
    });
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
              <Button
                icon={<ArchiveTick />}
                text={t("saveForm")}
                onClick={handleSaveForm}
              />
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
