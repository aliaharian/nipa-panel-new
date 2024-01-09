import transform from "app/utils/transform";
import Button from "components/button/Button";
import TextField from "components/form/TextField";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import walletService from "app/redux/wallet/service";
import {useAppDispatch} from "app/redux/hooks";
import {getUserInfo} from "app/redux/users/actions";
import {userLoginType} from "@models/auth";

type WalletInfoProps = {
    user: userLoginType,
    page: number
}
const WalletInfo = ({user, page}: WalletInfoProps) => {
    const {t} = useTranslation("common");
    const [amountInput, setAmountInput] = useState<number | null>()
    const Dispatch = useAppDispatch();

    //sample formik
    const formik = {
        values: {
            amount: amountInput
        },
        handleChange: (e: any) => {
            console.log("e", e);
            //max length 8
            if (e.target.value.length > 8) return;
            setAmountInput(e.target.value)
        },
    };

    const handlePay = async () => {
        const response = await walletService.increaseWalletBalance(amountInput);
        alert('ok!')
        Dispatch(getUserInfo())
    }
    return (
        <div
            className="py-5 px-10 flex items-stretch justify-center bg-white rounded-[6px] border border-text-300 mb-4">
            <div className="w-1/2 flex flex-col items-start justify-center border-l border-text-300">
                <p className="text-text-800 text-[16px] mb-[6px] font-bold">
                    {t("yourBalance")}
                </p>
                <p className="text-text-900 text-[14px] leading-[38px]">
            <span className="text-success-primary font-bold text-[20px]">
              {user ?
                  transform.toPersianDigitsPutCommas(
                      (user.user.wallet?.balance + user.user.wallet.credit)?.toString()
                      || "")
                  : "---"}
            </span> {t("toman")}
                </p>
            </div>
            <div className="h-full w-1/2 flex flex-col items-start ps-10 justify-start">
                <p className="text-text-800 text-[16px] mb-4 font-bold">
                    {t("chargeWallet")}
                </p>

                <div className="w-full flex items-center">
                    <div className="min-w-[254px] w-[100%]">
                        <TextField
                            name="amount"
                            endEndorement={<p className="text-text-400">{t("toman")}</p>}
                            normal
                            placeholder={t("wallet.addAmount", {
                                ns: "validations",
                            })}
                            type="number"
                            formik={
                                formik
                            }
                        />
                    </div>

                    <div className="max-w-[170px] min-w-[120px] w-[calc(100%-300px)] ms-4">
                        <Button
                            text="تایید و پرداخت"
                            onClick={handlePay}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default WalletInfo;