import Table from "components/table/Table";
import { productStep } from "app/models/redux-models";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { productStepsList } from "app/redux/products/actions";
import Accordion from "components/accordion/Accordion";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Button from "components/button/Button";
import { getRolesList } from "app/redux/users/actions";
import ManageStepPermissionsDialog from "components/productSteps/Dialogs/ManageStepPermissionsDialog";
import ManageStepConditionsDialog from "components/productSteps/Dialogs/ManageStepConditionsDialog";
import { Skeleton } from "@mui/material";
import { useGetAllProductSteps } from "app/queries/productSteps/hooks";

const ProductSteps = () => {
  const { t } = useTranslation(["common", "validations"]);
  // const steps = useAppSelector((state: any) => state.products.productSteps);
  const roles = useAppSelector((state: any) => state.users.roles);
  const Navigate = useNavigate();
  let { code } = useParams();
  const { data: steps } = useGetAllProductSteps(code || "");

  const Dispatch = useAppDispatch();
  const [selectedStep, setSelectedStep] = useState<productStep | null>(null);
  const [selectedStepForCondition, setSelectedStepForCondition] =
    useState<productStep | null>(null);
  const columns: any[] = [
    {
      name: t("order"),
      selector: (row: any, index: number) => index + 1,
      sortable: false,
      class: "bg-primary-main",
      id: "okokokok",
    },
    {
      name: t("title"),
      selector: (row: any) => row.step_name,
      sortable: false,
    },
    {
      name: t("manageForm"),
      center: true,
      cell: (row: any) => (
        <div className=" w-full px-2">
          <Button
            xs
            text={t("manageForm")}
            onClick={() => handleManageForm(row)}
          />
        </div>
      ),
      sortable: false,
    },
    {
      name: t("edit"),
      center: true,
      cell: (row: any) => (
        <div className="w-full px-2">
          <Button
            xs
            bordered
            text={t("editStep")}
            onClick={() => handleManageCondition(row)}
          />
        </div>
      ),
      sortable: false,
    },
    {
      name: t("accessibilities"),
      center: true,
      cell: (row: any) => (
        <div className="w-full px-2">
          <Button
            xs
            bordered
            text={t("manageAccessibilities")}
            onClick={() => handleManagePermissions(row)}
          />
        </div>
      ),

      sortable: false,
    },
    {
      name: t("exportAndPrint"),
      center: true,

      cell: (row: any) => (
        <div className="w-full px-2">
          <Button
            xs
            bordered
            text={t("managePrint")}
            onClick={() => handleManagePrint(row)}
          />
        </div>
      ),
      sortable: false,
    },
  ];

  const handleManagePrint = (row: any) => {};
  const handleBack = () => {
    Navigate("/products");
  };

  useEffect(() => {
    // Dispatch(productStepsList(code || ""));
    if (roles?.length < 1) {
      Dispatch(getRolesList());
    }
  }, []);

  const handleManageForm = (row: any) => {
    console.log("row", row);
    Navigate(`/products/${code}/steps/${row.id}/form`);
  };
  const handleManagePermissions = (row: any) => {
    setSelectedStep(row);
  };

  const handleManageCondition = (row: any) => {
    let flag = true;
    let tmp = steps?.filter(
      (x: productStep) => x.parent_id == row.parent_id
    ) as productStep[];
    console.log("tmp", tmp);
    tmp.map((item: productStep) => {
      if (item.forms.length == 0) {
        flag = false;
      }
    });
    // if (!flag) {
    // SnackbarUtils.error(t("stepHasNoForm"));
    // } else {
    // if (row.forms[0].optionalFields.length == 0) {
    // SnackbarUtils.error(t("stepHasNoOptionalFields"));
    // } else {
    setSelectedStepForCondition(row);
    // }
    // }
  };
  return (
    <div className="w-full h-full">
      <ManageStepPermissionsDialog
        roles={roles}
        open={selectedStep ? true : false}
        handleClose={() => setSelectedStep(null)}
        step={selectedStep}
      />
      <ManageStepConditionsDialog
        open={selectedStepForCondition ? true : false}
        handleClose={() => setSelectedStepForCondition(null)}
        step={selectedStepForCondition}
        otherSteps={
          selectedStepForCondition &&
          steps?.filter(
            (x: productStep) =>
              x.parent_id != null && x.id > selectedStepForCondition?.id
          )
        }
      />

      <Breadcrumb
        title={t("handleProductSteps") + " " + code}
        handleBack={handleBack}
      />
      <div className="w-full">
        {steps && roles ? (
          steps
            .filter((x: productStep) => x.parent_id == null)
            .map((item: productStep, index: number) => (
              <Accordion key={item.id} title={item.step_name}>
                <Table
                  columns={columns}
                  data={
                    steps?.filter(
                      (x: productStep) => x.parent_id == item.global_step_id
                    ) || []
                  }
                />
              </Accordion>
            ))
        ) : (
          <div className="grid grid-cols-1 gap-[40px]">
            {Array.from(Array(3).keys()).map((item, index) => (
              <Skeleton
                key={index}
                variant="rounded"
                width={"100%"}
                height={72}
                animation="wave"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSteps;
