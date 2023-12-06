/* eslint-disable import/no-anonymous-default-export */

import { Product } from "app/models/product";
import Api from "../../../app/service/Api";

async function invoicesList(page: number, filters: any) {
  const params = Object.keys(filters || {}).map((key) => filters[key] !== null ? `${key}=${filters[key]}&`:"").join('').slice(0, -1);
  console.log("params", params)
  let response = await Api()?.get(`/factor?page=${page}&${params}`);
  return response?.data;
}
async function getFactorStatuses() {
  let response = await Api()?.get(`/factor/status`);
  return response?.data?.statuses;
}


export default {
  invoicesList,
  getFactorStatuses

};
