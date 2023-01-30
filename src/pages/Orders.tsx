import { Add, Edit, More, ProfileDelete, Setting4 } from "iconsax-react";
import { useEffect, useRef, useState } from "react";
import DataTable, { Direction } from "react-data-table-component";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { ordersList } from "../app/redux/orders/actions";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Button from "../components/button/Button";
import MenuButton from "../components/button/MenuButton";
import IconMenu from "../components/menu/IconMenu";
import Table from "../components/table/Table";
import TableAction from "../components/table/TableAction";

const Orders = () => {
  const data = useAppSelector((state) => state.orders.orders);
  const [columns, setColumns] = useState<any[]>([]);
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
          name: "تاریخ ثبت",
          selector: (row: any) => row.jalali_date,
        },
        {
          name: "نام مشتری",
          selector: (row: any) => row.user.name + " " + row.user.last_name,
        },
        {
          name: "نام دریافت کننده",
          selector: (row: any) => row.customer_name,
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
        selector: (row: any) => row.year,
      });
      colTmp.push({
        allowOverflow: true,
        button: true,
        width: "120px",
        cell: (row: any) => <TableAction row={row} />,
      });

      setColumns([...colTmp]);

      console.log("data.orders", data.cols);
    }
  }, [data]);

  return (
    <div className="w-full h-full">
      <Breadcrumb
        actions={
          <>
            {" "}
            <div className="w-[186px]">
              <Button
                icon={<Setting4 />}
                text="فیلتر پیشرفته"
                href="submit"
                simple
              />
            </div>
            <div className="w-[186px] mr-[16px]">
              <Button icon={<Add />} text="ثبت سفارش جدید" href="submit" />
            </div>
          </>
        }
        title="سفارشات"
      />
      <div>
        <Table columns={columns} data={data?.orders} />
      </div>
    </div>
  );
};
export default Orders;
