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
import { setDeleteSuccess } from "app/redux/products/actions";
import DeletePopup from "components/popup/DeletePopup";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { useNavigate } from "react-router-dom";
import TableSkeleton from "components/skeleton/TableSkeleton";
import { permissionsList, rolesList } from "app/redux/rolePermissions/actions";
import transform from "app/utils/transform";
import AddRoleDialog from "components/rolePermission/AddRoleDialog";
import rolePermissionService from "app/redux/rolePermissions/service";

const Permissions = () => {
  const data = useAppSelector((state) => state.rolePermissions.roles);
  const [columns, setColumns] = useState<any[]>([]);
  const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false);
  const Navigator = useNavigate();

  const { t } = useTranslation("common");
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [addProduct, setOpenAddProduct] = useState<boolean>(false);
  const handleClosedeletePopup = () => {
    setOpenDeletePopup(false);
  };
  const permissions = useAppSelector(
    (state: any) => state.rolePermissions.permissions
  );
  useEffect(() => {
    !permissions && Dispatch(permissionsList());
  }, []);

  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(rolesList());
  }, []);

  useEffect(() => {
    if (data) {
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
      case "edit":
        setOpenAddProduct(true);
        break;

      default:
        break;
    }
  };
  const handleDeleteRole = async () => {
    setDeleteLoading(true);
    try {
      await rolePermissionService.deleteRole({ roleId: selectedRow.id });
      setDeleteLoading(false);
      setOpenDeletePopup(false);
      Dispatch(rolesList());

      SnackbarUtils.success(t("deleteProductSuccess"));
    } catch (e) {
      setDeleteLoading(false);
      setOpenDeletePopup(false);
    }
  };

  return (
    <div className="w-full h-full">
      <AddRoleDialog
        open={addProduct}
        handleClose={() => {
          setOpenAddProduct(false);
          Dispatch(rolesList());
          setSelectedRow(null);
        }}
        selectedRole={selectedRow}
        permissions={permissions}
      />

      <DeletePopup
        title={t("deleteRoleConfirmation")}
        open={openDeletePopup}
        onClose={handleClosedeletePopup}
        handleConfirm={handleDeleteRole}
        loading={deleteLoading}
      />
      <Breadcrumb
        actions={
          <>
            <div className="w-[186px] ms-4">
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
