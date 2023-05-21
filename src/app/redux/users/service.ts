/* eslint-disable import/no-anonymous-default-export */
import { userFilterModel } from "../../../app/models/user";
import {
  confirmCodeFormInitialValues,
  LoginFormInitialValues,
  sendCodeFormInitialValues,
} from "../../../app/models/auth";
import Api from "../../../app/service/Api";

async function sendOtp(credentials: sendCodeFormInitialValues) {
  let response = await Api()?.post("/sendOtp", {
    mobile: credentials.mobile,
  });
  return response?.data;
}
async function confirmOtp(credentials: confirmCodeFormInitialValues) {
  console.log("cscscsc", credentials);
  let response = await Api()?.post("/confirmOtp", {
    mobile: credentials.mobile,
    otp: credentials.otp,
  });
  return response?.data;
}
async function getRolesList() {
  let response = await Api()?.get("/roles");
  return response?.data;
}
export default {
  sendOtp,
  confirmOtp,
  getRolesList,
};
