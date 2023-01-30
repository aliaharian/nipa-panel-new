/* eslint-disable import/no-anonymous-default-export */

import Api from "../../../app/service/Api";

async function ordersList() {
  let response = await Api()?.get("/order");
  return response?.data;
}

export default {
  ordersList,
};
