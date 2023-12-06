/* eslint-disable import/no-anonymous-default-export */

import { Product } from "app/models/product";
import Api from "../../../app/service/Api";

async function transactionsList(page: number, filters: any) {
  const params = Object.keys(filters || {}).map((key) => filters[key] !== null ? `${key}=${filters[key]}&`:"").join('').slice(0, -1);
  console.log("params", params)
  let response = await Api()?.get(`/wallet/transactions?page=${page}&${params}`);
  return response?.data;
}

async function increaseWalletBalance(amount?: number | null) {
  if (!amount) return;
  let response = await Api()?.post(`/wallet/increase`, {
    amount
  });
  return response?.data;
}
async function getWalletsUsers(searchParam?: string) {
  let response = await Api()?.get(`/wallet/usersList?searchParam=${searchParam}`);
  return response?.data?.wallets?.current_page ? response?.data.wallets.data : response?.data.wallets;
}
async function getTransactionStatuses() {
  let response = await Api()?.get(`/wallet/transactions/status`);
  return response?.data?.statuses;
}

async function exportExcel(filters:any){
  const params = Object.keys(filters || {}).map((key) => filters[key] !== null ? `${key}=${filters[key]}&`:"").join('').slice(0, -1);
  let response = await Api()?.get(`/wallet/transactions/export?${params}`, {responseType: 'blob'});
  return response;
}

export default {
  transactionsList,
  increaseWalletBalance,
  getWalletsUsers,
  getTransactionStatuses,
  exportExcel
};
