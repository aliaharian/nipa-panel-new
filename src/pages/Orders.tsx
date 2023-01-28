import { Add, Edit, More, ProfileDelete, Setting4 } from "iconsax-react";
import { useRef } from "react";
import DataTable, { Direction } from "react-data-table-component";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Button from "../components/button/Button";
import MenuButton from "../components/button/MenuButton";
import IconMenu from "../components/menu/IconMenu";
import Table from "../components/table/Table";
import TableAction from "../components/table/TableAction";

const Orders = () => {
  const columns = [
    {
      name: "کد سفارش",
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: "تاریخ ثبت",
      selector: (row: any) => row.year,
    },
    {
      name: "نام مشتری",
      selector: (row: any) => row.year,
    },
    {
      name: "نام دریافت کننده",
      selector: (row: any) => row.year,
    },
    {
      name: "مدل",
      selector: (row: any) => row.year,
    },
    {
      name: "رنگ",
      selector: (row: any) => row.year,
    },
    {
      name: "مساحت",
      selector: (row: any) => row.year,
    },
    {
      name: "وضعیت",
      selector: (row: any) => row.year,
    },
    {
      allowOverflow: true,
      button: true,
      width: "120px",
      cell: (row: any) => <TableAction row={row} />,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];
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
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};
export default Orders;
