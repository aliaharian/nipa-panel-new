import FullscreenLoading from "components/loading/FullscreenLoading";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FormField } from "app/models/form";
import {
  renderElement,
  renderFormInitialValues,
  renderFormValidation,
} from "app/utils/FormActions";
import formService from "app/redux/forms/service";
import * as Yup from "yup";
import Button from "components/button/Button";
import SnackbarUtils from "app/utils/SnackbarUtils";
import {
  useGetStepInfo,
  useGotoNextStep,
  useOrdersDetail,
} from "app/queries/orders/hooks";
import WarningPopup from "components/popup/WarningPopup";
import { useQueryClient } from "@tanstack/react-query";
import { useAddUserAnswer } from "app/queries/forms/hooks";
import Accordion from "components/accordion/Accordion";
import transform from "app/utils/transform";
import { Skeleton } from "@mui/material";

const ShowOrderStepForm = () => {
  const Navigate = useNavigate();
  const { t } = useTranslation();
  let { orderId, stepId } = useParams();
  const [pending, setPending] = useState(false);
  const [fields, setFields] = useState<FormField[]>([]);
  const [form, setForm] = useState<any>();
  const [conditions, setConditions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [openAcceptModal, setOpenAcceptModal] = useState(false);
  const { data: order } = useOrdersDetail(parseInt(orderId || ""));
  const { mutate: gotoNextStep } = useGotoNextStep();
  const { data: stepInfo } = useGetStepInfo({
    stepId: Number(stepId),
    orderId: Number(orderId),
  });
  const handleAcceptForNextStep = async () => {
    //here we want to pass this order to next step
    setLoading(true);
    gotoNextStep(order.order.id, {
      onSuccess: () => {
        setLoading(false);
        Navigate("/orders");
        SnackbarUtils.success("مرحله سفارش با موفقیت تغییر یافت");
      },
      onError: () => {
        SnackbarUtils.error("تغییر مرحله با خطا مواجه شد");
        setLoading(false);
      },
    });
  };

  const [validationSchema, setValidationSchema] = useState<any>();
  const [initialValues, setInitialValues] = useState<any>();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { mutate: addUserAnswer } = useAddUserAnswer();
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      if (orderId && form) {
        setPending(true);
        addUserAnswer(
          { orderId: parseInt(orderId), formId: form.id, values },
          {
            onSuccess: () => {
              setPending(false);
              SnackbarUtils.success(t("submitFormSuccess"));
              queryClient.invalidateQueries({
                queryKey: [
                  "stepInfo",
                  { orderId: Number(orderId), stepId: Number(stepId) },
                ],
              });
              setFormSubmitted(true);
            },
            onError: () => {
              setPending(false);
              SnackbarUtils.error("خطایی رخ داد");
            },
          }
        );
      }
    },
  });
  useEffect(() => {
    setInitialValues(renderFormInitialValues(fields));
    setValidationSchema(
      Yup.object().shape(renderFormValidation(fields, conditions, formik))
    );
  }, [fields, conditions]);

  useEffect(() => {
    if (stepInfo) {
      loadForm(stepInfo);
    }
  }, [stepInfo]);

  const loadForm = async (stepInfo: any) => {
    const response = await formService.getForm(stepInfo?.form.id, orderId);
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
        width: item.width,
        alertType: item.alert_type,
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
    //do another works
  };

  const handleSubmitForm = () => {
    console.log("formi", formik.values);
  };
  return (
    <>
      <WarningPopup
        title={"آیا از رفتن به مرحله بعد مطمئن هستید؟"}
        open={openAcceptModal}
        onClose={() => {
          setOpenAcceptModal(false);
        }}
        handleConfirm={() => {
          handleAcceptForNextStep();
          setOpenAcceptModal(false);
        }}
      />
      <div className="w-full h-full">
        {/* {!stepInfo && <FullscreenLoading />} */}
        {stepInfo?.step?.step_name ? (
          <Breadcrumb
            title={stepInfo?.step?.step_name || ""}
            handleBack={() => Navigate("/orders")}
          />
        ) : (
          <div className="flex gap-4 mb-4">
            <Skeleton
              width={24}
              height={24}
              variant="rounded"
              animation="wave"
            />
            <Skeleton
              width={140}
              height={24}
              variant="rounded"
              animation="wave"
            />
          </div>
        )}
        <div className={`w-full flex gap-x-[20px]`}>
          <div
            className={`w-full bg-white border border-text-300 h-min rounded-[6px] px-[20px] py-[24px]`}
          >
            <div>
              {stepInfo?.step?.prevSteps &&
              fields.length > 0 &&
              formik &&
              formik?.values ? (
                stepInfo.step.prevSteps.map((step: any) => {
                  return (
                    <Accordion
                      key={step.id}
                      title={`اطلاعات مربوط به فرم ${step.step_name}`}
                    >
                      <div className="w-full grid grid-cols-4 gap-3 p-4">
                        {step.answers
                          ?.filter(
                            (field: any) => field.form_field_type !== "alert"
                          )
                          .map((data: any, index: number) => {
                            return (
                              <div className="flex items-center" key={index}>
                                <p className="text-[14px] text-text-500">
                                  {data.label}:
                                </p>
                                <p className="text-[14px] text-text-700 ms-2">
                                  {data.form_field_type === "uploadFile" ? (
                                    <a
                                      href={
                                        process.env.REACT_APP_BASE_URL +
                                        "/files/" +
                                        data.answer
                                      }
                                      className="text-white font-bold text-[14px] text-text-700 mx-2 bg-primary-main rounded-[8px] px-3 py-2"
                                      key={index}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      دانلود پیوست
                                    </a>
                                  ) : data.form_field_type === "datePicker" ? (
                                    transform.renderChatTime(
                                      transform.dateToTimestamp(data.answer),
                                      true,
                                      true
                                    )
                                  ) : data.form_field_type === "timePicker" ? (
                                    transform.renderChatTime(
                                      transform.dateToTimestamp(data.answer),
                                      true,
                                      false,
                                      true
                                    )
                                  ) : data.answerObject ? (
                                    data.answerObject.name ||
                                    data.answerObject.label
                                  ) : (
                                    data.answer
                                  )}
                                </p>
                              </div>
                            );
                          })}
                      </div>
                    </Accordion>
                  );
                })
              ) : (
                <div className="w-full flex flex-col gap-4">
                  <Skeleton
                    width={"100%"}
                    height={72}
                    variant="rounded"
                    animation="wave"
                  />
                  <div className="w-full grid grid-cols-2 gap-4">
                    <Skeleton
                      width={"100%"}
                      height={40}
                      variant="rounded"
                      animation="wave"
                    />
                    <Skeleton
                      width={"100%"}
                      height={40}
                      variant="rounded"
                      animation="wave"
                    />
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={formik.handleSubmit}>
              {pending && <FullscreenLoading />}
              <div className="grid grid-cols-4 gap-y-9 gap-x-4 mt-[30px]">
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
                            formik.values[mainField.name]?.indexOf(opt.value) >
                              -1
                          ) {
                            showItem = true;
                          } else {
                            showItem = false;
                          }
                        } else {
                          if (
                            !(
                              formik.values[mainField.name] === opt.value ||
                              formik.values[mainField.name]?.indexOf(
                                opt.value
                              ) > -1
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
                      <div
                        className={`flex lg:col-span-4
                    ${element.width === 100 ? "col-span-4" : ""}
                    ${element.width === 75 ? "col-span-3" : ""}
                    ${element.width === 50 ? "col-span-2" : ""}
                  `}
                        key={index}
                      >
                        {renderElement(
                          element,
                          () => {
                            return <></>;
                          },
                          formik
                        )}
                      </div>
                    ) : (
                      <></>
                    );
                  })}
              </div>
              <div className="mt-[32px] flex items-center gap-4">
                <div className="w-[400px]">
                  {stepInfo?.step?.prevSteps &&
                  fields.length > 0 &&
                  formik &&
                  formik?.values ? (
                    <Button
                      after
                      btnType="submit"
                      onClick={handleSubmitForm}
                      text={t("submitForm2")}
                      disabled={loading}
                      loading={loading}
                    />
                  ) : (
                    <Skeleton
                      width={"100%"}
                      height={40}
                      variant="rounded"
                      animation="wave"
                    />
                  )}
                </div>
                {formSubmitted && (
                  <div className="w-[220px]">
                    <Button
                      disabled={!formSubmitted || loading}
                      loading={loading}
                      className="!px-4"
                      bordered
                      text={
                        t("acceptForNextStep") +
                        ` (${stepInfo?.step?.nextStep?.step_name})`
                      }
                      onClick={() => setOpenAcceptModal(true)}
                    />
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowOrderStepForm;
