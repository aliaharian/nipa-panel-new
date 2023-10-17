import {
  Add,
  ArrangeVertical,
  Edit,
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

const Factors = () => {
  const data = useAppSelector((state) => state.products.products);
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
    Dispatch(productsList());
  }, []);

  useEffect(() => {
    if (data) {
      console.log("data123", data);

      let colTmp: any[] = [
        {
          name: t("productCode"),
          selector: (row: any) => row.code,
          sortable: true,
        },
        {
          name: t("title"),
          selector: (row: any) => row.name,
          sortable: true,
        },
        {
          name: t("productType"),
          selector: (row: any) => (row.custom ? t("custom") : t("normal")),
          sortable: true,
        },
        {
          name: t("status"),
          selector: (row: any) => t("active"),
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
                text: "ویرایش",
                name: "edit",
              },
              row.custom && {
                icon: <ArrangeVertical variant="Bold" />,
                text: "مدیریت مراحل",
                name: "steps",
              },
              {
                icon: <Trash variant={"Bold"} />,
                text: "حذف",
                name: "delete",
              },
            ].filter(Boolean)}
            handleAction={handleTableAction}
            row={row}
          />
        ),
      });

      setColumns([...colTmp]);

      console.log("data.orders", data.cols);
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
      case "steps":
        Navigator(`${row.code}/steps`);
        break;
      case "edit":
        setOpenAddProduct(true);
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
  const handleCloseAddProductDialog = () => {
    setOpenAddProduct(false);
    setSelectedRow(null);
  };
  return (
    <div className="w-full h-full">
      <AddProductDialog
        open={addProduct}
        handleClose={handleCloseAddProductDialog}
        selectedProductId={selectedRow?.id || undefined}
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
                text={t("addProduct")}
                onClick={() => setOpenAddProduct(true)}
              />
            </div>
          </>
        }
        title={t("products")}
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
export default Factors;
