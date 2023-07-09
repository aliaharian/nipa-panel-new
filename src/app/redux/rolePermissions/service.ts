/* eslint-disable import/no-anonymous-default-export */

import Api from "../../../app/service/Api";

async function rolesList() {
  let response = await Api()?.get("/roles");
  return response?.data;
}
async function permissionsList() {
  let response = await Api()?.get("/permissions");
  return response?.data;
}
async function addRole({
  name,
  code,
  permissions,
}: {
  name: string;
  code: string;
  permissions?: number[];
}) {
  let response = await Api()?.post("/roles", {
    name: name,
    slug: code,
    permissions: permissions,
  });
  return response?.data;
}
async function updateRole({
  name,
  code,
  permissions,
  id,
}: {
  name: string;
  code: string;
  permissions?: number[];
  id: number;
}) {
  let response = await Api()?.put("/roles/" + id, {
    name: name,
    slug: code,
    permissions: permissions,
  });
  return response?.data;
}
async function deleteRole({ roleId }: { roleId: number }) {
  let response = await Api()?.delete("/roles/" + roleId);
  return response?.data;
}

export default {
  rolesList,
  permissionsList,
  addRole,
  deleteRole,
  updateRole,
};
