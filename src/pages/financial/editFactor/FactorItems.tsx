import Button from "components/button/Button";
import transform from "app/utils/transform"
import Section from "components/section/Section"
import { useTranslation } from "react-i18next";
import { Add, Edit, Trash } from "iconsax-react";
import TableSkeleton from "components/skeleton/TableSkeleton";
import Table from "components/table/Table";
import { useEffect, useState } from "react";
import TableAction from "components/table/TableAction";
import { Tooltip, Typography } from "@mui/material";

const FactorItems = ({ factorStatus, factorInfo }: any) => {
    const { t } = useTranslation("common");
    const [columns, setColumns] = useState<any[]>([]);
    const [dataTmp, setDataTmp] = useState<any[]>([]);
    useEffect(() => {
        factorInfo && setDataTmp(factorInfo?.factor_items || [])
    }, [factorInfo])
    useEffect(() => {
        if (factorInfo) {

            let colTmp: any[] = [
                {
                    name: "#",
                    selector: (row: any) => row.id,
                    sortable: false,
                    width: "50px"
                },
                {
                    name: t("orderCode"),
                    selector: (row: any) => row.order_id || "---",
                    sortable: false,
                    width: "100px"

                },
                {
                    name: t("title"),
                    selector: (row: any) => <Tooltip title={<Typography className="!text-[13px]">
                        {row.name}
                    </Typography>}><Typography className="!text-[13px]" noWrap>{row.name}</Typography></Tooltip>,
                    sortable: false,
                },
                {
                    name: t("width"),
                    selector: (row: any) => row.width ? transform.toPersianDigitsPutCommas(row.width.toString()) : "---",
                    sortable: false,
                },
                {
                    name: t("height"),
                    selector: (row: any) => row.height ? transform.toPersianDigitsPutCommas(row.height.toString()) : "---",
                    sortable: false,
                },
                {
                    name: t("area"),
                    selector: (row: any) => row.count_type === "m2" ? transform.toPersianDigitsPutCommas((row.width * row.height).toString()) : "---",
                    sortable: false,
                },
                {
                    name: t("count"),
                    selector: (row: any) => row.count ? transform.toPersianDigitsPutCommas(row.count.toString()) : "---",
                    sortable: false,
                    width: "80px"
                },
                {
                    name: t("amount"),
                    selector: (row: any) => {
                        const area = row.count_type === "m2" ? row.width * row.height : 1;
                        const count = row.count || 0;
                        return transform.toPersianDigitsPutCommas((area * count).toString());
                    },
                    sortable: false,
                },
                {
                    name: t("unit_price"),
                    selector: (row: any) => {
                        return <Tooltip title={<Typography className="!text-[13px]">{
                            row.unit_price ? transform.toPersianDigitsPutCommas((row.unit_price).toString()) + " تومان" : "تعیین نشده"
                        }
                        </Typography>}>
                            <Typography noWrap className="!text-[13px]">
                                {
                                    row.unit_price ? transform.toPersianDigitsPutCommas((row.unit_price).toString()) + " تومان" : "تعیین نشده"
                                }
                            </Typography>
                        </Tooltip>

                    },
                    sortable: false,
                    width: "160px"
                },
                {
                    name: t("sum"),
                    selector: (row: any) => {
                        const area = row.count_type === "m2" ? row.width * row.height : 1;
                        const count = row.count || 0;
                        const unit_price = row.unit_price || 0;
                        const payable = (area * count * unit_price);
                        return (
                            <Tooltip title={<Typography className="!text-[13px]">
                                {payable ? transform.toPersianDigitsPutCommas(payable.toString()) + " تومان" : "مبلغ نهایی تعیین نشده"
                                }
                            </Typography>}>
                                <Typography noWrap className="!text-[13px]">
                                    {
                                        payable ? transform.toPersianDigitsPutCommas(payable.toString()) + " تومان" : "تعیین نشده"
                                    }
                                </Typography>
                            </Tooltip>
                        )
                    },
                    width: "160px",
                    sortable: false,
                },
                {
                    name: t("discount"),
                    selector: (row: any) => <Tooltip title={<Typography className="!text-[13px]">
                        {
                            row.off_price ? transform.toPersianDigitsPutCommas(row.off_price.toString()) + "تومان" : "---"
                        }
                    </Typography>}>
                        <Typography noWrap className="!text-[13px]">
                            {
                                row.off_price ? transform.toPersianDigitsPutCommas(row.off_price.toString()) + "تومان" : "---"
                            }
                        </Typography>
                    </Tooltip>,

                    sortable: false,
                    width:"160px"

                },
                {
                    name: t("additional"),
                    selector: (row: any) => <Tooltip title={<Typography className="!text-[13px]">
                        {
                            row.additional_price ? transform.toPersianDigitsPutCommas(row.additional_price.toString()) + "تومان" : "---"
                        }
                    </Typography>}>
                        <Typography noWrap className="!text-[13px]">
                            {
                                row.additional_price ? transform.toPersianDigitsPutCommas(row.additional_price.toString()) + "تومان" : "---"
                            }
                        </Typography>
                    </Tooltip>,

                    sortable: false,
                    width:"160px"

                },
                {
                    name: t("description"),
                    selector: (row: any) =>
                        <Tooltip title={<Typography className="!text-[13px]">
                            {row.description
                            }
                        </Typography>}>
                            <Typography className="!text-[13px]" maxWidth={200} noWrap={true}>
                                {
                                    row.description
                                }
                            </Typography>
                        </Tooltip >
                    ,
                    sortable: false,
                    width: "200px",
                    wrap: false,
                },
                {
                    name: t("payable"),
                    selector: (row: any) => {
                        const area = row.count_type === "m2" ? row.width * row.height : 1;
                        const discount = row.off_price ? row.off_price : 0;
                        const additional = row.additional_price ? row.additional_price : 0;
                        const count = row.count || 0;
                        const unit_price = row.unit_price || 0;
                        const payable = (area * count * unit_price) - discount + additional;
                        return (
                            <Tooltip title={<Typography className="!text-[13px]">
                                {payable ? transform.toPersianDigitsPutCommas(payable.toString()) + " تومان" : "مبلغ قابل پرداخت تعیین نشده"
                                }
                            </Typography>}>
                                <Typography noWrap className="!text-[13px]">
                                    {
                                        payable ? transform.toPersianDigitsPutCommas(payable.toString()) + " تومان" : "تعیین نشده"
                                    }
                                </Typography>
                            </Tooltip>
                        )
                    },
                    width: "160px",
                    sortable: false,
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
                                text: "ویرایش پیش فاکتور",
                                name: "edit",
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

            // if (data.accessAll) {
            //     colTmp.push({
            //         name: t("customerName"),
            //         selector: (row: any) =>
            //             row.full_name,
            //         sortable: false,
            //     })
            // }


            setColumns([...colTmp]);
        }
    }, [factorInfo]);

    const handleTableAction = (row: any, action: string) => {
        // setSelectedRow(row);
        switch (action) {
            case "delete":
                // setOpenDeletePopup(true);
                break;
            default:
                break;
        }
    };

    return (
        <Section headerTitle={t("factorItems") || ""}
            headerActions={
                <div className="w-[111px]">
                    <Button
                        text={t("add")}
                        onClick={() => { }}
                        icon={<Add />}
                    />
                </div>
            }
        >

            {(factorInfo) ? (

                <>
                    <Table columns={columns} data={dataTmp || []} />


                </>

            ) : (
                <TableSkeleton />
            )}

        </Section>
    )
}

export default FactorItems
