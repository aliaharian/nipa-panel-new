import Button from "components/button/Button";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SelectProduct from "components/addOrder/SelectProduct";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { productsList } from "app/redux/products/actions";
import { Product } from "app/models/product";
import OrderCreateForm from "components/addOrder/OrderCreateForm";
import AddOrderSidebar from "components/addOrder/AddOrderSidebar";

export type selectedOrderType = {
  product_id: number;
  saved?: boolean;
};
const AddOrder = () => {
  const Navigate = useNavigate();
  const [orderGroup, setOrderGroup] = useState();
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] =
    useState<selectedOrderType | null>();
  const products = useAppSelector((state) => state.products.products);
  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(productsList());
  }, []);
  const handleSelectProduct = (product_id: number) => {
    setSelectedOrder({
      product_id: product_id,
      saved: false,
    });
  };
  const handleClearOrder = () => {
    setSelectedOrder(null);
  };
  const handleAddOrder = (
    product: Product,
    values: any,
    addAnother: boolean
  ) => {
    let tmp = {
      product_id: product.id,
      product_name: product.name,
      saved: true,
      values: values,
      id: Math.floor(Math.random() * 10000),
      count: 1,
    };
    if (addAnother) {
      setOrders([...orders, { ...tmp }]);
      setSelectedOrder(null);
    }
  };
  const handleEditOrder = (item: any) => {
    console.log("order", item);
    const index = orders.findIndex((x) => x.id == item.id);
    if (index > -1) {
      let tmp = [...orders];
      if (item.count <= 0) {
        tmp.splice(index, 1);
      } else {
        tmp[index] = { ...item };
      }
      setOrders([...tmp]);
    }
  };
  const handleSubmitForm = () => {};
  return (
    <div className="w-full h-full">
      <Breadcrumb
        title="ایجاد سفارش جدید"
        handleBack={() => Navigate("/orders")}
      />
      <div className={`w-full flex gap-x-[20px]`}>
        <div
          className={`${
            orders.length > 0 ? "w-[calc(100%-340px)]" : "w-full"
          } bg-white border border-text-300 h-min rounded-[6px] px-[20px] py-[24px]`}
        >
          {!selectedOrder?.product_id ? (
            <SelectProduct
              products={products?.filter(
                (x: Product) =>
                  (x.initialFormId || x.custom === 0) && x.status === 1
              )}
              handleSelectProduct={handleSelectProduct}
            />
          ) : (
            <OrderCreateForm
              handleSaveOrder={handleAddOrder}
              products={products?.filter(
                (x: Product) =>
                  (x.initialFormId || x.custom === 0) && x.status === 1
              )}
              handleClearOrder={handleClearOrder}
              selectedOrder={selectedOrder}
            />
          )}
        </div>
        {orders.length > 0 && (
          <div className="w-[320px] h-min bg-white border border-text-300 rounded-[6px] px-[16px] py-[18px]">
            <AddOrderSidebar
              handleSubmitForm={handleSubmitForm}
              orders={orders}
              handleEditOrder={handleEditOrder}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default AddOrder;
