import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import transform from "app/utils/transform";
import Button from "components/button/Button";
import { DocumentText } from "iconsax-react";
import { useOrdersDetail } from "app/queries/orders/hooks";

const OrderDetails = () => {
  const Navigate = useNavigate();
  let { orderId } = useParams();
  const { t } = useTranslation();
  const { data: order } = useOrdersDetail(parseInt(orderId || ""));
  return (
    <div className="w-full h-full">
      <Breadcrumb title="جزییات سفارش" handleBack={() => Navigate("/orders")} />
      {order ? (
        <div className={`w-full flex flex-col bg-white rounded-[6px]`}>
          <div className="px-[20px] py-[30px] flex items-center justify-between border-b border-text-400 w-full">
            <div>
              {t("orderCode")} : {orderId}
            </div>
            <div className="w-[150px]">
              <Button
                sm
                simple
                icon={<DocumentText />}
                href={"/"}
                bordered
                text={t("viewFactor")}
              />
            </div>
          </div>
          <div className="px-[20px] py-[25px] w-full">
            <div className="flex items-center justify-between flex-wrap border-b border-text-400 pb-[20px]">
              <div className="flex items-center">
                <p className="text-[14px] text-text-500">{t("userName")}</p>
                <p className="text-[14px] text-text-700 ms-2">
                  {order.order.user.name
                    ? order.order.user.name + " " + order.order.user.last_name
                    : order.order.user.mobile}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[14px] text-text-500">{t("mobilePhone")}</p>
                <p className="text-[14px] text-text-700 ms-2">
                  {order.order.user.mobile}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[14px] text-text-500">{t("submitDate")}</p>
                <p className="text-[14px] text-text-700 ms-2">
                  {transform.renderChatTime(
                    transform.dateToTimestamp(order.order.created_at)
                  )}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[14px] text-text-500">{t("recieverName")}</p>
                <p className="text-[14px] text-text-700 ms-2">
                  {order.order.customer_name}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start flex-wrap border-b border-text-400 py-[20px] gap-y-[25px] gap-x-[45px]">
              {order?.userAnswers?.map((item: any, index: number) => {
                const data = item[0];
                return (
                  <div className="flex items-center" key={index}>
                    <p className="text-[14px] text-text-500">
                      {data.form_field.label}:
                    </p>
                    <p className="text-[14px] text-text-700 ms-2">
                      {item.map((val: any, index: number) => {
                        if (val.form_field.type.type === "uploadFile") {
                          return (
                            <a
                              href={
                                process.env.REACT_APP_BASE_URL +
                                "/files/" +
                                val.answer
                              }
                              className="text-white font-bold text-[14px] text-text-700 mx-2 bg-primary-main rounded-[8px] px-3 py-2"
                              key={index}
                              target="_blank"
                              rel="noreferrer"
                            >
                              دانلود پیوست
                            </a>
                          );
                        } else if (val.form_field.type.type === "datePicker") {
                          return transform.renderChatTime(transform.dateToTimestamp(val.answer),true,true);
                        } else {
                          let tmp = val.answerObject
                            ? val.answerObject.name || val.answerObject.label
                            : val.answer;

                          return index < item.length - 1 ? tmp + " - " : tmp;
                        }
                      })}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <p>please wait...</p>
      )}
    </div>
  );
};
export default OrderDetails;
