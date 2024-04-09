import Button from "components/button/Button";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useNavigate, useParams } from "react-router-dom";
import { Printer } from "iconsax-react";
import { useTranslation } from "react-i18next";
import Section from "components/section/Section";
import { useEffect, useRef, useState } from "react";
import transform from "app/utils/transform";
import FactorInfo from "./FactorInfo";
import FactorItems from "./FactorItems";
import FactorPayments from "./FactorPayments";
import { setCollapseMenu } from "app/redux/application/actions";
import { useAppDispatch } from "app/redux/hooks";
import Datepicker from "components/form/Datepicker";
import { factorItem } from "app/models/financial";
import FullscreenLoading from "components/loading/FullscreenLoading";
import { Tooltip, Typography } from "@mui/material";
import SnackbarUtils from "app/utils/SnackbarUtils";
import Alert from "components/alert/Alert";
import ChangeLogDialog from "components/financial/ChangeLogDialog";
import WarningPopup from "components/popup/WarningPopup";
import {
  useAcceptFactor,
  useAcceptFactorByCustomer,
  useAddFactorItem,
  useAddPaymentStep,
  useChangeFactorStatus,
  useDeleteFactorItem,
  useDeletePaymentStep,
  useGetFactor,
  useUpdateFactor,
  useUpdateFactorItem,
  useUpdatePaymentStep,
} from "app/queries/financial/hooks";
import { useQueryClient } from "@tanstack/react-query";

