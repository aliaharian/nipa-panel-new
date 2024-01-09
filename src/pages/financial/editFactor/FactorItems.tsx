import Button from "components/button/Button";
import transform from "app/utils/transform";
import Section from "components/section/Section";
import { useTranslation } from "react-i18next";
import { Add, Edit, Trash } from "iconsax-react";
import TableSkeleton from "components/skeleton/TableSkeleton";
import Table from "components/table/Table";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TableAction from "components/table/TableAction";
import { Tooltip, Typography } from "@mui/material";
import AddFactorItemDialog from "components/financial/AddFactorItemDialog";
import { factorItem } from "app/models/financial";
import DeletePopup from "components/popup/DeletePopup";

type FactorItemsProps = {
  factorInfo: {
    factor_items: factorItem[];
    last_status: any;
    meta?: any;
  };
  handleAddFactorItem: (values: factorItem) => void;
  handleEditFactorItem: (values: factorItem) => void;
  handleDeleteFactorItem: (id: number) => void;
  printing: boolean;
};
const FactorItems = ({
  factorInfo,
  handleAddFactorItem,
  handleEditFactorItem,
  handleDeleteFactorItem,
  printing,
}: FactorItemsProps) => {
  const { t } = useTranslation("common");
  const [columns, setColumns] = useState<any[]>([]);
  const [dataTmp, setDataTmp] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [openAddItemDialog, setOpenAddItemDialog] = useState<boolean>(false);
  const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false);

  useEffect(() => {
    factorInfo && setDataTmp(factorInfo?.factor_items || []);
  }, [factorInfo]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      if (factorInfo) {
        let colTmp: any[] = [
          {
            name: "#",
            selector: (row: any, index: number) =>
              printing ? index + 1 : row.id,
            sortable: false,
            width: printing ? "30px" : "50px",
          },
          {
            name: t("orderCode"),
            selector: (row: any) => row.order_id || "---",
            sortable: false,
            width: printing ? "80px" : "100px",
          },
          {
            name: t("title"),
            selector: (row: any) => (
              <Tooltip
                title={
                  <Typography className="!text-[13px]">{row.name}</Typography>
                }
              >
                <Typography className="!text-[13px]" noWrap>
                  {row.name}
                </Typography>
              </Tooltip>
            ),
            sortable: false,
            width: printing ? "100px" : undefined,
            wrap: printing,
          },
          {
            name: t("width"),
            selector: (row: any) =>
              row.width
                ? transform.toPersianDigitsPutCommas(row.width.toString())
                : "---",
            sortable: false,
            width: printing ? "50px" : undefined,
          },
          {
            name: t("height"),
            selector: (row: any) =>
              row.height
                ? transform.toPersianDigitsPutCommas(row.height.toString())
                : "---",
            sortable: false,
            width: printing ? "50px" : undefined,
          },
          !printing && {
            name: t("area"),
            selector: (row: any) =>
              row.count_type === "m2"
                ? transform.toPersianDigitsPutCommas(
                    (row.width * row.height).toString()
                  )
                : "---",
            sortable: false,
            width: printing ? "50px" : undefined,
          },
          {
            name: t("count"),
            selector: (row: any) =>
              row.count
                ? transform.toPersianDigitsPutCommas(row.count.toString())
                : "---",
            sortable: false,
            width: printing ? "50px" : "80px",
          },
          {
            name: t("amount"),
            selector: (row: any) => {
              const area = row.count_type === "m2" ? row.width * row.height : 1;
              const count = row.count || 0;
              return transform.toPersianDigitsPutCommas(
                (area * count).toString()
              );
            },
            sortable: false,
            width: printing ? "50px" : undefined,
          },
          {
            name: t("unit_price"),
            selector: (row: any) => {
              return (
                <Tooltip
                  title={
                    <Typography className="!text-[13px]">
                      {row.unit_price
                        ? transform.toPersianDigitsPutCommas(
                            row.unit_price.toString()
                          ) +
                          " " +
                          t("toman")
                        : t("notDetermined")}
                    </Typography>
                  }
                >
                  <Typography noWrap={!printing} className="!text-[13px]">
                    {row.unit_price
                      ? transform.toPersianDigitsPutCommas(
                          row.unit_price.toString()
                        ) +
                        " " +
                        t("toman")
                      : t("notDetermined")}
                  </Typography>
                </Tooltip>
              );
            },
            sortable: false,
            width: printing ? "95px" : "160px",
            wrap: printing,
          },
          {
            name: t("sum"),
            selector: (row: any) => {
              const area = row.count_type === "m2" ? row.width * row.height : 1;
              const count = row.count || 0;
              const unit_price = row.unit_price || 0;
              const payable = area * count * unit_price;
              return (
                <Tooltip
                  title={
                    <Typography className="!text-[13px]">
                      {payable
                        ? transform.toPersianDigitsPutCommas(
                            payable.toString()
                          ) +
                          " " +
                          t("toman")
                        : t("finalRriceNotDetermined")}
                    </Typography>
                  }
                >
                  <Typography noWrap={!printing} className="!text-[13px]">
                    {payable
                      ? transform.toPersianDigitsPutCommas(payable.toString()) +
                        " " +
                        t("toman")
                      : t("notDetermined")}
                  </Typography>
                </Tooltip>
              );
            },
            width: printing ? "95px" : "160px",
            wrap: printing,
            sortable: false,
          },
          {
            name: t("discount"),
            selector: (row: any) => (
              <Tooltip
                title={
                  <Typography className="!text-[13px]">
                    {row.off_price
                      ? transform.toPersianDigitsPutCommas(
                          row.off_price.toString()
                        ) + t("toman")
                      : "---"}
                  </Typography>
                }
              >
                <Typography noWrap={!printing} className="!text-[13px]">
                  {row.off_price
                    ? transform.toPersianDigitsPutCommas(
                        row.off_price.toString()
                      ) + t("toman")
                    : "---"}
                </Typography>
              </Tooltip>
            ),

            sortable: false,
            width: printing ? "95px" : "160px",
            wrap: printing,
          },
          {
            name: t("additional"),
            selector: (row: any) => (
              <Tooltip
                title={
                  <Typography className="!text-[13px]">
                    {row.additional_price
                      ? transform.toPersianDigitsPutCommas(
                          row.additional_price.toString()
                        ) + t("toman")
                      : "---"}
                  </Typography>
                }
              >
                <Typography noWrap={!printing} className="!text-[13px]">
                  {row.additional_price
                    ? transform.toPersianDigitsPutCommas(
                        row.additional_price.toString()
                      ) + t("toman")
                    : "---"}
                </Typography>
              </Tooltip>
            ),

            sortable: false,
            width: printing ? "95px" : "160px",
            wrap: printing,
          },
          {
            name: t("description"),
            selector: (row: any) => (
              <Tooltip
                title={
                  <Typography className="!text-[13px]">
                    {row.description}
                  </Typography>
                }
              >
                <Typography
                  className="!text-[13px]"
                  maxWidth={200}
                  noWrap={!printing}
                >
                  {row.description}
                </Typography>
              </Tooltip>
            ),
            sortable: false,
            width: printing ? "130px" : "200px",
            wrap: printing,
            allowOverflow:printing
          },
          {
            name: t("payable"),
            selector: (row: any) => {
              const area = row.count_type === "m2" ? row.width * row.height : 1;
              const discount = row.off_price ? row.off_price : 0;
              const additional = row.additional_price
                ? row.additional_price
                : 0;
              const count = row.count || 0;
              const unit_price = row.unit_price || 0;
              const payable = area * count * unit_price - discount + additional;
              return (
                <Tooltip
                  title={
                    <Typography className="!text-[13px]">
                      {payable
                        ? transform.toPersianDigitsPutCommas(
                            payable.toString()
                          ) +
                          " " +
                          t("toman")
                        : t("payablePriceNotDetermined")}
                    </Typography>
                  }
                >
                  <Typography noWrap={!printing} className="!text-[13px]">
                    {payable
                      ? transform.toPersianDigitsPutCommas(payable.toString()) +
                        " " +
                        t("toman")
                      : t("notDetermined")}
                  </Typography>
                </Tooltip>
              );
            },
            width: printing ? "95px" : "160px",
            wrap: printing,
            sortable: false,
          },
        ].filter(Boolean);
        (transform.checkPermission("can-delete-invoice-item") ||
          transform.checkPermission("can-update-invoice-item")) &&
          !printing &&
          factorInfo?.meta?.editable &&
          colTmp.push({
            allowOverflow: true,
            button: true,
            width: "120px",
            cell: (row: any) => (
              <TableAction
                items={[
                  transform.checkPermission("can-update-invoice-item") && {
                    icon: <Edit variant="Bold" />,
                    text: t("edit"),
                    name: "edit",
                  },
                  !row.order_id &&
                    !row.product_id &&
                    transform.checkPermission("can-delete-invoice-item") && {
                      icon: <Trash variant={"Bold"} />,
                      text: t("delete"),
                      name: "delete",
                    },
                ].filter(Boolean)}
                handleAction={handleTableAction}
                row={row}
              />
            ),
          });

        // if (data.accessAll) {
        //     colTmp.push({
        //         name: t("customerName"),
        //         selector: (row: any) =>
        //             row.full_name,
        //         sortable: false,
        //     })
        // }

        setColumns([...colTmp]);
        resolve("ok");
      } else {
        reject("not loaded");
      }
    }).then((data: any) => {
      if (printing) {
        setTimeout(() => {
          window.print();
        }, 100);
      }
    });
  }, [factorInfo, printing]);

  const handleTableAction = (row: any, action: string) => {
    // setSelectedRow(row);
    switch (action) {
      case "delete":
        setSelectedItem(row);
        setOpenDeletePopup(true);
        break;
      case "edit":
        setSelectedItem(row);
        setOpenAddItemDialog(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {transform.checkPermission("can-create-invoice-item") &&
        factorInfo?.meta?.editable && (
          <AddFactorItemDialog
            open={openAddItemDialog}
            handleClose={() => {
              setOpenAddItemDialog(false);
              setSelectedItem(null);
            }}
            handleSubmit={(values) => {
              values.id
                ? handleEditFactorItem(values)
                : handleAddFactorItem(values);
            }}
            data={selectedItem}
          />
        )}
      {transform.checkPermission("can-delete-invoice-item") &&
        factorInfo?.meta?.editable && (
          <DeletePopup
            title={t("deleteFactorItemConfirmation")}
            open={openDeletePopup}
            onClose={() => {
              setOpenDeletePopup(false);
              setSelectedItem(null);
            }}
            handleConfirm={() => {
              handleDeleteFactorItem(selectedItem.id);
              setOpenDeletePopup(false);
            }}
          />
        )}
      <Section
        printPadding
        headerTitle={t("factorItems") || ""}
        headerActions={
          transform.checkPermission("can-create-invoice-item") &&
          factorInfo?.meta?.editable && (
            <div className="w-[111px]">
              <Button
                className="print:hidden"
                text={t("add")}
                onClick={() => {
                  setSelectedItem(null);
                  setOpenAddItemDialog(true);
                }}
                icon={<Add />}
              />
            </div>
          )
        }
      >
        {factorInfo ? (
          <>
            <Table columns={columns} data={dataTmp || []} />
          </>
        ) : (
          <TableSkeleton />
        )}
      </Section>
    </>
  );
};

export default FactorItems;
