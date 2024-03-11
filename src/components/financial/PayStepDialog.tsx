import { InfoCircle, Receipt2 } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import RadioGroup from "../form/RadioGroup";
import transform from "app/utils/transform";
import UploadFile from "../form/UploadFile";
import saman from "assets/images/saman.png";
import shaparak from "assets/images/shaparak.png";
import Api from "app/service/Api";

type PayStepDialogProps = {
  open: boolean;
  handleClose?: () => void;
  handleSubmit?: (values: any) => void;
  data?: any;
};

type initialValues = {
  id: number | null;
  payMethod: string;
  isOnline: string;
  payablePrice: string;
  stepNumber?: number;
  file?: File | null;
  gateway?: string;
};

const PayStepDialog = ({
  open,
  handleClose,
  handleSubmit,
  data,
}: PayStepDialogProps) => {
  const initialValues: initialValues = {
    //from data mabe
    id: data?.id || 0,
    stepNumber: data?.step_number || 1,
    payMethod: data?.allow_online ? "online" : "offline",
    file: null,
    gateway: data?.gateway || "",
    isOnline: data?.allow_online
      ? data?.allow_offline
        ? "all"
        : "online"
      : data?.allow_offline
      ? "offline"
      : "" || "",
    payablePrice: data?.payable_price?.toString() || "",
  };
  const { t } = useTranslation("common");
  const [fileId, setFileId] = useState();
  const fileRef = useRef<HTMLInputElement>(null);
  const validationSchema = Yup.object({
    payMethod: Yup.string().required(t("required") || ""),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit && handleSubmit(values);
      // handleClose?.()
    },
  });
  const handleSubmitForm = () => {
    formik.handleSubmit();
  };

  useEffect(() => {
    formik.setValues(initialValues);
  }, [data]);

  const handleCancel = () => {
    formik.resetForm();
    handleClose?.();
  };
  useEffect(() => {
    if (formik.values.file) {
      console.log(formik.values.file);
      handleUploadFile(formik.values.file);
    }
  }, [formik.values.file]);
  const handleUploadFile = async (file: File) => {
    let formData = new FormData();
    formData.append("file", file);
    let response = await Api()?.post("/files", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setFileId(response.data.file.id);
    formik.setFieldValue("fileId", response.data.file.id);
  };
  console.log("data", data);
  return (
    <SideDialog
      headerText={
        t("payFactorStep") + (data?.step_number === 1 ? " اول " : " دوم ")
      }
      headerIcon={<Receipt2 />}
      open={open}
      handleClose={handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 text-[18px]">
          {data && (
            <form onSubmit={formik.handleSubmit} className="w-full">
              <div className="pb-8 mb-8 border-b border-text-300">
                <RadioGroup
                  className="group"
                  name={"payMethod"}
                  label={t("selectPayMethod")}
                  options={[
                    data.allow_online && {
                      label: "پرداخت آنلاین",
                      value: "online",
                    },
                    data.allow_offline && {
                      label: "واریز دستی و ارسال فیش",
                      value: "offline",
                    },
                  ].filter((item) => item)}
                  formik={formik}
                  lg
                />
              </div>
              <div className="mt-7 w-full flex flex-col bg-text-200 mb-4 items-center py-8 rounded-[6px]">
                <div className="flex items-center justify-between w-full px-4">
                  <p className="text-text-500 text-[14px]">
                    {t("thisStepPrice")}:{" "}
                    <span className="text-text-900 ">
                      {transform.toPersianDigitsPutCommas(
                        data.payable_price?.toString()
                      )}{" "}
                      {t("toman")}
                    </span>
                  </p>
                  <p className="text-text-500 text-[14px]">
                    {t("walletPay")}:{" "}
                    <span className="text-text-900 ">
                      {transform.toPersianDigitsPutCommas(
                        (
                          data.payable_price - data.remaining_payable_price
                        )?.toString()
                      )}{" "}
                      {t("toman")}
                    </span>
                  </p>
                  <p className="text-text-500 text-[16px]">
                    {t("payablePrice")}:{" "}
                    <span className="text-success-primary font-bold">
                      {transform.toPersianDigitsPutCommas(
                        data.remaining_payable_price?.toString()
                      )}{" "}
                      {t("toman")}
                    </span>
                  </p>
                </div>

                {formik.values.payMethod === "offline" &&
                  data?.remaining_payable_price > 0 && (
                    <div className="w-[490px] flex flex-col gap-y-3 mt-6">
                      <div className="text-[14px] text-text-500 w-full h-10 px-6 bg-white rounded-[6px] flex items-center justify-between">
                        <p>{t("accountHolderName")}</p>
                        <p className="text-text-900 font-medium">
                          محمد حسین مقدم
                        </p>
                      </div>
                      <div className="text-[14px] text-text-500 w-full h-10 px-6 bg-white rounded-[6px] flex items-center justify-between">
                        <p>{t("shebaNumber")}</p>
                        <p className="text-text-900 font-medium">
                          IR123456789000007434
                        </p>
                      </div>
                      <div className="text-[14px] text-text-500 w-full h-10 px-6 bg-white rounded-[6px] flex items-center justify-between">
                        <p>{t("cardNumber")}</p>
                        <p className="text-text-900 font-medium">
                          ۱۲۳۴ - ۵۶۷۸ - ۱۲۳۴ - ۵۶۷۸
                        </p>
                      </div>
                      <div className="text-[14px] text-text-500 w-full h-10 px-6 bg-white rounded-[6px] flex items-center justify-between">
                        <p>{t("accountNumber")}</p>
                        <p className="text-text-900 font-medium">
                          ۶۳۴۵۲۵۴۲۳۴۵۲۳
                        </p>
                      </div>
                    </div>
                  )}
              </div>
              {formik.values.payMethod === "offline" &&
                data?.remaining_payable_price > 0 && (
                  <div className="w-full flex svg:text-primary-main text-primary-main text-[14px] font-medium items-start justify-start gap-x-[6px]">
                    <InfoCircle />
                    <p className="leading-[30px]">
                      لطفا مبلغ کل زیر را به صورت کارت به کارت یا با فیش به حساب
                      های معرفی شده واریز نمائید و فیش پرداخت خود را در همین بخش
                      آپلود کنید
                    </p>
                  </div>
                )}
              {data?.remaining_payable_price > 0 &&
                formik.values.payMethod === "offline" && (
                  <div className="w-full mt-6">
                    {formik.values.file ? (
                      <div
                        className="
                    flex flex-col items-center justify-center gap-y-3  border border-dashed border-primary-o50 py-4
                    "
                      >
                        <Receipt2 />
                        <p className="leading-[30px] text-[14px]">
                          فیش پرداختی شما آپلود شد
                        </p>
                        {/* delete */}
                        <div className="mt-6 w-[120px] flex items-center justify-center">
                          <Button
                            text={t("deleteFile")}
                            onClick={() => {
                              formik.setFieldValue("file", null);
                              fileRef.current?.click();
                            }}
                            className="!text-error-primary"
                            gray
                          />
                        </div>
                      </div>
                    ) : (
                      <UploadFile
                        name={"file"}
                        imageOnly={true}
                        fileRef={fileRef}
                        placeholder={"آپلود فیش واریزی"}
                        formik={formik}
                      />
                    )}
                  </div>
                )}

              {formik.values.payMethod === "online" &&
                data?.remaining_payable_price > 0 && (
                  <div className="w-full">
                    <RadioGroup
                      className="group"
                      name={"gateway"}
                      label={
                        "با هریک از کارت های عضو شبکه شتاب می توانید پرداخت کنید"
                      }
                      options={[
                        {
                          label: (
                            <div
                              className={`${
                                formik.values.gateway === "saman"
                                  ? ""
                                  : "grayscale"
                              }`}
                            >
                              <img src={saman} />
                            </div>
                          ),
                          value: "saman",
                        },
                        {
                          label: (
                            <div
                              className={`${
                                formik.values.gateway === "shaparak"
                                  ? ""
                                  : "grayscale"
                              }`}
                            >
                              <img src={shaparak} />
                            </div>
                          ),
                          value: "shaparak",
                        },
                      ].filter((item) => item)}
                      formik={formik}
                      lg
                    />
                  </div>
                )}
            </form>
          )}
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="py-[24px] border-t border-text-300 px-7 flex justify-between">
          <div className="w-[126px]">
            <Button
              // disabled={submitdisabled}
              text={t("cancel")}
              onClick={handleCancel}
              gray
              className="!text-error-primary"
            />
          </div>
          <div className="w-[207px]">
            <Button
              // disabled={submitdisabled}
              // icon={<Add />}
              text={
                data?.remaining_payable_price > 0
                  ? formik.values.payMethod === "offline"
                    ? t("sendPaidPaper")
                    : t("gotoGateway")
                  : t("reduceFromWallet")
              }
              onClick={handleSubmitForm}
            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default PayStepDialog;
