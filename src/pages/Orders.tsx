import { Add, Setting4 } from "iconsax-react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { ordersList } from "../app/redux/orders/actions";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Button from "../components/button/Button";
import OrderFiltersDialog from "../components/orders/OrderFiltersDialog";
import SideDialog from "../components/sideDialog/SideDialog";
import Table from "../components/table/Table";
import TableAction from "../components/table/TableAction";

const Orders = () => {
  const data = useAppSelector((state) => state.orders.orders);
  const [columns, setColumns] = useState<any[]>([]);
  const arr1 = [1, 2, 3, 4];
  const arr2 = ["a", "b", "c", "d"];
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const zipped: [number | string, number | string][] = [
    [1, "a"],
    [2, "b"],
    [3, "c"],
  ];
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
  const zipArray = () => {
    let zipped = arr1.map((k, i) => [k, arr2[i]]);
    console.log("zipped", zipped);
  };
  let array1: [number | string];
  let array2: [number | string];
  const unzipArray = () => {
    //unzip zipped array to two arrays
    //  [
    //   [1, "a"],
    //   [2, "b"],
    //   [3, "c"],
    // ];

    let a = zipped.reduce((acc, val) => {
      console.log("acc", acc);
      console.log("val", val);
      array1.push(val[0]);
      array2.push(val[1]);
      // acc[0].push(val[0]);
      // acc[1].push(val[1]);
      return acc;
    });

    console.log("array1", a);
    // console.log("unzipped", unzipped);
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
              <Button icon={<Add />} text="ثبت سفارش جدید" href="submit" />
            </div>
          </>
        }
        title="سفارشات"
      />
      <div>
        {/* <button onClick={zipArray}>zip</button>
        <button onClick={unzipArray}>unzip</button> */}

        <Table columns={columns} data={data?.orders} />
      </div>
    </div>
  );
};
export default Orders;
