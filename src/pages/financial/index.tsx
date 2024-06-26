import {Add, Edit, Setting4,} from "iconsax-react";
import {useEffect, useState} from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Button from "components/button/Button";
import Table from "components/table/Table";
import TableAction from "components/table/TableAction";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import TableSkeleton from "components/skeleton/TableSkeleton";
import {Tooltip, Typography} from "@mui/material";
import transform from "app/utils/transform";
import Pagination from "components/pagination/Pagination";
import FinancialFiltersDialog from "components/financial/FinancialFiltersDialog";
import EmptyListPlaceholder from "components/emptyListPlaceholder/EmptyListPlaceholder";
import {useInvoicesList} from "app/queries/financial/hooks";

const Factors = () => {
    const [columns, setColumns] = useState<any[]>([]);
    const Navigator = useNavigate();
    const {t} = useTranslation("common");
    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [page, setPage] = useState<number>(1);
    const [filters, setFilters] = useState<any>({});
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const {data} = useInvoicesList(page, filters)


    useEffect(() => {
        if (data?.factors) {

            let colTmp: any[] = [
                {
                    name: t("factorNo"),
                    selector: (row: any) => row.code,
                    sortable: true,
                }];

            if (data?.accessAll) {
                colTmp.push({
                    name: t("customer"),
                    selector: (row: any) => row.customer_full_name,
                    sortable: true,
                })
            }

            colTmp.push({
                    name: t("forWhat"),
                    selector: (row: any) =>
                        <Tooltip title={`${t("forOrderNumber")} ${row.order_group_id}`}>
                            <Typography className="!text-[13px]">
                                {t("forOrderNumber")} {row.order_group_id}
                            </Typography>
                        </Tooltip>,
                    sortable: true,
                },
                {
                    name: t("createdAt"),
                    selector: (row: any) =>
                        transform.renderChatTime(transform.dateToTimestamp(row.created_at), false),
                    sortable: true,
                },
                {
                    name: t("sumPrice"),
                    selector: (row: any) => row.total_price ? transform.toPersianDigitsPutCommas(row.total_price.toString()) + " " + t("toman") + " " : t("notDetermined"),
                    sortable: true,
                },
                {
                    name: t("status"),
                    selector: (row: any) =>
                        <Tooltip title={row.last_status?.description ?? row.last_status?.factor_status_enum?.name}>
                            <Typography noWrap
                                        className={`!text-[13px] p-2 rounded-[6px] ${transform.renderStatusStyle(row.last_status?.factor_status_enum?.description)}`}>
                                {row.last_status?.factor_status_enum?.name}
                            </Typography>
                        </Tooltip>,
                    sortable: true,
                },
            );

            colTmp.push({
                allowOverflow: true,
                button: true,
                width: "120px",
                cell: (row: any) => (
                    (transform.checkPermission("can-view-all-invoices") || row.validity?.validity) &&
                    <TableAction
                        items={[
                            {
                                icon: <Edit variant="Bold"/>,
                                text: data.canEdit ? t("editPreFactor") : t("viewFactor"),
                                name: "edit",
                            },
                        ].filter(Boolean)}
                        handleAction={handleTableAction}
                        row={row}
                    />
                ),
            });

            setColumns([...colTmp]);
        }
    }, [data]);
    const handleTableAction = (row: any, action: string) => {
        setSelectedRow(row);
        switch (action) {
            case "delete":
                // setOpenDeletePopup(true);
                break;
            case "edit":
                Navigator('/finance/' + row.code)
                // setOpenDeletePopup(true);
                break;
            default:
                break;
        }
    };

    const handleApplyFilter = (data: any) => {
        setPage(1);
        setFilters(data);
        // Dispatch(invoicesList(1, data));
    }

    return (
        <div className="w-full h-full">
            <FinancialFiltersDialog
                open={openFilter}
                handleClose={() => setOpenFilter(false)}
                handleSubmit={handleApplyFilter}
            />
            <Breadcrumb
                actions={
                    data?.factors?.length > 0 &&
                    <>
                        <div className="w-[153px] ms-4">
                            <Button
                                icon={<Setting4/>}
                                text={t("advancedFilter")}
                                onClick={() => {
                                    setOpenFilter(true)
                                }}
                                simple
                                className="!bg-white !text-text-800"
                            />
                        </div>
                    </>
                }
                title={t("financial")}
            />
            <div>

                {data ? data?.factors?.length > 0 ?
                        <>
                            <Table columns={columns} data={data?.factors || []}/>

                            <div className="mt-8">
                                <Pagination
                                    total={data.pagination.total_pages}
                                    current={data.pagination.current_page}
                                    onChange={(page) => {
                                        setPage(page)
                                    }}
                                />
                            </div>
                        </>
                        :
                        <EmptyListPlaceholder
                            title={t("noFactorsFound")}
                            subTitle={t("orderFirstOrder") || ""}
                            action={
                                <Button
                                    icon={<Add/>}
                                    text={t("submitOrder")}
                                    href="/orders/create"
                                    sm
                                />
                            }
                        />
                    : (
                        <TableSkeleton/>
                    )}
            </div>
        </div>
    );
};
export default Factors;
