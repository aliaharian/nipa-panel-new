import Button from "components/button/Button";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SelectProduct from "components/addOrder/SelectProduct";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { productsList } from "app/redux/products/actions";
import { Product } from "app/models/product";
import OrderCreateForm from "components/addOrder/OrderCreateForm";

export type selectedOrderType = {
  product_id: number;
  saved?: boolean;
};
const AddOrder = () => {
  const Navigate = useNavigate();
  const [orderGroup, setOrderGroup] = useState();
  const [orders, setOrders] = useState([]);
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
  return (
    <div className="w-full h-full">
      <Breadcrumb
        title="ایجاد سفارش جدید"
        handleBack={() => Navigate("/orders")}
      />
      <div className={`w-full flex gap-x-[20px]`}>
        <div className="w-full bg-white border border-text-300 rounded-[6px] px-[20px] py-[24px]">
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
          <div className="w-[320px] bg-white border border-text-300 rounded-[6px] px-[20px] py-[24px]">
            ok!1
          </div>
        )}
      </div>
    </div>
  );
};
export default AddOrder;
