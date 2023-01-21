/* eslint-disable import/no-anonymous-default-export */
import { LoginFormInitialValues } from "../../models/auth";
import Api from "../../service/Api";
async function getAllUsers() {
  let response = await Api()?.get("users?page=1");
  return response?.data.data;
}
async function login(credentials: LoginFormInitialValues) {
    let response = await Api()?.post("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });
    return response?.data;
 
}
export default {
  getAllUsers,
  login,
};
