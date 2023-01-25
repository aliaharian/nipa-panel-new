import { Add, More, Setting4 } from "iconsax-react";
import DataTable, { Direction } from "react-data-table-component";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Button from "../components/button/Button";
import Table from "../components/table/Table";

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
      width: "92px",
      cell: (row: any) => (
        <Button after icon={<More className="rotate-90"/>} text="عملیات" href={"/auth/verify"} bordered sm />
      ),
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
              <Button icon={<Add />} text="تایید و دریافت کد" href="submit" />
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
