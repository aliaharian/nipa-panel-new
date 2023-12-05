
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

const Wallet = () => {
  const data = useAppSelector((state) => state.wallet.transactions);
  const [columns, setColumns] = useState<any[]>([]);
  const Navigator = useNavigate();

  const { t } = useTranslation("common");
  const [amountInput, setAmountInput] = useState<Number | null>()

  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(transactionsList());
  }, []);

  useEffect(() => {
    if (data) {

      let colTmp: any[] = [
        {
          name: t("dateTime"),
          selector: (row: any) =>
            transform.renderChatTime(transform.dateToTimestamp(row.updated_at), true),
          sortable: true,
        },
        {
          name: t("price"),
          selector: (row: any) => transform.toPersianDigitsPutCommas(row.price?.toString() || "") + " تومان",
          sortable: true,
        },
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
          selector: (row: any) => row.status.name,
          sortable: true,
        },
        {
          name: t("transactionType"),
          selector: (row: any) => row.transaction_type,
          sortable: true,
        },
        {
          name: t("remainingAmount"),
          selector: (row: any) => t("active"),
          sortable: true,
        },
      ];


      setColumns([...colTmp]);

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
              <span className="text-success-primary font-bold text-[20px]">۱,۲۰۰,۰۰۰</span> تومان
            </p>
          </div>
          <div className="h-full w-1/2 flex flex-col items-center justify-start">
            <p className="text-text-800 text-[16px] mb-4 font-bold">
              {t("chargeWallet")}
            </p>

            <div className="w-full flex items-center mr-10">
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
                  onClick={() => { }}
                />
              </div>
            </div>

          </div>
        </div>
        <Section headerTitle="لیست تراکنش ها">
          {data ? (
            <Table columns={columns} data={data || []} />
          ) : (
            <TableSkeleton />
          )}
        </Section>

      </div>
    </div>
  );
};
export default Wallet;
