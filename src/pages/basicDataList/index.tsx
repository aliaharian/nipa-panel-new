import {
  Add,
  ArrangeVertical,
  CloudChange,
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
import DeletePopup from "components/popup/DeletePopup";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { useNavigate, useParams } from "react-router-dom";
import basicDataService from "app/redux/basicData/service";
import { BasicData, BasicDataItem } from "app/models/basicData";
import transform from "app/utils/transform";
import AddBasicDataItemDialog from "components/basicDatas/AddBasicDataItemDialog";

const BasicDataList = () => {
  const [columns, setColumns] = useState<any[]>([]);
  const [data, setData] = useState<BasicData>();
  let { id } = useParams();

  const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false);
  const Navigator = useNavigate();
  const deleteSuccess = useAppSelector(
    (state: any) => state.products.deleteSuccess
  );
  const { t } = useTranslation("common");
  const Navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [addBasicDataItem, setOpenAddBasicDataItem] = useState<boolean>(false);
  const [editData, setEditData] = useState<BasicDataItem>();

  const handleClosedeletePopup = () => {
    setOpenDeletePopup(false);
  };

  const Dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      getBasicData(id);
    }
  }, []);
  const getBasicData = async (id: string) => {
    let res = await basicDataService.getBasicDataInfo(parseInt(id));
    setData(res);
  };
  const colorIndicator = (row: any) => {
    return (
      <div className="flex items-center justify-center">
        <div
          style={{ backgroundColor: row.code }}
          className="border border-text-300 w-6 h-6 rounded-full ml-2"
        ></div>
        <p>{row.name}</p>
      </div>
    );
  };
  const handleTableAction = async (row: any, action: string) => {
    console.log("row", row);
    console.log("action", action);
    setSelectedRow(row);
    switch (action) {
      case "delete":
        setOpenDeletePopup(true);
        break;
      case "changeState":
        await basicDataService.changeBasicDataItemState(row.id);
        let tmp = row;
        tmp.status = !tmp.status;
        let itemsTmp = data?.items;
        let index = itemsTmp?.findIndex((x) => x.id == tmp.id);
        if (itemsTmp && data) {
          itemsTmp[index || -1] = tmp;
          setData({ ...data, items: [...itemsTmp] });
        }
        //
        break;
      case "edit":
        setEditData(row);
        setOpenAddBasicDataItem(true);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    if (data) {
      console.log("data123", data);

      let colTmp: any[] = [
        {
          name: t("code") + " " + data.name,
          selector: (row: any) => row.code,
          sortable: true,
        },
        {
          name: t("title"),
          selector: (row: any) =>
            data.type === "color" ? colorIndicator(row) : row.name,
          sortable: true,
        },
        {
          name: t("createDate"),
          selector: (row: any) =>
            transform.renderChatTime(transform.dateToTimestamp(row.created_at)),
          sortable: true,
        },
        {
          name: t("status"),
          selector: (row: any) => (row.status ? t("active") : t("inactive")),
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
              },
              {
                icon: <CloudChange variant="Bold" />,
                text: t("changeState"),
                name: "changeState",
              },
              {
                icon: <Trash variant={"Bold"} />,
                text: t("delete"),
                name: "delete",
              },
            ]}
            handleAction={handleTableAction}
            row={row}
          />
        ),
      });

      setColumns([...colTmp]);
      console.log("data.", data.items);
    }
  }, [data]);

  const handleDeleteBasicDataItem = async () => {
    setDeleteLoading(true);
    console.log("selectedRow", selectedRow);
    await basicDataService.deleteBasicDataItem(selectedRow.id);

    id && getBasicData(id);

    setDeleteLoading(false);
    SnackbarUtils.success(t("deleteBasicDataSuccess"));
    setOpenDeletePopup(false);

    // Dispatch(deleteBasicDataItem(selectedRow.id));
  };
  // useEffect(() => {
  //   if (deleteSuccess) {
  //     setDeleteLoading(false);
  //     setOpenDeletePopup(false);
  //     SnackbarUtils.success(t("deleteBasicDataItemSuccess"));
  //     setTimeout(() => {
  //       Dispatch(setDeleteSuccess(false));
  //     }, 100);
  //   }
  // }, [deleteSuccess]);

  const handleCloseAddDialog = () => {
    setOpenAddBasicDataItem(false);
    setEditData(undefined)
  };
  return (
    <div className="w-full h-full">
      <AddBasicDataItemDialog
        open={addBasicDataItem}
        handleClose={handleCloseAddDialog}
        data={data}
        getBasicData={getBasicData}
        editData={editData}
      />

      <DeletePopup
        title={t("deleteBasicDataConfirmation")}
        open={openDeletePopup}
        onClose={handleClosedeletePopup}
        handleConfirm={handleDeleteBasicDataItem}
        loading={deleteLoading}
      />
      <Breadcrumb
        actions={
          <>
            <div className="w-[186px] mr-[16px]">
              <Button
                icon={<Add />}
                text={t("add") + " " + data?.name}
                onClick={() => setOpenAddBasicDataItem(true)}
              />
            </div>
          </>
        }
        handleBack={() => Navigate("/basicDatas")}
        title={t("manage") + " " + data?.name}
      />
      <div>
        {/* <button onClick={zipArray}>zip</button>
        <button onClick={unzipArray}>unzip</button> */}

        <Table columns={columns} data={data?.items || []} />
      </div>
    </div>
  );
};
export default BasicDataList;
