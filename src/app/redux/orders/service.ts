/* eslint-disable import/no-anonymous-default-export */

import Api from "../../../app/service/Api";

async function ordersList() {
  let response = await Api()?.get("/order");
  return response?.data;
}
async function orderDetail(orderId: number) {
  let response = await Api()?.get("/order/" + orderId);
  return response?.data;
}

async function orderGroupsList() {
  let response = await Api()?.get("/orderGroup");
  return response?.data;
}

async function createOrderGroup(selectedCustomer: string) {
  let response = await Api()?.post("/orderGroup", {
    customer_code: selectedCustomer,
  });
  return response?.data;
}

// async function createOrder(
//   orderGroupId: number,
//   productId: number,
//   count: number,
//   customerName?: string
// ) {
//   let response = await Api()?.post("/order", {
//     product_id: productId,
//     order_group_id: orderGroupId,
//     customer_name: customerName,
//     count: count,
//   });
//   return response?.data;
// }
async function createOrder(request: {
  customer_code: string;
  orders?: {
    count: number;
    product_id: number;
    form_id?: number | null;
    data?: any;
  }[];
}) {
  let response = await Api()?.post("/order", request);
  return response?.data;
}

async function getCompleteInfo(orderId: number) {
  let response = await Api()?.get("/order/" + orderId + "/complete");
  return response?.data;
}



export default {
  ordersList,
  createOrder,
  createOrderGroup,
  orderGroupsList,
  orderDetail,
  getCompleteInfo,
};
