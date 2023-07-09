import { Add } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import TextField from "../form/TextField";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import * as Yup from "yup";
import { setSaveSuccess } from "app/redux/products/actions";
import { useAppDispatch } from "app/redux/hooks";
import { useEffect, useState } from "react";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { permission } from "@/app/models/redux-models";
import Checkbox from "../form/Checkbox";
import rolePermissionService from "app/redux/rolePermissions/service";

type OrderFiltersDialogProps = {
  open: boolean;
  handleClose?: () => void;
  permissions: permission[];
  selectedRole?: any;
};

type initialValues = {
  code: string;
  name: string;
  permissions: number[];
};

const AddRoleDialog = ({
  open,
  handleClose,
  permissions,
  selectedRole,
}: OrderFiltersDialogProps) => {
  const { t } = useTranslation(["common", "validations"]);
  const Dispatch = useAppDispatch();
  console.log("sele", selectedRole);
  const [submitdisabled, setSubmitDisabled] = useState<boolean>(false);
  const validationSchema = Yup.object().shape({
    code: Yup.string().required(
      t("roleCode.required", { ns: "validations" }) || ""
    ),
    name: Yup.string().required(
      t("roleName.required", { ns: "validations" }) || ""
    ),
  });

  const initialValues: initialValues = {
    code: selectedRole?.slug || "",
    name: selectedRole?.name || "",
    permissions: selectedRole?.permissions || [],
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log("valuekkkks", values);
      setSubmitDisabled(true);
      try {
        if (selectedRole) {
          await rolePermissionService.updateRole({
            ...values,
            id: selectedRole.id,
          });
        } else {
          await rolePermissionService.addRole(values);
        }
        _handleClose();
        Dispatch(setSaveSuccess(false));
        SnackbarUtils.success(t("addRoleSuccess"));
        setSubmitDisabled(false);
      } catch (e) {
        setSubmitDisabled(false);
      }
    },
  });
  useEffect(() => {
    if (selectedRole) {
      formik.setFieldValue("code", selectedRole?.slug);
      formik.setFieldValue("name", selectedRole?.name);
      formik.setFieldValue(
        "permissions",
        selectedRole?.permissions?.map((item: any) => item.id)
      );
    }
  }, [selectedRole]);
  const handleSubmitForm = () => {
    formik.handleSubmit();
  };
  const _handleClose = () => {
    handleClose && handleClose();
    formik.resetForm();
  };

  const handleCheck = (e: permission) => {
    let checkedTmp = [...formik.values.permissions];
    let index = checkedTmp.indexOf(e.id);
    if (index > -1) {
      //remove item from array
      checkedTmp.splice(index, 1);
      //remove childs if exists
      if (e.childs) {
        e.childs.map(function (item: permission) {
          index = checkedTmp.indexOf(item.id);
          if (index > -1) {
            checkedTmp.splice(index, 1);
          }
        });
      }
    } else {
      checkedTmp.push(e.id);
      //add all childs
      if (e.childs) {
        e.childs.map(function (item: permission) {
          index = checkedTmp.indexOf(item.id);
          if (index === -1) {
            checkedTmp.push(item.id);
          }
        });
      }
      //check parent if child selected
      if (e.parent_id) {
        index = checkedTmp.indexOf(e.parent_id);
        if (index === -1) {
          checkedTmp.push(e.parent_id);
        }
      }
    }
    formik.setFieldValue("permissions", [...checkedTmp]);
  };

  return (
    <SideDialog
      headerText={selectedRole ? t("editRole") : t("addRole")}
      headerIcon={<Add />}
      open={open}
      handleClose={_handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 font-bold text-[18px]">
          <p className="text-right">{t("enterProductDetail")}</p>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7">
              <TextField
                name="code"
                label={t("roleCode")}
                type="text"
                placeholder={t("roleCode.placeholder", {
                  ns: "validations",
                })}
                formik={formik}
              />
              <TextField
                name="name"
                label={t("roleName")}
                type="text"
                placeholder={t("roleName.placeholder", {
                  ns: "validations",
                })}
                formik={formik}
              />
            </div>
            <div className="mt-[35px]">
              <p className="text-right text-[14px] text-text-900 font-normal mb-2">
                {t("permissions")}
              </p>
              <div className="border px-[20px] py-[27px] border-text-400 rounded-[6px]">
                {permissions ? (
                  <div className="grid grid-cols-2">
                    {permissions.map((item, index) => (
                      <div key={index}>
                        <Checkbox
                          key={index}
                          className="font-normal"
                          name={"permissions"}
                          value={item.slug}
                          label={item.name}
                          checked={
                            formik.values.permissions.includes(item.id) || false
                          }
                          handleCheck={() => handleCheck(item)}
                        />
                        {item.childs && (
                          <div className="pr-[35px]">
                            {item.childs.map((child, index) => (
                              <Checkbox
                                key={index}
                                className="font-normal"
                                name={"permissions"}
                                value={child.slug}
                                label={child.name}
                                checked={
                                  formik.values.permissions.includes(
                                    child.id
                                  ) || false
                                }
                                handleCheck={() => handleCheck(child)}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </form>
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="py-[24px] border-t border-text-300 px-7 flex justify-between">
          <div className="w-[126px]">
            <Button
              disabled={submitdisabled}
              text="انصراف"
              onClick={_handleClose}
              gray
            />
          </div>
          <div className="w-[207px]">
            <Button
              disabled={submitdisabled}
              icon={<Add />}
              text={selectedRole ? t("editRole") : t("addRole")}
              onClick={handleSubmitForm}
            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default AddRoleDialog;
