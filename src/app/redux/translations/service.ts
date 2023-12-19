/* eslint-disable import/no-anonymous-default-export */

import Api from "../../../app/service/Api";

async function keywordsList() {
  let response = await Api()?.get("/keywords");
  return response?.data;
}
async function languagesList() {
  let response = await Api()?.get("/languages");
  return response?.data;
}
async function saveKeyword(keyword: string) {
  let response = await Api()?.post("/keywords", { keyword });
  return response?.data;
}
async function updateKeyword(id: number, keyword: string) {
  let response = await Api()?.put("/keywords/" + id, { keyword });
  return response?.data;
}
async function saveTranslation(keyword_id: number, language_id: number, translation: any) {
  let response = await Api()?.post("/translations", { keyword_id, language_id, translation });
  return response?.data;
}
async function deleteKeyword(keyword_id: number) {
  let response = await Api()?.delete("/keywords/" + keyword_id);
  return response?.data;
}

export default {
  keywordsList,
  languagesList,
  saveKeyword,
  saveTranslation,
  updateKeyword,
  deleteKeyword
};
