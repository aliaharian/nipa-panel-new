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
import { CircularProgress } from "@mui/material";
import SnackbarUtils from "app/utils/SnackbarUtils";
import FullscreenLoading from "components/loading/FullscreenLoading";

const FormBuilder = () => {
  const Dispatch = useAppDispatch();
  let { code, step_id } = useParams();

  useEffect(() => {
    Dispatch(setCollapseMenu(true));
  });
  const [selectedTab, setSelectedTab] = useState<string>("elements");
  const handleChangeTab = (value: string): void => {
    console.log("value", value);
    value === "formConditions" && handleSaveForm();
    setSelectedTab(value);
  };
  const [formElements, setFormElements] = useState<FormField[]>([]);
  const [formRelatedElements, setFormRelatedElements] = useState<FormField[]>(
    []
  );
  const [selectedField, setSelectedField] = useState<FormField>();
  const [savedConditions, setSavedConditions] = useState<Condition[]>([]);
  const [saveFormLoading, setSaveFormLoading] = useState<boolean>(true);
  const basicDatas = useAppSelector((state) => state.basicData.basicDatas);

  const [formId, setFormId] = useState<number>(0);
  const productStepInfo = useAppSelector(
    (state) => state.products.productStepInfo
  );
  const [lastId, setLastId] = useState<number>(0);
  const { t } = useTranslation(["common", "validations"]);
  const Navigate = useNavigate();
  useEffect(() => {
    Dispatch(getProductStepInfo(parseInt(step_id || "0")));
    return () => {
      Dispatch(setCollapseMenu(false));
      Dispatch(getProductStepInfo(parseInt("0")));
    };
  }, []);
  const handleAddElement = (
    element: string,
    id: number,
    fromRelatedFields?: boolean
  ) => {
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

    //if from related elements
    if (fromRelatedFields) {
      let relatedTmp = formRelatedElements.find((x) => x.server_id == id);
      // console.log("relatedTmp", relatedTmp);
      if (relatedTmp) {
        tmp = { ...relatedTmp, fromRelatedFields: fromRelatedFields };
      }
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

  const handleDeleteOption = (
    id: number,
    option: string,
    server_id?: number | null
  ) => {
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

    //server side delete if item has server_id
    if (server_id) {
      formService.deleteOption(server_id).then((res) => {
        // console.log("res", res);
      });
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
  const setFromBasicData = (value: boolean) => {
    // console.log('val',value)
    let tmp = [...formElements];

    let foundIndex = tmp.findIndex((x) => x.id == selectedField?.id);

    if (foundIndex > -1) {
      let basicDataId = tmp[foundIndex].basic_data?.id || basicDatas?.[0].id;

      console.log("bas", basicDataId);
      tmp[foundIndex] = {
        ...tmp[foundIndex],
        basic_data_id: value == true ? basicDataId : null,
        basic_data:
          value == true ? tmp[foundIndex].basic_data || basicDatas?.[0] : null,
        basicDataItems:
          value == true
            ? (tmp[foundIndex].basic_data || basicDatas?.[0]).items.map(
                (item: any) => ({
                  id: item.id,
                  label: <p>{item.name}</p>,
                  server_id: item.id,
                  value: item.code,
                })
              )
            : null,
      };
      setFormElements([...tmp]);
      setSelectedField({ ...tmp[foundIndex] });
    }
  };
  // console.log('form',formElements)
  const saveConditions = (conditions: Condition[]) => {
    setSavedConditions([...conditions.filter((x) => x.saved)]);
    console.log("[...conditions.filter((x) => x.saved)]", [
      ...conditions.filter((x) => x.saved),
    ]);
    handleSaveForm(null, [...conditions.filter((x) => x.saved)]);
  };
  const handleDeleteItem = (element: FormField) => {
    //add alert for delete
    // console.log("eleme", element);
    let tmp = [...formElements];
    const index = tmp.indexOf(element);
    if (index > -1) {
      tmp.splice(index, 1);
      setFormElements(tmp);
      if (element.id == selectedField?.id) {
        // setTimeout(() => {
        handleSelectField(undefined);
        // }, 1);
      }

      if (element.server_id) {
        formService.deleteItem(element.server_id, formId).then((res) => {
          console.log("res", res);
          SnackbarUtils.success(t("fieldDeletedSuccessfully"));
        });
      } else {
        SnackbarUtils.success(t("fieldDeletedSuccessfully"));
      }
    }
  };
  const handleBack = () => {
    Navigate(`/products/${code}/steps`);
  };

  useEffect(() => {
    if (productStepInfo) {
      if (productStepInfo.forms?.length > 0) {
        setSaveFormLoading(true);
        setFormId(productStepInfo.forms?.[0].id);
        loadForm(productStepInfo.forms?.[0].id);
      } else {
        createForm();
        setSaveFormLoading(false);
      }
    }
  }, [productStepInfo]);
  const loadForm = async (id: number) => {
    const response = await formService.getForm(id);
    handleSetFormElements(response);
    handleSetFormElements(response, true);
    handleSetFormConditions(response);
    setSaveFormLoading(false);
  };

  const handleSetFormConditions = (response: any) => {
    let { conditions, fields, id } = response;
    let tmp: Condition[] = [];
    //group conditions by form_field_id
    conditions.map((item: any) => {
      //find field
      let field = fields.find((x: any) => x.id == item.form_field_id);

      console.log("fff", field);
      //find field options
      let options = (field?.basicDataItems || field?.options)?.map((x: any) => {
        return {
          id: x.id,
          label: x.label,
          server_id: x.id,
          value: x.option,
        };
      });
      console.log("fff", options);

      let foundIndex = tmp.findIndex((x: any) => x.field == item.form_field_id);
      if (foundIndex > -1) {
        //find specific option
        let option = options?.find(
          (x: any) =>
            x.id == (item.basic_data_item_id || item.form_field_option_id)
        );
        console.log("p[topnnnnsss", options);
        console.log("p[topnnnnsss", option);
        console.log("p[topnnnnsss", item);

        tmp[foundIndex]?.values?.push({
          id: option?.id,
          label: option?.label,
          server_id: option?.id,
          value: option?.value,
        });
      } else {
        //find specific option
        let option = options?.find(
          (x: any) =>
            x.id == (item.basic_data_item_id || item.form_field_option_id)
        );

        tmp.push({
          field: item.form_field_id,
          id: item.id,
          operation:
            item.operation == 1
              ? { name: "operation", value: "show" }
              : { name: "operation", value: "hide" },
          relationField: item.relational_form_field_id,
          saved: true,
          values: [
            {
              id: option?.id,
              label: option?.label,
              server_id: option?.id,
              value: option?.value,
            },
          ],
        });
      }
    });

    console.log("tmp123", [...tmp]);
    setSavedConditions([...tmp]);
  };

  const handleSetFormElements = (form: any, relatedFields?: boolean) => {
    let tmp: FormField[] = [];
    let parseableArray = relatedFields ? form.relatedFields : form.fields;
    console.log("formId", form.id);
    parseableArray?.forEach((item: any) => {
      console.log("item", item);
      let tmpItem: FormField = {
        id: item.id,
        name: item.name,
        type: item.type?.type,
        typeId: item.form_field_type_id,
        label: item.label,
        placeholder: item.placeholder,
        required: item.required,
        basic_data: item.basic_data,
        basic_data_id: item.basic_data?.id || null,
        form: item.form && item.form?.id != form.id ? item.form : null,
        fromRelatedFields:
          item.form?.id && item.form?.id != form.id ? true : false,
        basicDataItems:
          ((item.basicDataItems && item.basicDataItems.length > 0) ||
            item.type?.has_options) &&
          item.basicDataItems?.map((option: any) => {
            return {
              id: option.id,
              server_id: option.id,
              value: option.option,
              label: <p>{option.label}</p>,
            };
          }),
        options:
          ((item.options && item.options.length > 0) ||
            item.type?.has_options) &&
          item.options?.map((option: any) => {
            return {
              id: option.id,
              server_id: option.id,
              value: option.option,
              label: <p>{option.label}</p>,
            };
          }),
        onlyImage: JSON.parse(item.validation)?.onlyImage,
        server_id: item.id,
      };
      tmp.push(tmpItem);
    });
    relatedFields ? setFormRelatedElements(tmp) : setFormElements(tmp);
  };

  const createForm = async () => {
    const response = await formService.createForm({
      name: "form" + productStepInfo?.id,
      product_id: productStepInfo?.product_id,
      product_steps: productStepInfo?.id?.toString(),
    });
    setFormId(response.id);
  };

  const handleSaveForm = async (e?: any, passedConditions?: Condition[]) => {
    //save form fields and save their ids as server_id
    setSaveFormLoading(true);
    let tmp = [...formElements];
    let condTmp = [...savedConditions];
    console.log("pass", formElements);

    if (passedConditions) {
      condTmp = [...passedConditions];
    }
    let res = formService.updateForm(formId, {
      name: "form" + productStepInfo?.id,
      fields: tmp.map((item, index) => {
        let validationTmp: any = {};
        if (item.type === "uploadFile") {
          validationTmp.onlyImage = item.onlyImage;
        }

        return {
          server_id: item.server_id,
          name: item.name,
          form_field_type_id: item.typeId,
          label: item.label,
          placeholder: item.placeholder,
          required: item.required,
          helper_text: item.id,
          validation: validationTmp,
          min: 1,
          max: 100,
          order: index,
          origin_form_id: item.fromRelatedFields ? item.form.id : null,
          hasOptions: item.options && item.options.length > 0,
          basic_data: item.basic_data,
          basic_data_id: item.basic_data_id || null,
          // basic_data_id: item.basic_data?.id || null,

          basicDataItems:
            item.basicDataItems &&
            item.basicDataItems.length > 0 &&
            item.basicDataItems?.map((option: any) => {
              return {
                id: option.id,
                server_id: option.id,
                value: option.option,
                label: <p>{option.label}</p>,
              };
            }),
          options:
            item.options &&
            item.options.length > 0 &&
            item.options?.map((x) => {
              return {
                option: x.value,
                label: x.label.props.children,
                id: x.server_id,
              };
            }),
        };
      }),
      conditions: condTmp.map((item, index) => {
        return {
          form_id: formId,
          form_field_id: item.field,
          form_field_options_id: item.values?.map((value) => {
            return value.id;
          }),
          operation: item.operation?.value === "show" ? 1 : 0,
          relational_form_field_id: item.relationField,
        };
      }),
    });
    res.then((response) => {
      console.log("updated!", response);

      handleSetFormElements(response);
      handleSetFormConditions(response);
      handleSetFormElements(response, true);

      setSaveFormLoading(false);
    });
    res.catch((error) => {
      setSaveFormLoading(false);
    });
  };

  return (
    <div className="w-full h-full">
      {saveFormLoading && (
        <FullscreenLoading/>
        // <div className="flex-col w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] z-[9999] pointer-events-auto flex justify-center items-center">
        //   <CircularProgress />
        //   <p className="text-white mt-4">لطفا چند لحظه صبر کنید...</p>
        // </div>
      )}
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
          setFromBasicData={setFromBasicData}
          relatedFields={formRelatedElements}
        />
        <div className="basis-3/4 bg-white mr-[10px]">
          <FormContent
            lastId={lastId}
            setLastId={setLastId}
            saveFormLoading={saveFormLoading}
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