const EditFactor = () => {
  const Navigate = useNavigate();
  const { t } = useTranslation();
  const { code } = useParams();
  const Dispatch = useAppDispatch();
  const [expireDate, setExpireDate] = useState<any>(null);
  const [description, setDescription] = useState<any>("");
  const [openLogDialog, setOpenLogDialog] = useState<boolean>(false);
  const [acceptFactorPopup, setAcceptFactorPopup] = useState<boolean>(false);
  const [payDonePopup, setPayDonePopup] = useState<boolean>(false);
  const [cancelFactorPopup, setCancelFactorPopup] = useState<boolean>(false);
  //   const isPrint = useRef<boolean>(false);
  const [isPrint, setIsPrint] = useState(false);

  const queryClient = useQueryClient();
  const {
    isPending,
    data: { factorInfo, factorPayments, factorStatus } = {
      factorInfo: null,
      factorPayments: null,
      factorStatus: null,
    },
  } = useGetFactor(code || "");

  const { mutate: updateFactorMutation } = useUpdateFactor(code || "");
  const { mutate: addFactorItemMutation } = useAddFactorItem(code || "");
  const { mutate: updateFactorItemMutation } = useUpdateFactorItem(code || "");
  const { mutate: deleteFactorItemMutation } = useDeleteFactorItem(code || "");
  const { mutate: addPaymentStepMutation } = useAddPaymentStep(code || "");
  const { mutate: updatePaymentStepMutation } = useUpdatePaymentStep(
    code || ""
  );
  const { mutate: deletePaymentStepMutation } = useDeletePaymentStep(
    code || ""
  );
  const { mutate: acceptFactorMutation } = useAcceptFactor(code || "");
  const { mutate: changeFactorStatusMutation } = useChangeFactorStatus(
    code || ""
  );
  const { mutate: acceptFactorByCustomerMutation } = useAcceptFactorByCustomer(
    code || ""
  );

  function setPrintStyles() {
    var style = document.createElement("style");
    style.setAttribute("media", "print");
    document.head.appendChild(style);

    style?.sheet?.insertRule("@page { size: A4 landscape; }", 0);
  }

  function resetPrintConfig() {
    var printStyles = document.querySelectorAll('style[media="print"]');

    printStyles.forEach(function (style) {
      style?.parentNode?.removeChild(style);
    });
  }
  useEffect(() => {
    window.addEventListener("beforeprint", () => {
      setPrintStyles();
      setIsPrint(true);
    });
    window.addEventListener("afterprint", () => {
      resetPrintConfig();
      setIsPrint(false);
    });
    return () => {
      window.removeEventListener("beforeprint", () => {
        setIsPrint(true);
        setPrintStyles();
      });
      window.removeEventListener("afterPrint", () => {
        resetPrintConfig();
        setIsPrint(false);
      });
    };
  }, []);

  //debaunced function for update factor
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (factorInfo && factorInfo.description !== description) {
        handleUpdateFactor(undefined, description);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [description]);

  useEffect(() => {
    Dispatch(setCollapseMenu(true));
  }, []);

  useEffect(() => {
    if (factorInfo) {
      setExpireDate(
        factorInfo.expire_date ? new Date(factorInfo.expire_date) : null
      );
      setDescription(factorInfo.description || "");
    }
  }, [factorInfo]);

  const handleAddFactorItem = async (values: factorItem) => {
    addFactorItemMutation({
      id: factorInfo.id,
      data: values,
    });
  };
  const handleEditFactorItem = async (values: factorItem) => {
    updateFactorItemMutation({
      id: factorInfo.id,
      data: values,
    });
  };
  const handleDeleteFactorItem = async (id: number) => {
    deleteFactorItemMutation({
      id: factorInfo.id,
      data: id,
    });
  };
  const handleAddPaymentStep = async (values: any) => {
    addPaymentStepMutation({
      id: factorInfo.id,
      data: values,
    });
  };
  const handleUpdatePaymentStep = async (values: any) => {
    updatePaymentStepMutation({
      id: factorInfo.id,
      data: values,
    });
  };
  const handleDeletePaymentStep = async (id: number) => {
    deletePaymentStepMutation({
      id: id,
    });
  };
  const handleUpdateFactor = async (
    expireDateInput: any = expireDate,
    description: string = factorInfo.description
  ) => {
    if (transform.checkPermission("can-create-invoice-item")) {
      updateFactorMutation({
        id: factorInfo.id,
        data: {
          expireDate: transform.toISOLocal(expireDateInput),
          description: description,
        },
      });
    }
  };
  const handleAcceptFactor = async () => {
    acceptFactorMutation(factorInfo.id, {
      onSuccess: () => {
        SnackbarUtils.success("فاکتور با موفقیت تایید شد");
      },
    });
  };

  const handleAcceptCustomer = async () => {
    acceptFactorByCustomerMutation(factorInfo.id, {
      onSuccess: () => {
        SnackbarUtils.success("فاکتور با موفقیت تایید شد");
      },
    });
  };
  const handlePayDone = async () => {
    changeFactorStatusMutation(
      {
        factorId: factorInfo.id,
        statusSlug: "paymentDone",
        name: "تایید نهایی توسط ادمین",
        description: "فاکتور توسط ادمین تایید نهایی شد",
      },
      {
        onSuccess: () => {
          SnackbarUtils.success("فاکتور با موفقیت تایید نهایی شد");
        },
      }
    );
  };
  const handleCancelCustomer = async () => {
    // try {
    //     const response = await financialService.cancelFactorByCustomer(factorInfo.id);
    //     if (response) {
    //         await getFactor()
    //     }
    //     //snackbar
    //     SnackbarUtils.success("فاکتور با موفقیت لغو شد")
    // } catch (e) {
    // }
  };

  return (
    <div className="w-full h-full max-w-[calc(100vw-165px)] print:max-w-[100vw]">
      {(isPending || queryClient.isMutating() > 0) && <FullscreenLoading />}
      {(factorStatus?.slug === "customerPending" ||
        factorStatus?.slug === "customerResubmitPending") && (
        <WarningPopup
          title={t("acceptFactorWarning")}
          open={acceptFactorPopup}
          onClose={() => {
            setAcceptFactorPopup(false);
          }}
          handleConfirm={() => {
            handleAcceptCustomer();
            setAcceptFactorPopup(false);
          }}
        />
      )}
      {factorInfo?.canCancel && (
        <WarningPopup
          title={t("cancelFactorWarning")}
          open={cancelFactorPopup}
          onClose={() => {
            setCancelFactorPopup(false);
          }}
          handleConfirm={() => {
            handleCancelCustomer();
            setCancelFactorPopup(false);
          }}
        />
      )}
      <WarningPopup
        title={t("payDoneWarning")}
        open={payDonePopup}
        onClose={() => {
          setPayDonePopup(false);
        }}
        handleConfirm={() => {
          handlePayDone();
          setPayDonePopup(false);
        }}
      />
      <Breadcrumb
        title={t("preFactor")}
        handleBack={() => Navigate("/finance")}
        actions={
          <>
            {transform.checkPermission("can-change-invoice-status") &&
              factorStatus?.slug !== "paymentDone" &&
              factorPayments?.allHavePrice && (
                <div className="w-[150px] me-3">
                  <Button
                    text={t("payDone")}
                    onClick={() => {
                      setPayDonePopup(true);
                    }}
                  />
                </div>
              )}
            <div className="w-[150px]">
              <Button
                icon={<Printer />}
                text={t("printFactor")}
                onClick={() => setIsPrint(true)}
                bordered
              />
            </div>
          </>
        }
      />
      {factorInfo && factorStatus && (
        <>
          {factorStatus.slug === "salesResubmitPending" &&
            transform.checkPermission("can-create-invoice-status") && (
              <>
                <ChangeLogDialog
                  open={openLogDialog}
                  handleClose={() => {
                    setOpenLogDialog(false);
                  }}
                  data={factorInfo.statuses}
                />
                <div className="mb-8">
                  <Alert
                    title="تغییر در سفارش توسط مشتری"
                    type="warning"
                    text=""
                    actions={
                      <div
                        onClick={() => setOpenLogDialog(true)}
                        className="cursor-pointer"
                      >
                        مشاهده تغییرات
                      </div>
                    }
                  />
                </div>
              </>
            )}

          <div className="mb-8">
            <FactorInfo factorInfo={factorInfo} factorStatus={factorStatus} />
          </div>
          <div className="mb-8">
            <FactorItems
              factorInfo={factorInfo}
              handleAddFactorItem={handleAddFactorItem}
              handleEditFactorItem={handleEditFactorItem}
              handleDeleteFactorItem={handleDeleteFactorItem}
              printing={isPrint}
            />
          </div>
          <div className="mb-8">
            <Section headerTitle={t("description") || ""} printPadding>
              <div className="flex flex-col items-start justify-start w-full h-full">
                <label className="text-[16px] mb-2 ms-1 text-text-600 print:hidden">
                  {t("description")}
                </label>
                <div className="w-full h-full">
                  {transform.checkPermission("can-create-invoice-item") ? (
                    <textarea
                      className="w-full h-full p-4 text-base text-gray-700 border border-text-300 rounded outline-none resize-none focus:ring-1 focus:ring-primary-light focus:border-primary-dark"
                      placeholder={t("enterDescription") || ""}
                      rows={4}
                      value={description}
                      readOnly={
                        !transform.checkPermission("can-create-invoice-item")
                      }
                      onChange={(e) => {
                        transform.checkPermission("can-create-invoice-item") &&
                          setDescription(e.target.value);
                        // setFactorInfo({...factorInfo, description: e.target.value})
                      }}
                    />
                  ) : (
                    <div className=" w-full text-start h-full p-4 text-base text-gray-700 border border-text-300 rounded outline-none resize-none focus:ring-1 focus:ring-primary-light focus:border-primary-dark">
                      {factorInfo.description}
                    </div>
                  )}
                </div>
              </div>
            </Section>
          </div>
          {factorPayments &&
            (transform.checkPermission("can-view-all-payment-steps") ||
              factorPayments?.data?.length > 0) && (
              <div className="mb-8">
                <FactorPayments
                  code={code}
                  handleUpdatePaymentStep={handleUpdatePaymentStep}
                  handleAddPaymentStep={handleAddPaymentStep}
                  handleDeletePaymentStep={handleDeletePaymentStep}
                />
              </div>
            )}

          <div className="mb-8">
            <Section>
              <div className="w-full flex items-center justify-between">
                <div className="w-[340px]">
                  {expireDate && (
                    // {transform.checkPermission("can-change-invoice-status") && (

                    <Datepicker
                      label={t("factorExpireDate")}
                      name="expireDate"
                      disablePast
                      disabled={true}
                      formik={{
                        values: {
                          expireDate: expireDate,
                        },
                        // setFieldValue: (name: string, value: any) => {
                        //   setExpireDate(value);
                        //   handleUpdateFactor(value);
                        // },
                      }}
                      // placeholder={"تاریخ اعتبار فاکتور را وارد کنید"}
                    />
                  )}
                </div>
                {transform.checkPermission("can-change-invoice-status") ? (
                  <Tooltip
                    title={
                      factorPayments?.status !== "success" ? (
                        <Typography>{factorPayments?.warning}</Typography>
                      ) : (
                        ""
                      )
                    }
                  >
                    <div className="w-[190px] me-3">
                      {(factorStatus.slug === "salesPending" ||
                        factorStatus.slug === "salesResubmitPending" ||
                        factorStatus.slug === "completePending") && (
                        <Button
                          text={t("acceptFactorForPayment")}
                          onClick={handleAcceptFactor}
                          disabled={factorPayments?.status !== "success"}
                        />
                      )}
                    </div>
                  </Tooltip>
                ) : (
                  <div className="flex items-center">
                    {(factorStatus.slug == "customerPending" ||
                      factorStatus.slug == "customerResubmitPending") && (
                      <>
                        {factorInfo.canCancel && (
                          <div className="w-[190px] me-3">
                            <Button
                              text={t("cancelFactor")}
                              simple
                              onClick={() => {
                                setCancelFactorPopup(true);
                              }}
                              disabled={factorPayments?.status !== "success"}
                            />
                          </div>
                        )}
                        <div className="w-[190px] me-3">
                          <Button
                            text={t("acceptFactor")}
                            onClick={() => {
                              setAcceptFactorPopup(true);
                            }}
                            disabled={factorPayments?.status !== "success"}
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </Section>
          </div>
        </>
      )}
    </div>
  );
};
export default EditFactor;
