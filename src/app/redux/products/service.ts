/* eslint-disable import/no-anonymous-default-export */

import { Product } from "app/models/product";
import Api from "../../../app/service/Api";

async function productsList() {
  let response = await Api()?.get("/products");
  return response?.data;
}
async function saveProduct(product: Product) {
  let response = await Api()?.post("/products", {
    name: product.name,
    code: product.code,
    custom: product.custom,
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

export default {
  productsList,
  saveProduct,
  deleteProduct,
};
