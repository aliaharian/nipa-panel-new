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
import { factorItem } from "app/models/financial";
import FullscreenLoading from "components/loading/FullscreenLoading";
import { Tooltip, Typography } from "@mui/material";
import { error } from "console";
import SnackbarUtils from "app/utils/SnackbarUtils";
import Alert from "components/alert/Alert";
import ChangeLogDialog from "components/financial/ChangeLogDialog";
import WarningPopup from "components/popup/WarningPopup";

const EditFactor = () => {
    const Navigate = useNavigate()
    const { t } = useTranslation()
    const { code } = useParams();
    const Dispatch = useAppDispatch()
    const [factorInfo, setFactorInfo] = useState<any>()
    const [factorStatus, setFactorStatus] = useState<any>()
    const [factorPayments, setFactorPayments] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [expireDate, setExpireDate] = useState<any>(null)
    const [openLogDialog, setOpenLogDialog] = useState<boolean>(false)
    const [acceptFactorPopup, setAcceptFactorPopup] = useState<boolean>(false)
    const [cancelFactorPopup, setCancelFactorPopup] = useState<boolean>(false)
    //debaunced function for update factor
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (factorInfo) {
                handleUpdateFactor(expireDate)
            }
        }, 3000);
        return () => clearTimeout(timeout);
    }, [factorInfo?.description])
    const getFactor = async () => {
        try {
            if (code) {
                // const res = await axios.get(``)
                const response = await financialService.getFactorInfo(code);
                setFactorInfo(response)
                const status = response.last_status?.factor_status_enum;
                const style = transform.renderStatusStyle(status?.description)
                setFactorStatus({
                    name: response.last_status?.factor_status_enum.name,
                    slug: response.last_status?.factor_status_enum.slug,
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
            setFactorPayments(response)
        } catch (error) {

        }
    }

    useEffect(() => {
        Dispatch(setCollapseMenu(true))
        getFactor()
    }, [])

    useEffect(() => {
        if (factorInfo) {
            setExpireDate(
                new Date(factorInfo.expire_date)
            )
        }
    }, [factorInfo])

    const handleAddFactorItem = async (values: factorItem) => {
        try {
            setLoading(true)
            const response = await financialService.addFactorItem(factorInfo.id, values);
            if (response) {
                await getFactor()
            }
        } catch (e) {

        }
        setLoading(false);
    }
    const handleEditFactorItem = async (values: factorItem) => {
        try {
            setLoading(true)
            const response = await financialService.updateFactorItem(factorInfo.id, values);
            if (response) {
                await getFactor()
            }
        } catch (e) {
        }
        setLoading(false);
    }
    const handleDeleteFactorItem = async (id: number) => {
        try {
            setLoading(true)
            const response = await financialService.deleteFactorItem(factorInfo.id, id);
            if (response) {
                await getFactor()
            }
        } catch (e) {

        }
        setLoading(false);
    }
    const handleAddPaymentStep = async (values: any) => {
        try {
            setLoading(true)
            const response = await financialService.addPaymentStep(factorInfo.id, values);
            if (response) {
                await getFactor()
            }
            setLoading(false);
            return true;
        } catch (e) {
            setLoading(false);
            throw new Error("error")
        }
    }
    const handleUpdatePaymentStep = async (values: any) => {
        try {
            setLoading(true)
            const response = await financialService.updatePaymentStep(factorInfo.id, values);
            if (response) {
                await getFactor()
            }
            setLoading(false);
            return true;
        } catch (e) {
            setLoading(false);
            throw new Error("error")
        }
    }
    const handleDeletePaymentStep = async (id: number) => {
        try {
            setLoading(true)
            const response = await financialService.deletePaymentStep(id);
            if (response) {
                await getFactor()
            }
        } catch (e) {

        }
        setLoading(false);
    }
    const handleUpdateFactor = async (expireDate: any) => {
        try {
            if (transform.checkPermission("can-create-invoice-item")) {
                setLoading(true)
                const response = await financialService.updateFactor(factorInfo.id, { expireDate: transform.toISOLocal(expireDate), description: factorInfo.description });
                if (response) {
                    await getFactor()
                }
            }
        } catch (e) {

        }
        setLoading(false);
    }
    const handleAcceptFactor = async () => {
        try {
            setLoading(true)
            const response = await financialService.acceptFactor(factorInfo.id);
            if (response) {
                await getFactor()
            }
            //snackbar
            SnackbarUtils.success("فاکتور با موفقیت تایید شد")
        } catch (e) {

        }
        setLoading(false);
    }

    const handleAcceptCustomer = async () => {
        // try {
        //     setLoading(true)
        //     const response = await financialService.acceptFactorByCustomer(factorInfo.id);
        //     if (response) {
        //         await getFactor()
        //     }
        //     //snackbar
        //     SnackbarUtils.success("فاکتور با موفقیت تایید شد")
        // } catch (e) {

        // }
        // setLoading(false);
    }
    const handleCancelCustomer = async () => {
        // try {
        //     setLoading(true)
        //     const response = await financialService.cancelFactorByCustomer(factorInfo.id);
        //     if (response) {
        //         await getFactor()
        //     }
        //     //snackbar
        //     SnackbarUtils.success("فاکتور با موفقیت لغو شد")
        // } catch (e) {

        // }
        // setLoading(false);
    }

    return (
        <div className="w-full h-full">
            {loading && <FullscreenLoading />}
            {(factorStatus?.slug == "customerPending" ||
                factorStatus?.slug == "customerResubmitPending"
            ) &&
                <WarningPopup
                    title={t("acceptFactorWarning")}
                    open={acceptFactorPopup}
                    onClose={() => { setAcceptFactorPopup(false); }}
                    handleConfirm={() => { handleAcceptCustomer(); setAcceptFactorPopup(false) }}
                />
            }
            {factorInfo?.canCancel
                &&
                <WarningPopup
                    title={t("cancelFactorWarning")}
                    open={cancelFactorPopup}
                    onClose={() => { setCancelFactorPopup(false); }}
                    handleConfirm={() => { handleCancelCustomer(); setCancelFactorPopup(false) }}
                />
            }
            <Breadcrumb title="پیش فاکتور" handleBack={() => Navigate("/finance")}
                actions={
                    <>
                        {transform.checkPermission("can-change-invoice-status") &&
                            <div className="w-[150px] ml-3">
                                <Button
                                    text={t("changeState")}
                                    onClick={() => { }}
                                />
                            </div>
                        }
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

                    {(factorStatus.slug == "salesResubmitPending" && transform.checkPermission("can-create-invoice-status")) &&
                        <>
                            <ChangeLogDialog
                                open={openLogDialog}
                                handleClose={() => { setOpenLogDialog(false) }}
                                data={factorInfo.statuses}
                            />
                            <div className="mb-8">
                                <Alert title="تغییر در سفارش توسط مشتری" type="warning"
                                    text=""
                                    actions={
                                        <div onClick={() => setOpenLogDialog(true)} className="cursor-pointer">
                                            مشاهده تغییرات
                                        </div>
                                    }
                                />

                            </div>
                        </>
                    }

                    <div className="mb-8">
                        <FactorInfo factorInfo={factorInfo} factorStatus={factorStatus} />

                    </div>
                    <div className="mb-8">

                        <FactorItems
                            factorInfo={factorInfo}
                            handleAddFactorItem={handleAddFactorItem}
                            handleEditFactorItem={handleEditFactorItem}
                            handleDeleteFactorItem={handleDeleteFactorItem}
                        />

                    </div>
                    <div className="mb-8">

                        <Section headerTitle={t("description") || ""}>

                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <label className="text-[16px] mb-2 mr-1 text-text-600">
                                    {t("description")}
                                </label>
                                <div className="w-full h-full">
                                    {transform.checkPermission("can-create-invoice-item") ? <textarea
                                        className="w-full h-full p-4 text-base text-gray-700 border border-text-300 rounded outline-none resize-none focus:ring-1 focus:ring-primary-light focus:border-primary-dark"
                                        placeholder={t("enterDescription") || ""}
                                        rows={4}
                                        value={factorInfo.description}
                                        readOnly={!transform.checkPermission("can-create-invoice-item")}
                                        onChange={(e) => {
                                            transform.checkPermission("can-create-invoice-item") &&
                                                setFactorInfo({ ...factorInfo, description: e.target.value })

                                        }}
                                    />
                                        :
                                        <div className=" w-full text-right h-full p-4 text-base text-gray-700 border border-text-300 rounded outline-none resize-none focus:ring-1 focus:ring-primary-light focus:border-primary-dark">
                                            {factorInfo.description}
                                        </div>
                                    }
                                </div>
                            </div>

                        </Section>
                    </div>
                    {factorPayments &&
                        <div className="mb-8">
                            <FactorPayments
                                paymentsInfo={factorPayments}
                                factorInfo={factorInfo}
                                factorStatus={factorStatus}
                                handleUpdatePaymentStep={handleUpdatePaymentStep}
                                handleAddPaymentStep={handleAddPaymentStep}
                                handleDeletePaymentStep={handleDeletePaymentStep}

                            />
                        </div>
                    }

                    <div className="mb-8">
                        <Section>
                            <div className="w-full flex items-center justify-between">
                                <div className="w-[340px]">
                                    {transform.checkPermission("can-change-invoice-status") &&
                                        <Datepicker
                                            label="تاریخ سررسید فاکتور"
                                            name="expireDate"
                                            formik={{
                                                values: {
                                                    expireDate: expireDate,
                                                },
                                                setFieldValue: (name: string, value: any) => {
                                                    setExpireDate(value)
                                                    handleUpdateFactor(value)
                                                },

                                            }}
                                            placeholder={"تاریخ سررسید فاکتور را وارد کنید"}
                                        />}
                                </div>
                                {transform.checkPermission("can-change-invoice-status") ?
                                    <Tooltip title={
                                        factorPayments?.status !== "success" ?
                                            <Typography>
                                                {factorPayments?.warning}
                                            </Typography>
                                            :
                                            ""}>
                                        <div className="w-[190px] ml-3">

                                            {(factorStatus.slug == "salesPending" ||
                                                factorStatus.slug == "salesResubmitPending" ||
                                                factorStatus.slug == "completePending"
                                            ) &&
                                                <Button
                                                    text={t("acceptFactorForPayment")}
                                                    onClick={handleAcceptFactor}
                                                    disabled={factorPayments?.status !== "success"}

                                                />}
                                        </div>
                                    </Tooltip>
                                    :
                                    <div className="flex items-center">
                                        {(factorStatus.slug == "customerPending" ||
                                            factorStatus.slug == "customerResubmitPending"
                                        ) &&
                                            <>
                                                {factorInfo.canCancel && <div className="w-[190px] ml-3">
                                                    <Button
                                                        text={t("cancelFactor")}
                                                        simple
                                                        onClick={() => { setCancelFactorPopup(true) }}
                                                        disabled={factorPayments?.status !== "success"}
                                                    />
                                                </div>}
                                                <div className="w-[190px] ml-3">
                                                    <Button
                                                        text={t("acceptFactor")}
                                                        onClick={() => { setAcceptFactorPopup(true) }}
                                                        disabled={factorPayments?.status !== "success"}
                                                    />
                                                </div>

                                            </>
                                        }
                                    </div>
                                }

                            </div>
                        </Section>
                    </div>
                </>
            }
        </div>
    )
}
export default EditFactor;