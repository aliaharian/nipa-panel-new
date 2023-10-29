/* eslint-disable import/no-anonymous-default-export */

import { Product } from "app/models/product";
import Api from "../../../app/service/Api";

async function productsList() {
  let response = await Api()?.get("/products");
  return response?.data;
}
async function productStepsList(code: string) {
  let response = await Api()?.get(`/product/${code}/steps`);
  return response?.data;
}
async function productStepInfo(id: number) {
  let response = await Api()?.get(`/productSteps/${id}`);
  return response?.data;
}
async function setProductStepRoles(id: number, roles: number[]) {
  let response = await Api()?.post(`/product/steps/${id}/setRoles`, {
    //array to string by ,
    roles: roles.join(","),
  });
  return response?.data;
}
async function saveProduct(product: Product) {
  let response = await Api()?.post("/products", {
    name: product.name,
    code: product.code,
    custom: product.custom,
    price: product.price,
    count_type: product.count_type,
    status: product.status,
    description: product.description,
    images:
      //array of image hash codes
      product.images?.map((image) => image.hashCode),
  });
  return response?.data;
}

async function updateProduct(id: number, product: Product) {
  let response = await Api()?.put(`/products/${id}`, {
    name: product.name,
    code: product.code,
    custom: product.custom,
    count_type: product.count_type,
    price: product.price,
    status: product.status,
    description: product.description,
    images:
      //array of image hash codes
      product.images?.map((image) => image.hashCode),
  });
  return response?.data;
}
//delete product
async function deleteProduct(id: number) {
  let response = await Api()?.delete(`/products/${id}`);
  return response?.data;
}
//get product
async function getProduct(id: number) {
  let response = await Api()?.get(`/products/${id}`);
  return response?.data;
}
//add product condition
async function addProductConditions(data: any) {
  let response = await Api()?.post(`/product/steps/conditions`, {
    step_id: data.stepId,
    field_id: data.fieldId,
    option_id: data.optionId,
    next_step_id: data.nextStepId,
  });
  return response?.data;
}

export default {
  productsList,
  saveProduct,
  deleteProduct,
  productStepsList,
  productStepInfo,
  setProductStepRoles,
  addProductConditions,
  getProduct,
  updateProduct,
};
