/* eslint-disable import/no-anonymous-default-export */
import { userFilterModel } from "../../../app/models/user";
import {
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

export default {
  sendOtp,
};
