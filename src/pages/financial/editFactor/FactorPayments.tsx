import Alert from "components/alert/Alert";
import transform from "app/utils/transform"
import Section from "components/section/Section"
import { useTranslation } from "react-i18next";
import RadioGroup from "components/form/RadioGroup";
import { useEffect, useState } from "react";
import PaymentStep from "components/financial/PaymentStep";
import EditPaymentStepDialog from "components/financial/EditPaymentStepDialog";
import DeletePopup from "components/popup/DeletePopup";

const FactorPayments = ({
    factorInfo,
    factorStatus,
    paymentsInfo,
    handleAddPaymentStep,
    handleUpdatePaymentStep,
    handleDeletePaymentStep
}: any) => {
    const { t } = useTranslation("common");
    const [paymentSteps, setPaymentSteps] = useState<any>()
    const [openEditPaymentDialog, setOpenEditPaymentDialog] = useState<boolean>(false)
    const [selectedPaymentStep, setSelectedPaymentStep] = useState<any>()
    const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false)
    useEffect(() => {
        if (paymentsInfo) {
            if (paymentsInfo.data.length > 0) {
                setPaymentSteps(paymentsInfo.data)
            } else {
                setPaymentSteps([
                    {
                        factor_id: factorInfo.id,
                        status: { name: 'در انتظار تعریف', slug: 'define pending' },
                        step_number: 1,
                    }
                ])
            }
        }

    }, [paymentsInfo])
    const handleOpenEditPaymentStep = (step: any) => {
        setSelectedPaymentStep(step)
        setOpenEditPaymentDialog(true)
        console.log("step", step)
    }
    const canViewPaymentSteps = () => {
        if (transform.checkPermission("can-view-all-payment-steps")) {
            return {
                result: true,
                message: "",
                type: "success"
            }
        } else {
            if (paymentsInfo.status == "success") {
                switch (factorStatus.slug) {
                    case "salesPending":
                    case "salesResubmitPending":
                    case "completePending":
                        return {
                            result: false,
                            message: t("waitForAdmin"),
                            type: "error"
                        };
                    case "customerPending":
                    case "customerResubmitPending":
                        return {
                            result: true,
                            message: t("firstAcceptFactor"),
                            type: "warning"
                        };
                    case "customerFailed":
                    case "failed":
                        return {
                            result: false,
                            message: t("factorFailed"),
                            type: "error"
                        };
                    case "customerAccept":
                    case "paymentSuccess":
                    case "paymentPending":
                        return {
                            result: true,
                            message: "",
                            type: "success"
                        }
                    case "paymentDone":
                        return {
                            result: true,
                            message: "",
                            type: "success"
                        }
                    default:
                        return {
                            result: false,
                            message: "unknown status",
                            type: "error"
                        }
                }
            } else {
                return {
                    result: false,
                    message: t("waitForAdmin"),
                    type: "error"
                }
            }
        }
    }
    return (
        <>
            {transform.checkPermission("can-update-payment-step") && <EditPaymentStepDialog
                open={openEditPaymentDialog}
                handleClose={() => { setOpenEditPaymentDialog(false); setSelectedPaymentStep(null); }}
                handleSubmit={(values) => {
                    values.id ? handleUpdatePaymentStep(values).then(() => {
                        setOpenEditPaymentDialog(false);
                        setSelectedPaymentStep(null);
                    }) : handleAddPaymentStep(values).then(() => {
                        setOpenEditPaymentDialog(false);
                        setSelectedPaymentStep(null);
                    })
                }}
                data={selectedPaymentStep}
            />}
            {transform.checkPermission("can-delete-payment-step") && <DeletePopup
                title={t("deleteFactorItemConfirmation")}
                open={openDeletePopup}
                onClose={() => { setOpenDeletePopup(false); setSelectedPaymentStep(null); }}
                handleConfirm={() => { handleDeletePaymentStep(selectedPaymentStep.id); setOpenDeletePopup(false) }}
            />}
            <Section headerTitle={t("paymentsInfo") || ""}>
                {canViewPaymentSteps().result &&
                    <div className="w-full flex items-center justify-start bg-text-200 rounded-[6px] px-6 py-7">
                        <div className="flex items-center pl-6 border-l border-l-text-400">
                            <p>
                                {t("sum")}: <span className="font-bold text-[18px] text-text-900">
                                    {transform.toPersianDigitsPutCommas(paymentsInfo.factor_sum_price.toString())} تومان
                                </span>
                            </p>
                        </div>
                        {/* wallet info ... */}
                        {/* <div className="flex items-center px-3 border-l border-l-text-400">
                    <p>
                        {t("sum")}: <span>
                            {transform.toPersianDigitsPutCommas(paymentsInfo.factor_sum_price.toString())} تومان
                        </span>
                    </p>
                </div> */}
                        <div className="flex items-center px-6 border-l border-l-text-400">
                            <p className="text-success-primary">
                                {t("discount")}: <span className="font-bold text-[18px] text-success-primary">
                                    {transform.toPersianDigitsPutCommas(paymentsInfo.factor_sum_off_price.toString())} تومان
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center pr-6">
                            <p>
                                {t("payable")}: <span className="font-bold text-[18px] text-text-900">
                                    {transform.toPersianDigitsPutCommas(paymentsInfo.factor_total_price.toString())} تومان
                                </span>
                            </p>
                        </div>

                    </div>
                }
                {(paymentsInfo.status == "warning" && transform.checkPermission("can-view-all-payment-steps")) && <div className="mt-4">
                    <Alert title="وضعیت مراحل پرداخت" text={paymentsInfo.warning} type="warning" />
                </div>}
                {(paymentsInfo.allHavePrice && paymentSteps) &&
                    <div className="mt-4">
                        {transform.checkPermission("can-view-all-payment-steps") &&
                            <div className="w-1/2 mb-4">
                                <RadioGroup
                                    className="group"
                                    labelClass="!text-[16px]"
                                    name={'type'}
                                    label={t("selectPaymentSteps")}
                                    options={[
                                        {
                                            label: "یک مرحله",
                                            value: "one"
                                        },
                                        {
                                            label: "دو مرحله",
                                            value: "two"
                                        },


                                    ]}
                                    formik={{
                                        values: {
                                            type: paymentSteps.length == 1 ? "one" : paymentSteps.length == 2 ? "two" : undefined
                                        },
                                        handleChange: (e: any) => {
                                            if (e.target.value === 'one') {
                                                if (paymentSteps.length > 1) {
                                                    if (paymentSteps[1].id) {
                                                        setSelectedPaymentStep(paymentSteps[1])
                                                        setOpenDeletePopup(true)
                                                        //prevent to cahnge radio button
                                                    } else {
                                                        setPaymentSteps([paymentSteps[0]])
                                                    }
                                                }
                                            } else if (e.target.value === 'two') {
                                                if (paymentSteps.length < 2) {
                                                    setPaymentSteps([...paymentSteps, {
                                                        factor_id: factorInfo.id,
                                                        status: { name: 'در انتظار تعریف', slug: 'define pending' },
                                                        step_number: 2,
                                                    }])
                                                }
                                            }

                                        },
                                        handleBlur: () => { }
                                    }}
                                />
                            </div>
                        }

                        {
                            canViewPaymentSteps().message &&
                            <div className="my-4">
                                <Alert title={"هشدار"} text={canViewPaymentSteps().message} type={canViewPaymentSteps().type} />
                            </div>
                        }
                        {canViewPaymentSteps().result &&
                            paymentSteps.map((item: any, index: number) => {
                                return (
                                    <div key={index} className="mb-4">
                                        <PaymentStep stepInfo={item} editPaymentStep={handleOpenEditPaymentStep} />
                                    </div>
                                )
                            })}
                    </div>
                }


            </Section>
        </>
    )
}

export default FactorPayments
