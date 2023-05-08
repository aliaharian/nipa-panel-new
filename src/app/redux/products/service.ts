/* eslint-disable import/no-anonymous-default-export */

import Api from "../../../app/service/Api";

async function productsList() {
  let response = await Api()?.get("/products");
  return response?.data;
}

export default {
  productsList,
};
