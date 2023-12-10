import transform from "app/utils/transform"
import Section from "components/section/Section"
import { useTranslation } from "react-i18next";

const FactorInfo = ({ factorStatus, factorInfo }: any) => {
    const { t } = useTranslation("common");
    return (
        <Section headerTitle={t("factorInfo") || ""}
            headerActions={
                <div className={`px-3 py-2 h-9 
        ${factorStatus?.style}
        rounded-[20px] flex items-center justify-center text-[13px]`}>
                    {factorInfo.last_status?.factor_status_enum.name}
                </div>
            }
        >
            <div className="w-full flex items-center justify-between ">
                <p className="inline-flex text-[14px] text-text-500">
                    {t("customerName")}
                    <span className="mr-3 text-text-900">{factorInfo.customer_full_name}</span>
                </p>

                <p className="inline-flex text-[14px] text-text-500">
                    {t("factorNo")}
                    <span className="mr-3 text-text-900">{factorInfo.code}</span>
                </p>

                <p className="inline-flex text-[14px] text-text-500">
                    {t("createdAt")}
                    <span className="mr-3 text-text-900">
                        {
                            transform.renderChatTime(transform.dateToTimestamp(factorInfo.created_at), true, true)
                        }
                    </span>
                </p>

                <p className="inline-flex text-[14px] text-text-500">
                    {t("expireAt")}
                    <span className="mr-3 text-text-900">
                        {
                            transform.renderChatTime(transform.dateToTimestamp(factorInfo.expire_date), true, true)
                        }
                    </span>
                </p>

                <p className="inline-flex text-[14px] text-text-500">
                    {t("creatorUser")}
                    <span className="mr-3 text-text-900">
                        {
                            factorInfo.order_group.user.name ?
                                factorInfo.order_group.user.name + " " + factorInfo.order_group.user.last_name :
                                factorInfo.order_group.user.mobile
                        }
                    </span>
                </p>
            </div>

        </Section>
    )
}

export default FactorInfo
