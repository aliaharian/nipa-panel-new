/* eslint-disable import/no-anonymous-default-export */

import { Product } from "app/models/product";
import Api from "../../../app/service/Api";

async function transactionsList() {
  let response = await Api()?.get("/wallet/transactions");
  return response?.data?.transactions;
}

export default {
  transactionsList,
};
