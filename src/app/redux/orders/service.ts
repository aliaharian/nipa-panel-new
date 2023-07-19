/* eslint-disable import/no-anonymous-default-export */

import Api from "../../../app/service/Api";

async function ordersList() {
  let response = await Api()?.get("/order");
  return response?.data;
}

async function orderGroupsList() {
  let response = await Api()?.get("/orderGroup");
  return response?.data;
}

async function createOrderGroup() {
  let response = await Api()?.post("/orderGroup");
  return response?.data;
}

async function createOrder(
  orderGroupId: number,
  productId: number,
  customerName?: string
) {
  let response = await Api()?.post("/order", {
    product_id: productId,
    order_group_id: orderGroupId,
    customer_name: customerName,
  });
  return response?.data;
}
export default {
  ordersList,
  createOrder,
  createOrderGroup,
  orderGroupsList
};
