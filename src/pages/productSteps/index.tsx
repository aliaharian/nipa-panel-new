import Table from "components/table/Table";
import { productStep } from "app/models/redux-models";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { productStepsList } from "app/redux/products/actions";
import Accordion from "components/accordion/Accordion";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Button from "components/button/Button";
import { getRolesList } from "app/redux/users/actions";

const ProductSteps = () => {
  const { t } = useTranslation(["common", "validations"]);
  const steps = useAppSelector((state: any) => state.products.productSteps);
  const roles = useAppSelector((state: any) => state.users.roles);
  const Navigate = useNavigate();
  let { code } = useParams();
  const Dispatch = useAppDispatch();
  console.log("props", code);
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
      name: t("displayCondition"),
      center: true,
      cell: (row: any) => (
        <div className="w-full px-2">
          <Button
            xs
            bordered
            text={t("manageCondition")}
            onClick={() => handleManageForm(row)}
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
            onClick={() => handleManageForm(row)}
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
            onClick={() => handleManageForm(row)}
          />
        </div>
      ),
      sortable: false,
    },
  ];
  const handleBack = () => {
    console.log("back");
    Navigate("/products");
  };

  console.log("roles", roles);
  useEffect(() => {
    console.log("steps", steps);
    Dispatch(productStepsList(code || ""));
    if (roles?.length < 1) {
      Dispatch(getRolesList());
    }
  }, []);

  const handleManageForm = (row: any) => {
    console.log("row", row);
    Navigate(`/products/${code}/steps/${row.id}/form`);
  };

  return (
    <div className="w-full h-full">
      <Breadcrumb
        title={t("handleProductSteps") + " " + code}
        handleBack={handleBack}
      />
      <div className="w-full">
        {steps
          ?.filter((x: productStep) => x.parent_id == null)
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
          ))}
      </div>
    </div>
  );
};

export default ProductSteps;