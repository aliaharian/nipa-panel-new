import transform from "app/utils/transform";
import { Edit, Menu, More, Trash } from "iconsax-react";
import TableAction from "../table/TableAction";

const PaymentStep = ({ stepInfo }: { stepInfo: any }) => {
    let style;
    switch (stepInfo.status.description) {
        case "success":
            style = "bg-success-secondary text-success-primary "
            break;
        case "warning":
            style = "bg-warning-secondary text-warning-text "
            break;
        case "error":
            style = "bg-error-secondary text-error-primary "
            break;
        case "info":
            style = "bg-info-secondary text-info-primary "
            break;
        default:
            style = "bg-text-300 text-text-600 "
            break;
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
                <div className="flex flex-col items-start justify-start ml-14">
                    <p className="text-text-500 mb-2">
                        قیمت قابل پرداخت
                    </p>
                    <p className="font-bold text-text-900">
                        {stepInfo.payable_price ? transform.toPersianDigitsPutCommas(stepInfo.payable_price.toString()) + " تومان" : "تعریف نشده"}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start ml-14">
                    <p className="text-text-500 mb-2">
                        قیمت پرداخت شده
                    </p>
                    <p className="font-bold text-text-900">
                        {stepInfo.payable_price ? transform.toPersianDigitsPutCommas(stepInfo.payable_price.toString()) + " تومان" : "تعریف نشده"}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start ml-14">
                    <p className="text-text-500 mb-2">
                        شیوه پرداخت
                    </p>
                    <p className="font-bold text-text-900">
                        {stepInfo.payable_price ? transform.toPersianDigitsPutCommas(stepInfo.payable_price.toString()) + " تومان" : "تعریف نشده"}
                    </p>
                </div>


            </div>
            <div>
                <TableAction
                    items={[
                        {
                            icon: <Edit variant="Bold" />,
                            text: "ویرایش پیش فاکتور",
                            name: "edit",
                        },
                        {
                            icon: <Trash variant={"Bold"} />,
                            text: "حذف",
                            name: "delete",
                        },
                    ].filter(Boolean)}
                    handleAction={()=>{}}
                    row={""}
                    simple
                />
            </div>

        </div>
    )
}
export default PaymentStep;