/* eslint-disable import/no-anonymous-default-export */

import Api from "../../service/Api";

async function basicDatasList() {
  let response = await Api()?.get("/basicData");
  return response?.data;
}

export default {
  basicDatasList,

};
