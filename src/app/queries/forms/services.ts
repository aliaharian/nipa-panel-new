import Api from "app/service/Api";

async function addUserAnswer({
  orderId,
  formId,
  values,
}: {
  orderId: number;
  formId: number;
  values: any;
}) {
  let response = await Api()?.post(`/userAnswer/${formId}/answer`, {
    order_id: orderId,
    ...values,
  });
  return response?.data;
}

export { addUserAnswer };
