import transform from "app/utils/transform";
import { Edit, Eye, Menu, More, Trash } from "iconsax-react";
import TableAction from "../table/TableAction";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";

type PaymentStepProps = {
    stepInfo: any;
    editPaymentStep: (stepInfo: any) => void;
    handlePayStep: (stepInfo: any) => void;
    canViewPaymentStepsType?: String | null;
};
const PaymentStep = ({ stepInfo, editPaymentStep, handlePayStep, canViewPaymentStepsType }: PaymentStepProps) => {
    const style = transform.renderStatusStyle(stepInfo.status.description)
    const { t } = useTranslation("common")
    const tableActions = (row: any, name: string) => {
        console.log("row", row)
        console.log("name", name)

        switch (name) {
            case "viewDetails":
                break;
            case "edit":
                editPaymentStep(stepInfo)
                break;
            default:
                break;
        }
    }

    return (
        <div className="px-8 w-full border border-text-300 rounded-[10px] h-[108px] flex items-center justify-between">
            <div className="flex items-center">
                <div>
                    <p className="font-bold">
                        مرحله {stepInfo.step_number == 1 ? "اول" : "دوم"}
                    </p>
                </div>

                <div className={`mx-14 text-[14px] p-2 rounded-full ${style}`}>
                    {stepInfo.status.name}
                </div>
                <div className="flex flex-col items-start justify-start me-14">
                    <p className="text-text-500 mb-2">
                        قیمت قابل پرداخت
                    </p>
                    <p className="font-bold text-text-900">
                        {stepInfo.payable_price ? transform.toPersianDigitsPutCommas(stepInfo.payable_price.toString()) + " " + t("toman") : t("notDetermined")}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start me-14">
                    <p className="text-text-500 mb-2">
                        قیمت پرداخت شده
                    </p>
                    <p className="font-bold text-text-900">
                        {
                            stepInfo.pay_status == 'paid' ?
                                transform.toPersianDigitsPutCommas(stepInfo.payable_price.toString()) + " " + t("toman")
                                :
                                "پرداخت نشده"
                        }
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start me-14">
                    <p className="text-text-500 mb-2">
                        شیوه پرداخت
                    </p>
                    <p className="font-bold text-text-900">

                        {
                            stepInfo.pay_status == 'paid' ?
                                t(stepInfo.last_payment.transaction.payment_method)
                                :
                                "پرداخت نشده"

                        }
                    </p>
                </div>


            </div>
            {
                (stepInfo.canPay && canViewPaymentStepsType == 'success') &&
                <div className="w-[150px]">
                    <Button
                        text={t("pay")}
                        onClick={() => handlePayStep(stepInfo)}
                        sm
                    />

                </div>}
            <div>
                <TableAction
                    items={[
                        {
                            icon: <Eye variant={"Bold"} />,
                            text: t("viewDetails"),
                            name: "viewDetails",
                        },
                        transform.checkPermission("can-update-payment-step") && {
                            icon: <Edit variant="Bold" />,
                            text: t("edit"),
                            name: "edit",
                        },

                    ].filter(Boolean)}
                    handleAction={tableActions}
                    row={stepInfo}
                    simple
                />
            </div>

        </div>
    )
}
export default PaymentStep;