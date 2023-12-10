import Alert from "components/alert/Alert";
import transform from "app/utils/transform"
import Section from "components/section/Section"
import { useTranslation } from "react-i18next";
import RadioGroup from "components/form/RadioGroup";
import { useEffect, useState } from "react";
import PaymentStep from "components/financial/PaymentStep";

const FactorPayments = ({ factorStatus, factorInfo, paymentsInfo }: any) => {
    const { t } = useTranslation("common");
    const [paymentSteps, setPaymentSteps] = useState<any>()
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
    return (
        <Section headerTitle={t("paymentsInfo") || ""}>
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
                            {transform.toPersianDigitsPutCommas(paymentsInfo.factor_sum_price.toString())} تومان
                        </span>
                    </p>
                </div>
                <div className="flex items-center pr-6">
                    <p>
                        {t("payable")}: <span className="font-bold text-[18px] text-text-900">
                            {transform.toPersianDigitsPutCommas(paymentsInfo.factor_sum_price.toString())} تومان
                        </span>
                    </p>
                </div>

            </div>
            {paymentsInfo.status == "warning" && <div className="mt-4">
                <Alert title="وضعیت مراحل پرداخت" text={paymentsInfo.warning} type="warning" />
            </div>}
            {(paymentsInfo.allHavePrice && paymentSteps) &&
                <div className="mt-4">
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
                                            setPaymentSteps([paymentSteps[0]])
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
                    {
                        paymentSteps.map((item: any, index: number) => {
                            return (
                                <div key={index} className="mb-4">
                                    <PaymentStep stepInfo={item}/>
                                </div>
                            )
                        })
                    }



                </div>}


        </Section>
    )
}

export default FactorPayments
