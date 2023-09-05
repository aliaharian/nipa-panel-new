import FullscreenLoading from "components/loading/FullscreenLoading";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import DropDown from "components/form/Dropdown";
import { FormField } from "app/models/form";
import {
  renderElement,
  renderFormInitialValues,
  renderFormValidation,
} from "app/utils/FormActions";
import orderService from "app/redux/orders/service";
import formService from "app/redux/forms/service";
import * as Yup from "yup";
import Button from "components/button/Button";

const ShowOrderStepForm = () => {
  const Navigate = useNavigate();
  const { t } = useTranslation();
  let { orderId, stepId } = useParams();
  const [pending, setPending] = useState(false);
  const [fields, setFields] = useState<FormField[]>([]);
  const [form, setForm] = useState<any>();
  const [orderData, setOrderData] = useState<any>();
  const [conditions, setConditions] = useState<any[]>([]);

  const [validationSchema, setValidationSchema] = useState<any>();
  const [initialValues, setInitialValues] = useState<any>();

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log("done!", form);
      if (orderId && form) {
        setPending(true);
        const savedForm = await formService.addUserAnswer(
          parseInt(orderId),
          form.id,
          values
        );
        //change state to next step!
        setPending(false);
      }
    },
  });
  useEffect(() => {
    setInitialValues(renderFormInitialValues(fields));
    setValidationSchema(
      Yup.object().shape(renderFormValidation(fields, conditions, formik))
    );
    if (formik.values) {
      fields?.map((field) => {
        if (field.answer) {
          formik.setFieldValue(field.name, field.answer);
        }
      });
    }
  }, [fields, formik.values, conditions]);

  useEffect(() => {
    ////
    loadForm();
  }, []);

  const loadForm = async () => {
    let orderData = await orderService.getStepInfo(
      Number(stepId),
      Number(orderId)
    );
    setOrderData(orderData);

    const response = await formService.getForm(orderData?.form.id, orderId);
    setForm(response);

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
        answer: item.userAnswer,
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
            answer: item.userAnswer,
            // answer: item.basicDataItems.find(
            //   (x: any) => x.option === item.userAnswer
            // ),
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
              answer: item.userAnswer,
              // answer: item.options.find(
              //   (x: any) => x.option === item.userAnswer
              // ),
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
  };

  const handleSubmitForm = () => {
    console.log("formi", formik.values);
    // formik.handleSubmit(formik.values);
  };
  return (
    <div className="w-full h-full">
      <Breadcrumb
        title={orderData?.step?.step_name || ""}
        handleBack={() => Navigate("/orders")}
      />
      <div className={`w-full flex gap-x-[20px]`}>
        <div
          className={`w-full bg-white border border-text-300 h-min rounded-[6px] px-[20px] py-[24px]`}
        >
          <form onSubmit={formik.handleSubmit}>
            {pending && <FullscreenLoading />}
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
                            formik.values[mainField.name]?.indexOf(opt.value) >
                              -1
                          )
                        ) {
                          showItem = true;
                        } else {
                          showItem = false;
                        }
                      }
                    }
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
            <div className="mt-[32px]">
              <Button
                after
                onClick={handleSubmitForm}
                text={t("submitForm2")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ShowOrderStepForm;
