import { useTranslation } from "react-i18next";
import DropDown from "../form/Dropdown";
import { Product } from "app/models/product";
import { selectedOrderType } from "pages/orders/AddOrder";
import { useEffect, useState } from "react";
import formService from "app/redux/forms/service";
import FormContent from "../formBuilder/formContent/FormContent";
import {
  renderElement,
  renderFormInitialValues,
  renderFormValidation,
} from "app/utils/FormActions";
import { FormField } from "app/models/form";
import Button from "../button/Button";
import { Add, ArrowLeft, ArrowRight } from "iconsax-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FullscreenLoading from "../loading/FullscreenLoading";

type SelectProductProps = {
  selectedOrder: selectedOrderType;
  products: Product[];
  handleClearOrder: () => void;
  handleSaveOrder: (product: Product, values: any, addAnother: boolean) => void;
};
const OrderCreateForm = ({
  selectedOrder,
  products,
  handleClearOrder,
  handleSaveOrder,
}: SelectProductProps) => {
  const { t } = useTranslation();
  const [form, setForm] = useState<any>();
  const [fields, setFields] = useState<FormField[]>([]);
  const [conditions, setConditions] = useState<any[]>([]);
  const [formSaved, setFormSaved] = useState(false);
  const [pending, setPending] = useState(false);
  const [addAnother, setAddAnother] = useState(false);
  const selectedProduct = products.find(
    (x) => x.id === selectedOrder.product_id
  );

  useEffect(() => {
    loadForm();
  }, []);

  const [validationSchema, setValidationSchema] = useState<any>();
  const [initialValues, setInitialValues] = useState<any>();

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      selectedProduct && handleSaveOrder(selectedProduct, values, addAnother);
    },
  });
  useEffect(() => {
    setInitialValues(renderFormInitialValues(fields));
    setValidationSchema(
      Yup.object().shape(renderFormValidation(fields, conditions, formik))
    );
  }, [fields, formik.values, conditions]);

  const handleSubmitForm = (addAnother?: boolean) => {
    setAddAnother(addAnother || false);

    formik.handleSubmit(formik.values);
    // if (Object.keys(formik.errors).length === 0) {
    // }
  };

  // useEffect(() => {
  //   if (formSaved && addAnother) {

  //   }
  // }, [formSaved]);

  const loadForm = async () => {
    if (selectedProduct?.initialFormId) {
      const response = await formService.getForm(
        selectedProduct?.initialFormId
      );
      setForm(response);
      console.log("res", response);

      let fieldsTmp: any[] = [];
      response.fields?.map((item: any) => {
        let tmp: any = {
          key: item.id,
          name: item.name,
          placeholder: item.placeholder,
          label: item.label,
          type: item.type.type,
          typeId: item.type.id,
          required: item.required,
          id: item.id,
          fromRelatedFields:
            item?.form?.id && item?.form?.id != response?.id ? true : false,
        };

        if (item.type.type === "dropDown" || item.type.type === "checkbox") {
          if (item.basic_data_id) {
            tmp = {
              ...tmp,
              basic_data: item.basic_data,
              basic_data_id: item.basic_data_id,
              basicDataItems: item.basicDataItems.map((opt: any) => ({
                key: opt.id,
                id: opt.id,
                label: <p>{opt.label}</p>,
                server_id: opt.id,
                value: opt.option,
              })),
            };
          } else {
            tmp = {
              ...tmp,
              options: item.options.map((opt: any) => ({
                id: opt.id,
                key: opt.id,
                label: <p>{opt.label}</p>,
                server_id: opt.id,
                value: opt.option,
              })),
            };
          }
        }
        if (item.type.type === "uploadFile") {
          tmp = {
            ...tmp,
            onlyImage: JSON.parse(item.validation)?.onlyImage,
            setPending: setPending,
            noBadge: true,
          };
        }
        fieldsTmp.push({ ...tmp });
      });
      setConditions([...response.conditions]);

      setFields([...fieldsTmp]);
    }
  };
  console.log('formik',formik.errors)
  return (
    <form onSubmit={formik.handleSubmit}>
      {pending && <FullscreenLoading />}
      <div>
        <DropDown
          className="group"
          name={"product"}
          label={t("selectedProduct")}
          options={products?.map((product: Product, index: number) => ({
            label: <p>{product.name}</p>,
            value: product.id || 0,
            key: product.id || index,
          }))}
          placeholder={t("pleaseSelectProduct")}
          disabled={true}
          formik={{
            values: {
              product: selectedOrder.product_id,
            },
            handleChange: (e: any) => {
              // e.preventDefault();
            },
          }}
        />
        <div>
          {fields &&
            formik &&
            formik?.values &&
            Object.keys(formik?.values).length > 0 &&
            fields.map((element: any, index: number) => {
              const cond = conditions.find(
                (x) => x.relational_form_field_id == element.id
              );
              let showItem = true;
              if (cond) {
                //check conditions
                const mainField = fields.find(
                  (x) => x.id == cond.form_field_id
                );
                let opt;
                if (mainField) {
                  if (mainField.basic_data_id) {
                    opt = mainField?.basicDataItems?.find(
                      (x) => x.server_id == cond.form_field_option_id
                    );
                  } else {
                    opt = mainField?.options?.find(
                      (x) => x.server_id == cond.form_field_option_id
                    );
                  }
                }
                if (mainField && opt) {
                  if (cond.operation == 1) {
                    if (
                      formik.values[mainField.name] === opt.value ||
                      formik.values[mainField.name]?.indexOf(opt.value) > -1
                    ) {
                      showItem = true;
                    } else {
                      showItem = false;
                    }
                  } else {
                    if (
                      !(
                        formik.values[mainField.name] === opt.value ||
                        formik.values[mainField.name]?.indexOf(opt.value) > -1
                      )
                    ) {
                      showItem = true;
                    } else {
                      showItem = false;
                    }
                  }
                }
                // console.log("main", mainField);
              }

              return showItem ? (
                <div className="mt-[30px]" key={index}>
                  {renderElement(element, () => {}, formik)}
                </div>
              ) : (
                <></>
              );
            })}
        </div>
        <div className="mt-[30px] mb-[50px]">
          <Button
            icon={<Add />}
            onClick={() => {
              handleSubmitForm(true);
            }}
            bordered
            text={t("addProductToOrder")}
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-[227px]">
            <Button
              icon={<ArrowRight className="ml-[7px]" />}
              onClick={handleClearOrder}
              gray
              text={t("backToPrevStep")}
            />
          </div>
          <div className="w-[202px]">
            <Button
              icon={<ArrowLeft className="mr-[7px]" />}
              after
              onClick={() => handleSubmitForm(false)}
              text={t("saveAndContinue")}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default OrderCreateForm;