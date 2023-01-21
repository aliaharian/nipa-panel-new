/* eslint-disable import/no-anonymous-default-export */
import { userFilterModel } from "../../../app/models/user";
import { LoginFormInitialValues } from "../../../app/models/auth";
import Api from "../../../app/service/Api";
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
async function getRolesList() {
  let response = await Api()?.get("/admin/roles");
  return response?.data;
}
async function getUsersList({
  search = "",
  page = 1,
  role = "all",
  status = "all",
  country = "all",
}: userFilterModel) {
  let response = await Api()?.get(
    `/admin/users/filter?search=${search}&page=${page}&role=${role}&status=${status}&country=${country}&length=4`
  );
  return response?.data;
}

async function deleteUser(id: number) {
  let response = await Api()?.get(`/admin/users/${id}/delete`);
  return response?.data;
}

async function getCountriesList() {
  let response = await Api()?.get("/admin/countries/countriesList");
  return response?.data;
}
export default {
  getAllUsers,
  login,
  getRolesList,
  getCountriesList,
  getUsersList,
  deleteUser,
};
