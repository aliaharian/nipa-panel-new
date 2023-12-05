import { Add, Additem, Edit, Eye, Setting4, Trash } from "iconsax-react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { orderGroupsList, ordersList } from "../../app/redux/orders/actions";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Button from "../button/Button";
import OrderFiltersDialog from "../orders/OrderFiltersDialog";
import SideDialog from "../sideDialog/SideDialog";
import Table from "../table/Table";
import TableAction from "../table/TableAction";
import { Skeleton } from "@mui/material";
import Accordion from "components/accordion/Accordion";
import transform from "app/utils/transform";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const data = useAppSelector((state) => state.orders.orders);
  const orderGroups = useAppSelector((state) => state.orders.orderGroups);
  const [columns, setColumns] = useState<any[]>([]);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const Navigate = useNavigate();
  // let columns: any = [
  //   {
  //     name: "کد سفارش",
  //     selector: (row: any) => row.id,
  //     sortable: true,
  //   },
  //   {
  //     name: "تاریخ ثبت",
  //     selector: (row: any) => row.jalali_date,
  //   },
  //   {
  //     name: "نام مشتری",
  //     selector: (row: any) => row.user.name + " " + row.user.last_name,
  //   },
  //   {
  //     name: "نام دریافت کننده",
  //     selector: (row: any) => row.customer_name,
  //   },
  // ];
  // const data:any = [];

  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(ordersList());
    Dispatch(orderGroupsList());
  }, []);

  useEffect(() => {
    if (data) {
      let colTmp: any[] = [
        {
          name: "کد سفارش",
          selector: (row: any) => row.id,
          sortable: true,
        },
        {
          name: "نام محصول",
          selector: (row: any) => row.product.name,
        },
        {
          name: "تاریخ ثبت",
          selector: (row: any) => row.jalali_date,
        },
        {
          name: "نام مشتری",
          selector: (
            row: any //find order group from row.order_group[0].id in orderGroups and get customer name
          ) => row.customer
        },
        {
          name: "تعداد",
          selector: (row: any) => transform.toPersianDigits(row.count || 1),
        },
      ];
      //append cols to columns
      data.cols.map((col: any) => {
        colTmp.push({
          name: col.field_label,
          selector: (row: any) =>
            row.additional_data?.find(
              (item: any) => item.fild_name === col.fild_name
            )?.field_value?.label ||
            row.additional_data?.find(
              (item: any) => item.fild_name === col.fild_name
            )?.field_value || <div className="bg-error-secondary">ندارد</div>,
        });
      });
      colTmp.push({
        name: "وضعیت",
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
            icon: <Eye variant="Bold" />,
            text: "مشاهده جزئیات",
            name: "view",
          });
          //my roles
          const myRoles = JSON.parse(
            localStorage.getItem("nipa_user") || "{}"
          )?.roles;

          let atLeastOneMatch = false;
          if (myRoles) {
            atLeastOneMatch = row.nextStep?.roles?.some((role: any) =>
              myRoles.some((myRole: any) => myRole.slug == role.slug)
            );
          }
          if (
            atLeastOneMatch
            // data.permissions.canCompelete &&
            // row.step.global_step.description === "initialOrder"
          ) {
            actions.push({
              icon: <Additem variant={"Bold"} />,
              text: row.nextStep.step_name || "",
              name: "nextStep",
            });
          }
          if (data.permissions.canEdit) {
            actions.push({
              icon: <Edit variant="Bold" />,
              text: "ویرایش",
              name: "edit",
            });
          }
          if (data.permissions.canDelete) {
            actions.push({
              icon: <Trash variant={"Bold"} />,
              text: "حذف",
              name: "delete",
            });
          }

          /////////////////////
          return (
            <TableAction
              handleAction={handleOrderAction}
              items={[...actions]}
              row={row}
            />
          );
        },
      });

      setColumns([...colTmp]);

      console.log("data.orders", data.cols);
    }
  }, [data]);
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
      case "nextStep":
        Navigate(`/orders/${row.id}/${row.nextStep.id}/showForm`);
        break;
      case "delete":
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-full h-full">
      <OrderFiltersDialog
        open={openFilter}
        handleClose={() => setOpenFilter(false)}
      />
      <Breadcrumb
        actions={
          <>
            {" "}
            <div className="w-[186px]">
              <Button
                icon={<Setting4 />}
                text="فیلتر پیشرفته"
                onClick={() => setOpenFilter(true)}
                simple
              />
            </div>
            <div className="w-[186px] mr-[16px]">
              <Button icon={<Add />} text="ثبت سفارش جدید" href="create" />
            </div>
          </>
        }
        title="سفارشات"
      />
      <div>
        <div className="w-full">
          {orderGroups ? (
            orderGroups.map((item: any, index: number) => (
              <Accordion
                key={item.id}
                title={` سفارش کد ${transform.toPersianDigits(
                  item.id
                )} ثبت شده در ${transform.toPersianDigits(
                  transform.renderChatTime(
                    transform.dateToTimestamp(item.created_at)
                  )
                )} توسط ${
                  item.user.name
                    ? item.user.name + " " + item.user.last_name
                    : item.user.mobile
                }`}
              >
                <Table
                  columns={columns}
                  data={data?.orders.filter(
                    (x: any) => x.order_group?.[0]?.id === item.id
                  )}
                />
              </Accordion>
            ))
          ) : (
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
