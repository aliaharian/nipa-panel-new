import Api from "app/service/Api";

async function ordersList() {
  let response = await Api()?.get("/order");
  return response?.data;
}

async function orderGroupsList() {
  let response = await Api()?.get("/orderGroup");
  return response?.data;
}
async function orderDetail(orderId: number) {
  let response = await Api()?.get("/order/" + orderId);
  return response?.data;
}

async function gotoNextStep(orderId: number) {
  let response = await Api()?.post("/order/" + orderId + "/gotoNextStep");
  return response?.data;
}
async function getStepInfo({
  stepId,
  orderId,
}: {
  stepId: number;
  orderId: number;
}) {
  let response = await Api()?.get(
    "/step/" + stepId + "/" + orderId + "/complete"
  );
  return response?.data;
}

export { ordersList, orderGroupsList, orderDetail, gotoNextStep, getStepInfo };
