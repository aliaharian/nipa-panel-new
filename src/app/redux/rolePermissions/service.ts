/* eslint-disable import/no-anonymous-default-export */

import Api from "../../../app/service/Api";

async function rolesList() {
  let response = await Api()?.get("/roles");
  return response?.data;
}

export default {
  rolesList,

};
