import DropDown from "components/form/Dropdown";
import transform from "app/utils/transform";
import { ArrowDown2, ArrowDown3 } from "iconsax-react";
import { LegacyRef, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetPaymentStatus } from "app/queries/financial/hooks";
import TextField from "components/form/TextField";

export interface IPaymentAccordion {
  id:number;
  admin_description: string | null;
  paid_price: number;
  pay_method: string;
  payable_price: number;
  file_hash_code?: string;
  payment_status: {
    id: number;
    name: string;
    slug: string;
    meta?: any;
    description: string;
    created_at: string;
  };
  tracking_code: string;
  wallet_payment_amount: number;
  created_at: string;
  last?: boolean;
  formik: any;
}
const PaymentInfoItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <p>{label}</p>
      <div className="text-text-500 text-start mt-2 py-[14px] px-4 border border-text-400 rounded-[6px] bg-text-200 w-full">
        {value}
      </div>
    </div>
  );
};
const PaymentAccordion = (props: IPaymentAccordion) => {
  const {
    paid_price,
    created_at,
    payment_status,
    payable_price,
    pay_method,
    tracking_code,
    wallet_payment_amount,
    file_hash_code,
    admin_description,
    last,
    formik,
  } = props;
  const [open, setOpen] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { data: statuses } = useGetPaymentStatus();

  return (
    <div className="border border-text-400 rounded-[6px]">
      <div
        onClick={() => setOpen(!open)}
        className="py-[14px] px-4 flex items-center justify-between"
      >
        <div className="flex">
          <p>{payment_status.name}</p>
          <p className="text-text-500 mr-2">
            (
            {transform.toPersianDigits(
              transform.renderChatTime(transform.dateToTimestamp(created_at))
            )}
            )
          </p>
        </div>
        <div className="flex items-center">
          <div
            className={`text-[13px] py-2 px-3 rounded-[23px] ${transform.renderStatusStyle(
              payment_status.description
            )}`}
          >
            {payment_status.name}
          </div>
          <div
            className={`
            ${open ? "rotate-180" : ""}
            w-8 h-8 mr-6 flex items-center justify-center hover:bg-text-300 svg:text-text-500 svg:w-6 svg:h-6 rounded-[8px] transition-all cursor-pointer`}
          >
            <ArrowDown2 />
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all`}
        style={{ height: open ? bodyRef?.current?.clientHeight : 0 }}
      >
        <div className="w-full py-2" ref={bodyRef}>
          <div className="grid grid-cols-2 px-4 pt-4 gap-x-5 gap-y-6">
            <PaymentInfoItem
              label={t("payable_price")}
              value={`${transform.toPersianDigitsPutCommas(
                payable_price.toString()
              )} ${t("toman")}`}
            />
            <PaymentInfoItem
              label={t("paid_price")}
              value={`${transform.toPersianDigitsPutCommas(
                paid_price.toString()
              )} ${t("toman")}`}
            />
            <PaymentInfoItem
              label={t("wallet_payment_amount")}
              value={`${transform.toPersianDigitsPutCommas(
                wallet_payment_amount.toString()
              )} ${t("toman")}`}
            />
            <PaymentInfoItem
              label={t("pay_method")}
              value={`${t(pay_method)}`}
            />
            <PaymentInfoItem
              label={t("tracking_code")}
              value={tracking_code || t("dontHave")}
            />
            <div></div>
            {transform.checkPermission("can-update-payment-step") &&
              payment_status.slug === "pendingVerify" && (
                <DropDown
                  className="group"
                  name={"status"}
                  label={t("status")}
                  lgText
                  options={[
                    {
                      value: 1,
                      label: <p>{t("accept")}</p>,
                    },
                    {
                      value: 0,
                      label: <p>{t("not accept")}</p>,
                    },
                  ]}
                  placeholder={t("select")}
                  formik={formik}
                />
              )}
          </div>
          <div className="grid grid-cols-1 px-4 pt-6 pb-4 gap-y-6">
            {file_hash_code && (
              <div className="flex flex-col items-start justify-start w-full">
                <p>{t("payerFile")}</p>
                <div className="w-full border border-text-400 rounded-[6px] mt-2 bg-[#FEEFD5] h-[120px] flex items-center justify-center">
                  <a
                    href={`http://localhost:8000/api/v1/files/${file_hash_code}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold hover:text-primary-main"
                  >
                    دانلود فایل
                  </a>
                </div>
              </div>
            )}
            <div className="flex flex-col items-start justify-start w-full">
              <p>{t("financialUnitDescription")}</p>
              <div
                className={`w-full mt-2 border border-text-400 rounded-[6px] ${
                  transform.checkPermission("can-update-payment-step") && last
                    ? "h-auto"
                    : "h-[120px]"
                } flex items-start justify-start p-4 `}
              >
                {transform.checkPermission("can-update-payment-step") &&
                last ? (
                  <TextField
                    formik={formik}
                    label={""}
                    name="adminDesc"
                    multiline
                    normal
                  />
                ) : (
                  <p>{admin_description || t("dontHave")}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentAccordion;
