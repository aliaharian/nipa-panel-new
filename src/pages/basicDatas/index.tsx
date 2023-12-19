import {
  Add,
  ArrangeVertical,
  Edit,
  Eye,
  Setting4,
  Trash,
} from "iconsax-react";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useTranslation } from "react-i18next";

import DeletePopup from "components/popup/DeletePopup";
import { useNavigate } from "react-router-dom";
import Card from "components/card/Card";
import BasicDataCardChild from "components/basicDatas/BasicDataCardChild";
import { basicDatasList } from "app/redux/basicData/actions";
import { Skeleton } from "@mui/material";
import Button from "components/button/Button";
import AddBasicDataDialog from "components/basicDatas/AddBasicDataDialog";
import basicDataService from "app/redux/basicData/service";
import SnackbarUtils from "app/utils/SnackbarUtils";

const BasicDatas = () => {
  const Navigate = useNavigate();
  const [addBasicData, setOpenAddBasicData] = useState<boolean>(false);

  const { t } = useTranslation("common");
  const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<any>();
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  const Dispatch = useAppDispatch();
  const basicDatas = useAppSelector((state) => state.basicData.basicDatas);
  useEffect(() => {
    Dispatch(basicDatasList());
  }, []);
  const handleOpenBasicData = (id: number) => {
    Navigate("/basicDatas/" + id);
  };

  const handleCloseAddDialog = () => {
    setOpenAddBasicData(false);
  };
  const handleDeleteBasicData = async () => {
    setDeleteLoading(true);
    console.log(selectedData);
    await basicDataService.deleteBasicData(selectedData.id);
    Dispatch(basicDatasList());

    setDeleteLoading(false);
    SnackbarUtils.success(t("deleteBasicDataSuccess"));
    setOpenDeletePopup(false);
  };
  return (
    <div className="w-full h-full">
      <AddBasicDataDialog
        open={addBasicData}
        handleClose={handleCloseAddDialog}
        // data={data}
        getBasicData={() => Dispatch(basicDatasList())}
        // editData={editData}
      />
      <DeletePopup
        title={t("deleteBasicDataConfirmation")}
        open={openDeletePopup}
        onClose={() => setOpenDeletePopup(false)}
        handleConfirm={handleDeleteBasicData}
        loading={deleteLoading}
      />
      <Breadcrumb
        title={t("basicDatas")}
        actions={
          <>
            <div className="w-[186px] ms-4">
              {basicDatas ? (
                <Button
                  icon={<Add />}
                  text={t("add") + " " + t("basicDatas")}
                  onClick={() => setOpenAddBasicData(true)}
                />
              ) : (
                <Skeleton
                  variant="rounded"
                  width={186}
                  height={48}
                  animation="wave"
                />
              )}
            </div>
          </>
        }
      />
      <div className="grid grid-cols-4 2xl:grid-cols-3 gap-4">
        {basicDatas
          ? basicDatas.map((data) => (
              <Card
                handleDelete={() => {
                  setOpenDeletePopup(true);
                  setSelectedData(data);
                }}
                key={data.id}
                onClick={() => handleOpenBasicData(data.id)}
              >
                <BasicDataCardChild
                  title={data.name}
                  count={data.items_count || 0}
                />
              </Card>
            ))
          : Array.from(Array(6).keys()).map((item, index) => (
              <Skeleton
                key={index}
                variant="rounded"
                width={"100%"}
                height={100}
                animation="wave"
              />
            ))}
      </div>
    </div>
  );
};
export default BasicDatas;
