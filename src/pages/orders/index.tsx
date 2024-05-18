import {Add, Additem, Edit, Eye, Setting4, Trash} from "iconsax-react";
import {useCallback, useEffect, useState} from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Button from "../../components/button/Button";
import OrderFiltersDialog from "../../components/orders/OrderFiltersDialog";
import Table from "../../components/table/Table";
import TableAction from "../../components/table/TableAction";
import {Skeleton} from "@mui/material";
import Accordion from "components/accordion/Accordion";
import transform from "app/utils/transform";
import {useNavigate} from "react-router-dom";
import EmptyListPlaceholder from "components/emptyListPlaceholder/EmptyListPlaceholder";
import {useTranslation} from "react-i18next";
import {useOrderGroupsList, useOrdersList} from "app/queries/orders/hooks";

const Orders = () => {
    const [columns, setColumns] = useState<any[]>([]);
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const Navigate = useNavigate();
    const {t} = useTranslation();
    const {data: orderGroups} = useOrderGroupsList();
    const {data} = useOrdersList();

    const handleOrderAction = (row: any, action: string) => {
        switch (action) {
            case "edit":
                break;
            case "view":
                Navigate(`/orders/${row.id}`);
                break;
            // case "completeOrder":
            // Navigate(`/orders/${row.id}/complete`);
            //   break;
            case "step":
                Navigate(`/orders/${row.id}/${row.step.id}/showForm`);
                break;
            case "delete":
                break;
            default:
                break;
        }
    };

    //for prevent to re-creating this function
    const handleOrderActionCallback = useCallback(handleOrderAction,[Navigate])

    useEffect(() => {
        if (data) {
            let colTmp: any[] = [
                {
                    name: t("orderCode"),
                    selector: (row: any) => row.id,
                    sortable: true,
                },
                {
                    name: t("productName"),
                    selector: (row: any) => row.product.name,
                },
                {
                    name: t("submitDate"),
                    selector: (row: any) => row.jalali_date,
                },
                {
                    name: t("customerName"),
                    selector: (
                        row: any //find order group from row.order_group[0].id in orderGroups and get customer name
                    ) => row.customer
                },
                {
                    name: t("count"),
                    selector: (row: any) => transform.toPersianDigits(row.count || 1),
                },
            ];
            //append cols to columns
            data.cols.forEach((col: any) => {
                colTmp.push({
                    name: col.field_label,
                    selector: (row: any) =>
                        row.additional_data?.find(
                            (item: any) => item.fild_name === col.fild_name
                        )?.field_value?.label ||
                        row.additional_data?.find(
                            (item: any) => item.fild_name === col.fild_name
                        )?.field_value || <div className="bg-error-secondary">{t('dontHave')}</div>,
                });
            });
            colTmp.push({
                name: t("status"),
                selector: (row: any) => row?.step?.step_name,
            });
            colTmp.push({
                allowOverflow: true,
                button: true,
                width: "120px",
                cell: (row: any) => {
                    //////////////
                    const actions: any[] = [];

                    actions.push({
                        icon: <Eye variant="Bold"/>,
                        text: t("viewDetails"),
                        name: "view",
                    });
                    //my roles
                    const myRoles = JSON.parse(
                        localStorage.getItem("nipa_user") || "{}"
                    )?.roles;

                    let atLeastOneMatch = false;
                    if (myRoles) {
                        atLeastOneMatch = row.step?.roles?.some((role: any) =>
                            myRoles.some((myRole: any) => myRole.slug === role.slug)
                        );
                    }
                    if (
                        atLeastOneMatch && 
                        // data.permissions.canCompelete &&
                        row.step.global_step.description !== "initialOrder"
                    ) {
                        actions.push({
                            icon: <Additem variant={"Bold"}/>,
                            text: row.step.step_name || "",
                            name: "step",
                        });
                    }
                    // if (data.permissions.canEdit) {
                    //     actions.push({
                    //         icon: <Edit variant="Bold"/>,
                    //         text: t('edit'),
                    //         name: "edit",
                    //     });
                    // }
                    // if (data.permissions.canDelete) {
                    //     actions.push({
                    //         icon: <Trash variant={"Bold"}/>,
                    //         text: t('delete'),
                    //         name: "delete",
                    //     });
                    // }

                    /////////////////////
                    return (
                        <TableAction
                            handleAction={handleOrderActionCallback}
                            items={[...actions]}
                            row={row}
                        />
                    );
                },
            });

            setColumns([...colTmp]);

            console.log("data.orders", data.cols);
        }
    }, [data,handleOrderActionCallback, t]);
    return (
        <div className="w-full h-full">
            <OrderFiltersDialog
                open={openFilter}
                handleClose={() => setOpenFilter(false)}
            />
            <Breadcrumb
                actions={
                    orderGroups?.length > 0 &&
                    <>
                        {" "}
                        <div className="w-[186px]">
                            <Button
                                icon={<Setting4/>}
                                text={t('advancedFilter')}
                                onClick={() => setOpenFilter(true)}
                                simple
                            />
                        </div>
                        <div className="w-[186px] ms-4">
                            <Button icon={<Add/>} text={t("addNewOrder")} href="create"/>
                        </div>
                    </>
                }
                title={t('orders')}
            />
            <div>
                <div className="w-full">
                    {orderGroups ?
                        orderGroups.length > 0 ?
                            orderGroups.map((item: any) => (
                                <Accordion
                                    key={item.id}
                                    title={t("orderInfoTitle", {
                                        code: transform.toPersianDigits(item.id), date: transform.toPersianDigits(
                                            transform.renderChatTime(
                                                transform.dateToTimestamp(item.created_at)
                                            )
                                        ), user: item.user.name
                                            ? item.user.name + " " + item.user.last_name
                                            : item.user.mobile

                                    })}
                                >
                                    <Table
                                        columns={columns}
                                        data={data?.orders.filter(
                                            (x: any) => x.order_group?.[0]?.id === item.id
                                        )}
                                    />
                                </Accordion>
                            )) :
                            <EmptyListPlaceholder
                                title={t("noOrdersFound")}
                                subTitle={t("orderFirstOrder") || ""}
                                action={
                                    <Button
                                        icon={<Add/>}
                                        text={t("submitOrder")}
                                        href="create"
                                        sm
                                    />
                                }
                            />
                        : (
                            <div className="grid grid-cols-1 gap-[40px]">
                                {Array.from(Array(3).keys()).map((item, index) => (
                                    <Skeleton
                                        key={index}
                                        variant="rounded"
                                        width={"100%"}
                                        height={72}
                                        animation="wave"
                                    />
                                ))}
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};
export default Orders;
