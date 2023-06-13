/* eslint-disable import/no-anonymous-default-export */

import { BasicDataItem } from "@/app/models/basicData";
import Api from "../../service/Api";

async function basicDatasList() {
  let response = await Api()?.get("/basicData");
  return response?.data;
}
async function getBasicDataInfo(id: number) {
  let response = await Api()?.get("/basicData/" + id);
  return response?.data;
}
async function addBasicDataItem(id: number, data: BasicDataItem) {
  let response = await Api()?.post("/basicData/" + id + "/addItem", data);
  return response?.data;
}
async function changeBasicDataItemState(id: number) {
  let response = await Api()?.post("/basicData/item/" + id + "/updateStatus");
  return response?.data;
}

async function deleteBasicDataItem(id: number) {
  let response = await Api()?.delete("/basicData/item/" + id);
  return response?.data;
}

export default {
  basicDatasList,
  getBasicDataInfo,
  addBasicDataItem,
  changeBasicDataItemState,
  deleteBasicDataItem
};
