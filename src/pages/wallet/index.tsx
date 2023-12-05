
import { useEffect, useState } from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Button from "components/button/Button";
import Table from "components/table/Table";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useTranslation } from "react-i18next";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { useNavigate } from "react-router-dom";
import TableSkeleton from "components/skeleton/TableSkeleton";
import Section from "components/section/Section";
import TextField from "components/form/TextField";
import { transactionsList } from "app/redux/wallet/actions";
import transform from "app/utils/transform";
import { Tooltip, Typography } from "@mui/material";
import Pagination from "components/pagination/Pagination";
import { getUserInfo } from "app/redux/users/actions";
import walletService from "app/redux/wallet/service";
const Wallet = () => {
  const data = useAppSelector((state) => state.wallet.transactions);
  const user = useAppSelector((state) => state.users.login);
  const [columns, setColumns] = useState<any[]>([]);
  const [dataTmp, setDataTmp] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const Navigator = useNavigate();

  const { t } = useTranslation("common");
  const [amountInput, setAmountInput] = useState<number | null>()

  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(transactionsList(page));
    Dispatch(getUserInfo())
  }, []);
  useEffect(() => {
    if (data && data.pagination.current_page !== page)
      Dispatch(transactionsList(page));
  }, [page])
  console.log("userrtttt", user)

  useEffect(() => {
    if (data) {

      let colTmp: any[] = [
        {
          name: t("dateTime"),
          selector: (row: any) =>
            row.id === 'footer' ? <p className="text-[14px] font-bold text-text-900">{row.title}</p> : transform.renderChatTime(transform.dateToTimestamp(row.updated_at), true),
          sortable: true,
        },
      ];
      if (data.accessAll) {
        colTmp.push({
          name: t("customerName"),
          selector: (row: any) =>
            row.full_name,
          sortable: false,
        })
      }
      colTmp.push(
        {
          name: t("price2"),
          selector: (row: any) =>
            <p className={`font-bold text-[14px] 
              ${data.accessAll ? "text-text-800" : ""}
              ${row.id === 'footer' ?
                "text-text-900" :
                row.isValid ?
                  !data.accessAll ?
                    row.increase ?
                      "text-success-primary" :
                      "text-error-primary" :
                    "" :
                  "text-text-400"}
                   `}>
              {transform.toPersianDigitsPutCommas(row.price?.toString() || "")}
              {row.id !== 'footer' ? data.accessAll ? "" : row.increase ? " + " : " - " : ""}
            </p>,
          sortable: true,
        }
      )

      if (data.accessAll) {
        colTmp.push({
          name: t("financial_impact"),
          selector: (row: any) =>
            <p className={`font-bold text-[14px] 
            ${row.id === 'footer' ?
                "text-text-900" :
                row.isValid && row.financial_impact > 0 ?
                  !row.increase ?
                    "text-success-primary" :
                    "text-error-primary" :
                  "text-text-400"}
                 `}>
              {transform.toPersianDigitsPutCommas(row.financial_impact?.toString() || "")}
              {row.id !== 'footer' ? row.financial_impact > 0 ? !row.increase ? " + " : " - " : "" : ""}
            </p>,
          sortable: false,
        }, {
          name: t("transactionType"),
          selector: (row: any) =>
            row.transaction_type,
          sortable: false,
        })

      }

      colTmp.push(...[
        {
          name: t("transactionDescription"),
          selector: (row: any) => <Tooltip title={
            <div className="flex flex-col items-start justify-start">
              <p className="text-text-400 text-[12px]">{row.description}</p>
            </div>
          }>
            <Typography noWrap className="!text-text-900 !text-[13px]">{row.description}</Typography>
          </Tooltip>,
          sortable: false,
        },
        {
          name: t("status"),
          selector: (row: any) => row.status?.name,
          sortable: true,
        },
        {
          name: data.accessAll ? t("incomeSum") : t("remainingAmount"),
          selector: (row: any) =>
            <p className={`font-bold text-[14px] ${row.id === 'footer' ? "text-text-900" : "text-success-primary"}`}>
              {transform.toPersianDigitsPutCommas(row.remainingSum?.toString() || "")}
            </p>,
          sortable: true
        },
      ]);


      setColumns([...colTmp]);
      setDataTmp([...data.transactions, {
        id: "footer",
        price: data.sum || "---",
        description: "",
        title: "مجموع",
        status: {
          name: ""
        },
        financial_impact: data.sum2 || '---',
        remainingSum: data.sum3 || '---',
        increase: true,
        updated_at: null
      }])

      console.log("data.orders", data.cols);
    }
  }, [data]);

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

  const handlePay = async() => {
    const response =await walletService.increaseWalletBalance(amountInput);
    alert('ok!')
    Dispatch(transactionsList(page));
    Dispatch(getUserInfo())
  }
  return (
    <div className="w-full h-full">
      <Breadcrumb

        title={t("walletAndtransactions")}
      />
      <div>
        <div className="py-5 px-10 flex items-stretch justify-center bg-white rounded-[6px] border border-text-300 mb-4">
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
              </span> تومان
            </p>
          </div>
          <div className="h-full w-1/2 flex flex-col items-start pr-10 justify-start">
            <p className="text-text-800 text-[16px] mb-4 font-bold">
              {t("chargeWallet")}
            </p>

            <div className="w-full flex items-center">
              <div className="min-w-[254px] w-[100%]">
                <TextField
                  name="amount"
                  endEndorement={<p className="text-text-400">تومان</p>}
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

              <div className="max-w-[170px] min-w-[120px] w-[calc(100%-300px)] mr-4">
                <Button
                  text="تایید و پرداخت"
                  onClick={handlePay}
                />
              </div>
            </div>

          </div>
        </div>
        <Section headerTitle="لیست تراکنش ها">
          {data ? (

            <>
              <Table columns={columns} data={dataTmp || []} />
              <div className="mt-8">
                <Pagination
                  total={data.pagination.total_pages}
                  current={data.pagination.current_page}
                  onChange={(page) => { setPage(page) }}
                />
              </div>

            </>

          ) : (
            <TableSkeleton />
          )}
        </Section>

      </div>
    </div>
  );
};
export default Wallet;
