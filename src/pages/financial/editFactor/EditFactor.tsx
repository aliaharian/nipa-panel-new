import Button from "components/button/Button";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useNavigate, useParams } from "react-router-dom";
import { ArchiveTick, Eye, Printer } from "iconsax-react";
import { useTranslation } from "react-i18next";
import Section from "components/section/Section";
import financialService from "app/redux/financial/service";
import { useEffect, useState } from "react";
import transform from "app/utils/transform";
import FactorInfo from "./FactorInfo";
import FactorItems from "./FactorItems";
import FactorPayments from "./FactorPayments";
import { setCollapseMenu } from "app/redux/application/actions";
import { useAppDispatch } from "app/redux/hooks";
import Datepicker from "components/form/Datepicker";
const EditFactor = () => {
    const Navigate = useNavigate()
    const { t } = useTranslation()
    const { code } = useParams();
    const Dispatch = useAppDispatch()
    const [factorInfo, setFactorInfo] = useState<any>()
    const [factorStatus, setFactorStatus] = useState<any>()
    const [factorPayments, setFactorPayments] = useState<any>()
    const [expireDate , setExpireDate] = useState<any>(null)
    const getFactor = async () => {
        try {
            if (code) {
                // const res = await axios.get(``)
                const response = await financialService.getFactorInfo(code);
                console.log("response", response)
                setFactorInfo(response)
                const status = response.last_status?.factor_status_enum;
                const style = transform.renderStatusStyle(status?.description)
                setFactorStatus({
                    name: response.last_status?.factor_status_enum.name,
                    style
                })
                await getFactorPayments(response.id);

            }
        } catch (error) {

        }
    }

    const getFactorPayments = async (id: number) => {
        try {
            const response = await financialService.getFactorPaymentSteps(id);
            console.log("response", response)
            setFactorPayments(response)
        } catch (error) {

        }
    }

    useEffect(() => {
        Dispatch(setCollapseMenu(true))
        getFactor()
    }, [])

    useEffect(()=>{
        if(factorInfo){
            setExpireDate(
                new Date(factorInfo.expire_date)
            )
        }
    },[factorInfo])


    return (
        <div className="w-full h-full">
            <Breadcrumb title="پیش فاکتور" handleBack={() => Navigate("/finance")}
                actions={
                    <>
                        <div className="w-[150px] ml-3">
                            <Button
                                text={t("changeState")}
                                onClick={() => { }}
                            />
                        </div>
                        <div className="w-[150px]">
                            <Button
                                icon={<Printer />}
                                text={t("printFactor")}
                                onClick={() => { }}
                                bordered
                            />
                        </div>

                    </>
                }
            />
            {(factorInfo && factorStatus) &&
                <>
                    <div className="mb-8">
                        <FactorInfo factorInfo={factorInfo} factorStatus={factorStatus} />

                    </div>
                    <div className="mb-8">

                        <FactorItems factorInfo={factorInfo} />

                    </div>
                    <div className="mb-8">

                        <Section headerTitle={t("description") || ""}>

                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <label className="text-[16px] mb-2 mr-1 text-text-600">
                                    {t("description")}
                                </label>
                                <div className="w-full h-full">
                                    <textarea
                                        className="w-full h-full p-4 text-base text-gray-700 border border-gray-300 rounded outline-none resize-none focus:ring-1 focus:ring-primary-light focus:border-primary-dark"
                                        placeholder={t("enterDescription") || ""}
                                        rows={4}
                                    />
                                </div>
                            </div>

                        </Section>
                    </div>
                    {factorPayments &&
                        <div className="mb-8">
                            <FactorPayments paymentsInfo={factorPayments} factorInfo={factorInfo} factorStatus={factorStatus} />
                        </div>}

                    <div className="mb-8">
                        <Section>
                            <div className="w-full flex items-center justify-between">
                                <div className="w-[340px]">
                                    <Datepicker
                                        label="تاریخ سررسید فاکتور"
                                        name="expireDate"
                                        formik={{
                                            values: {
                                                expireDate: expireDate,
                                            },
                                            setFieldValue: (name:string , value:any) => {
                                                console.log(value)
                                                setExpireDate(value)
                                             },
                                        }}
                                        placeholder={"تاریخ سررسید فاکتور را وارد کنید"}
                                    />
                                </div>
                                <div className="w-[190px] ml-3">
                                    <Button
                                        text={t("submitFactor")}
                                        onClick={() => { }}
                                    />
                                </div>

                            </div>
                        </Section>
                    </div>
                </>
            }
        </div>
    )
}
export default EditFactor;