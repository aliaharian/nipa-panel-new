import { Add, Setting4 } from "iconsax-react";
import { useEffect, useState } from "react";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import Button from "components/button/Button";
import Table from "components/table/Table";
import TableAction from "components/table/TableAction";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useTranslation } from "react-i18next";
import { productsList } from "app/redux/products/actions";
import AddProductDialog from "components/products/AddProductDialog";

const Products = () => {
  const data = useAppSelector((state) => state.products.products);
  const [columns, setColumns] = useState<any[]>([]);
  const { t } = useTranslation("common");
  const arr1 = [1, 2, 3, 4];
  const arr2 = ["a", "b", "c", "d"];
  const [addProduct, setOpenAddProduct] = useState<boolean>(false);
  const zipped: [number | string, number | string][] = [
    [1, "a"],
    [2, "b"],
    [3, "c"],
  ];

  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(productsList());
  }, []);

  useEffect(() => {
    if (data) {
      console.log("data123", data);

      let colTmp: any[] = [
        {
          name: t("productCode"),
          selector: (row: any) => row.code,
          sortable: true,
        },
        {
          name: t("title"),
          selector: (row: any) => row.name,
          sortable: true,
        },
        {
          name: t("productType"),
          selector: (row: any) => (row.custom ? t("custom") : t("normal")),
          sortable: true,
        },
        {
          name: t("status"),
          selector: (row: any) => t("active"),
          sortable: true,
        },
      ];

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
      <AddProductDialog
        open={addProduct}
        handleClose={() => setOpenAddProduct(false)}
      />
      <Breadcrumb
        actions={
          <>
            <div className="w-[186px] mr-[16px]">
              <Button
                icon={<Add />}
                text={t("addProduct")}
                onClick={() => setOpenAddProduct(true)}
              />
            </div>
          </>
        }
        title={t("products")}
      />
      <div>
        {/* <button onClick={zipArray}>zip</button>
        <button onClick={unzipArray}>unzip</button> */}

        <Table columns={columns} data={data||[]} />
      </div>
    </div>
  );
};
export default Products;
