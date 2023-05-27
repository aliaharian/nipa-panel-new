/* eslint-disable import/no-anonymous-default-export */

import { Product } from "app/models/product";
import Api from "../../../app/service/Api";
import i18next from "i18next";

async function getForm(id: number) {
  let response = await Api()?.get(`/forms/${id}`, {
    headers: {
      languege: i18next.language,
    },
  });
  return response?.data;
}
async function createForm(data: any) {
  let response = await Api()?.post(`/forms`, {
    ...data,
  });
  return response?.data;
}
async function getFormFieldTypes() {
  let response = await Api()?.get(`/formFieldTypes`, {
    headers: {
      languege: i18next.language,
    },
  });
  return response?.data;
}
async function createFormField(data: any) {
  let response = await Api()?.post(`/formFields`, {
    ...data,
  });
  return response?.data;
}
async function updateFormField(id: number, data: any) {
  let response = await Api()?.put(`/formFields/${id}`, {
    ...data,
  });
  return response?.data;
}
export default {
  getForm,
  createForm,
  getFormFieldTypes,
  createFormField,
  updateFormField,
};
