import {
  Add,
  ArrangeVertical,
  Edit,
  Eye,
  Setting4,
  Trash,
} from "iconsax-react";
import { useEffect, useState } from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Button from "components/button/Button";
import Table from "components/table/Table";
import TableAction from "components/table/TableAction";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useTranslation } from "react-i18next";
import {
  deleteProduct,
  productsList,
  setDeleteSuccess,
} from "app/redux/products/actions";
import AddProductDialog from "components/products/AddProductDialog";
import DeletePopup from "components/popup/DeletePopup";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { useNavigate } from "react-router-dom";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { rolesList } from "app/redux/rolePermissions/actions";
import transform from "app/utils/transform";
import AddRoleDialog from "components/rolePermission/AddRoleDialog";

const Permissions = () => {
  const data = useAppSelector((state) => state.rolePermissions.roles);
  const [columns, setColumns] = useState<any[]>([]);
  const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false);
  const Navigator = useNavigate();
  const deleteSuccess = useAppSelector(
    (state: any) => state.products.deleteSuccess
  );
  const { t } = useTranslation("common");
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [addProduct, setOpenAddProduct] = useState<boolean>(false);
  const handleClosedeletePopup = () => {
    setOpenDeletePopup(false);
  };

  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(rolesList());
  }, []);

  useEffect(() => {
    if (data) {
      console.log("data123", data);

      let colTmp: any[] = [
        {
          name: t("title"),
          selector: (row: any) => row.name,
          sortable: true,
        },
        {
          name: t("createDate"),
          selector: (row: any) =>
            transform.toPersianDigits(
              transform.renderChatTime(
                transform.dateToTimestamp(row.created_at)
              )
            ),
          sortable: true,
        },
        {
          name: t("usersCount"),
          selector: (row: any) => transform.toPersianDigits(row.users_count),
          sortable: true,
        },
        // {
        //   name: t("status"),
        //   selector: (row: any) => t("active"),
        //   sortable: true,
        // },
      ];

      colTmp.push({
        allowOverflow: true,
        button: true,
        width: "120px",
        cell: (row: any) => (
          <TableAction
            items={[
              {
                icon: <Edit variant="Bold" />,
                text: t("edit"),
                name: "edit",
                disabled: false,
              },
              {
                icon: <Trash variant={"Bold"} />,
                text: t("delete"),
                name: "delete",
                disabled: row.users_count > 0,
              },
            ]}
            handleAction={handleTableAction}
            row={row}
          />
        ),
      });

      setColumns([...colTmp]);
    }
  }, [data]);
  const handleTableAction = (row: any, action: string) => {
    console.log("row", row);
    console.log("action", action);
    setSelectedRow(row);
    switch (action) {
      case "delete":
        setOpenDeletePopup(true);
        break;
      default:
        break;
    }
  };
  const handleDeleteProduct = () => {
    setDeleteLoading(true);
    console.log("selectedRow", selectedRow);
    Dispatch(deleteProduct(selectedRow.id));
    // setTimeout(() => {
    //   setDeleteLoading(false);
    //   setOpenDeletePopup(false);
    //   SnackbarUtils.success(t("deleteProductSuccess"));
    // }, 1000);
  };
  useEffect(() => {
    if (deleteSuccess) {
      setDeleteLoading(false);
      setOpenDeletePopup(false);
      SnackbarUtils.success(t("deleteProductSuccess"));
      setTimeout(() => {
        Dispatch(setDeleteSuccess(false));
      }, 100);
    }
  }, [deleteSuccess]);

  return (
    <div className="w-full h-full">
      <AddRoleDialog
        open={addProduct}
        handleClose={() => setOpenAddProduct(false)}
      />

      <DeletePopup
        title={t("deleteProductConfirmation")}
        open={openDeletePopup}
        onClose={handleClosedeletePopup}
        handleConfirm={handleDeleteProduct}
        loading={deleteLoading}
      />
      <Breadcrumb
        actions={
          <>
            <div className="w-[186px] mr-[16px]">
              <Button
                icon={<Add />}
                text={t("addRole")}
                onClick={() => setOpenAddProduct(true)}
              />
            </div>
          </>
        }
        title={t("rolePermissions")}
      />
      <div>
        {/* <button onClick={zipArray}>zip</button>
        <button onClick={unzipArray}>unzip</button> */}

        {data ? (
          <Table columns={columns} data={data || []} />
        ) : (
          <TableSkeleton />
        )}
      </div>
    </div>
  );
};
export default Permissions;
