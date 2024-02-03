import { Task } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {
  useGetFactorPayments,
  useVerifyOfflinePayment,
} from "app/queries/financial/hooks";
import PaymentAccordion, { IPaymentAccordion } from "./PaymentAccordion";
import { useQueryClient } from "@tanstack/react-query";
type EditPaymentStepDialogProps = {
  open: boolean;
  handleClose?: () => void;
  handleSubmit?: (values: any) => void;
  data?: any;
};

interface IFormTypes {
  adminDesc?: string;
  status?: number;
  paymentId?: number;
}

const ViewPaymentsDialog = ({
  open,
  handleClose,
  handleSubmit,
  data,
}: EditPaymentStepDialogProps) => {
  const { t } = useTranslation("common");
  const validationSchema = Yup.object({
    status: Yup.number().required(t("required") || ""),
  });
  const { data: stepInfo } = useGetFactorPayments(data?.id);
  const formik = useFormik<IFormTypes>({
    initialValues: {},
    validationSchema,
    onSubmit: () => {},
  });
  const { mutate: verifyOffline } = useVerifyOfflinePayment();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const handleSubmitForm = () => {
    console.log("ok!", formik.values);
    setLoading(true);
    verifyOffline(
      {
        adminDescription: formik.values.adminDesc || "",
        verified: formik.values.status === 1 ? true : false,
        factor_payment_id: formik.values?.paymentId || 0,
      },
      {
        onSuccess: () => {
          setLoading(false);
          queryClient.invalidateQueries({
            queryKey: [["paynemtStep", { paymentStepId: data?.id }]],
          });
          handleClose?.();
        },
        onError: () => {
          setLoading(false);
        },
      }
    );
  };
  useEffect(() => {
    if (stepInfo && stepInfo?.payments.length > 0) {
      const lastPay = stepInfo.payments[stepInfo.payments.length - 1];
      formik.setValues({
        adminDesc: lastPay.admin_description || "",
        paymentId: lastPay.id,
      });
    }
  }, [stepInfo]);

  const handleCancel = () => {
    formik.resetForm();
    handleClose?.();
  };
  return (
    <SideDialog
      headerText={`${t("view_payment_step_status")} ${
        stepInfo?.step_number === 1 ? t("first") : t("second")
      }`}
      headerIcon={<Task />}
      open={open}
      handleClose={handleClose}
    >
      <SideDialog.Content>
        <div className="px-7 py-6">
          <div className="flex flex-col gap-y-6">
            {/* payment Accordion */}
            {stepInfo ? (
              stepInfo.payments?.map(
                (item: IPaymentAccordion, index: number) => {
                  return (
                    <PaymentAccordion
                      {...item}
                      key={index}
                      formik={formik}
                      last={index + 1 === stepInfo.payments.length}
                    />
                  );
                }
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="py-[24px] border-t border-text-300 px-7 flex flex-row-reverse justify-between">
          <div className="w-[207px]">
            <Button
              text={t("submit2")}
              loading={loading}
              disabled={loading || !formik.isValid}
              onClick={handleSubmitForm}
            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default ViewPaymentsDialog;
