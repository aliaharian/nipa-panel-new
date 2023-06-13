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
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useTranslation } from "react-i18next";

import AddProductDialog from "components/products/AddProductDialog";
import DeletePopup from "components/popup/DeletePopup";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { useNavigate, useParams } from "react-router-dom";
import Card from "components/card/Card";
import BasicDataCardChild from "components/basicDatas/BasicDataCardChild";
import { basicDatasList } from "app/redux/basicData/actions";
import { Skeleton } from "@mui/material";

const BasicDatas = () => {
  const Navigate = useNavigate();

  const { t } = useTranslation("common");

  const Dispatch = useAppDispatch();
  const basicDatas = useAppSelector((state) => state.basicData.basicDatas);
  useEffect(() => {
    Dispatch(basicDatasList());
  }, []);
  const handleOpenBasicData = (id: number) => {
    Navigate("/basicDatas/" + id);
  };
  return (
    <div className="w-full h-full">
      <Breadcrumb title={t("basicDatas")} />
      <div className="grid grid-cols-4 2xl:grid-cols-3 gap-4">
        {basicDatas
          ? basicDatas.map((data) => (
              <Card key={data.id} onClick={() => handleOpenBasicData(data.id)}>
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
