import { Add, Trash } from "iconsax-react";
import SideDialog from "../../sideDialog/SideDialog";
import { useFormik } from "formik";
import Button from "../../button/Button";
import { productStep, role } from "app/models/redux-models";
import { useTranslation } from "react-i18next";
import DropDown from "components/form/Dropdown";
import SnackbarUtils from "app/utils/SnackbarUtils";
import productService from "app/redux/products/service";
import productSlice from "app/redux/products/slice";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useEffect } from "react";

export type initialValues = {
  selectedRoles: role[];
};

type AddDropdownItemDialogProps = {
  open: boolean;
  handleClose?: () => void;
  step: productStep | null;
  roles: role[];
};
const ManageStepPermissionsDialog = ({
  open,
  handleClose,
  step,
  roles,
}: AddDropdownItemDialogProps) => {
  const initialValues: initialValues = {
    selectedRoles: step?.roles || [],
  };
  const { t } = useTranslation();
  const productSteps = useAppSelector((state) => state.products.productSteps);
  const Dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: async (values) => {
      if (values.selectedRoles.length == 0) {
        SnackbarUtils.error(t("selectAtLeastOneRole"));
      } else {
        if (!step?.id)
          return SnackbarUtils.error(t("errorSaveProductStepRoles"));
        const response = await productService.setProductStepRoles(
          step?.id,
          values.selectedRoles.map((x) => x.id)
        );
        if (response) {
          if (productSteps) {
            let tmp = [...productSteps];
            let index = tmp?.findIndex((x) => x.id == step?.id);
            if (index > -1) {
              // tmp[index].roles = values.selectedRoles;
              tmp[index] = {
                ...tmp[index],
                roles: values.selectedRoles,
              };
              Dispatch(productSlice.actions.productStepsList([...tmp]));

              SnackbarUtils.success(t("successSaveProductStepRoles"));
            }
          }
        } else {
          SnackbarUtils.error(t("errorSaveProductStepRoles"));
        }
        handleClose?.();
        // formik.setFieldValue("selectedRoles", []);
      }
      // handleClose?.();
    },
  });

  const handleSubmitForm = () => {
    formik.submitForm();
  };
  useEffect(() => {
    if (step) {
      formik.setFieldValue("selectedRoles", step?.roles || []);
    }
  }, [step]);

  const _handleClose = () => {
    handleClose?.();
    // formik.setFieldValue("selectedRoles", []);
  };
  const handleChangeValue = (e: any) => {
    let tmp = [...formik.values.selectedRoles];
    const role = roles.find((x) => x.id == e.target.value);
    //check if role is not exist in tmp
    const index = tmp.findIndex((x) => x.id == role?.id);
    if (index > -1) {
      tmp.splice(index, 1);
    }
    if (role) {
      tmp.push(role);
    }
    formik.setFieldValue("selectedRoles", [...tmp]);
  };

  const handleDeleteItem = (item: role) => {
    let tmp = [...formik.values.selectedRoles];
    const index = tmp.findIndex((x) => x.id == item.id);
    if (index > -1) {
      tmp.splice(index, 1);
      formik.setFieldValue("selectedRoles", [...tmp]);
    }
  };
  return (
    <SideDialog
      headerText={t("addPermission") + " " + (step?.step_name || "")}
      headerIcon={<Add />}
      open={open}
      handleClose={_handleClose}
    >
      <SideDialog.Content>
        <div className="p-7">
          <p className="w-full text-start text-[16px] font-bold">
            نقش های انتخاب شده زیر دسترسی به این فرم را خواهند داشت:
          </p>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-1 gap-x-5 gap-y-7">
              <DropDown
                className={`group ${"mb-[15px]"}`}
                name={"selectedRoles"}
                label={t("systemRoles")}
                options={roles.map((option: any) => {
                  return {
                    label: <p>{option.name}</p>,
                    value: option.id,
                  };
                })}
                placeholder={t("select")}
                formik={{
                  handleChange: handleChangeValue,
                  values: {
                    selectedRoles: null,
                  },
                }}
              />
              {formik.values.selectedRoles.length > 0 && (
                <div className="flex items-center justify-start w-full mb-[30px]">
                  {formik.values.selectedRoles.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[97px] h-[48px] rounded-[24px] border border-text-400 flex items-center justify-between pe-2 ps-4 me-2"
                      >
                        <p className="text-[14px]">{item.name}</p>
                        <div
                          onClick={() => handleDeleteItem(item)}
                          className="cursor-pointer"
                        >
                          <Trash className="w-[20px] h-[20px]" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </form>
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="mt-20 px-7 flex justify-between items-center py-[25px] border border-text-300">
          <div className="w-[126px]">
            <Button text="انصراف" onClick={_handleClose} gray />
          </div>
          <div className="w-[182px]">
            <Button text={t("saveSetting")} onClick={handleSubmitForm} />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default ManageStepPermissionsDialog;
