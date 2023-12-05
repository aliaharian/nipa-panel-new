/* eslint-disable import/no-anonymous-default-export */

import { Product } from "app/models/product";
import Api from "../../../app/service/Api";

async function transactionsList(page: number) {
  let response = await Api()?.get(`/wallet/transactions?page=${page}`);
  return response?.data;
}

async function increaseWalletBalance(amount?: number|null) {
  if(!amount) return;
  let response = await Api()?.post(`/wallet/increase`, {
    amount
  });
  return response?.data;
}

export default {
  transactionsList,
  increaseWalletBalance
};
