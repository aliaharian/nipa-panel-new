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
import formService from "app/redux/forms/service";
import orderService from "app/redux/orders/service";
import FullscreenLoading from "components/loading/FullscreenLoading";

export type selectedOrderType = {
  product_id: number;
  saved?: boolean;
};
const AddOrder = () => {
  const Navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const user = JSON.parse(localStorage.getItem("nipa_user") || "");
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] =
    useState<selectedOrderType | null>();
  const products = useAppSelector((state) => state.products.products);
  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(productsList());
  }, []);
  const handleSelectProduct = (product_id: number) => {
    const prod = products?.find((x: any) => x.id == product_id);
    console.log("prod", prod);
    if (prod?.custom == 0) {
      let tmp = {
        product_id: product_id,
        product_name: prod.name,
        saved: true,
        values: null,
        form_id: null,
        custom: 0,
        id: Math.floor(Math.random() * 10000),
        count: 1,
      };
      setOrders([...orders, { ...tmp }]);
      setSelectedOrder(null);
    } else {
      setSelectedOrder({
        product_id: product_id,
        saved: false,
      });
    }
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
      form_id: product.initialFormId,
      id: Math.floor(Math.random() * 10000),
      count: 1,
      custom: 0,
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
  const handleSubmitForm = async () => {
    setPending(true);
    //create order group
    console.log("orders", orders);
    const orderGroup = await orderService.createOrderGroup();
    console.log("orderGroup", orderGroup);
    //create orders
    orders.map(async (order, index) => {
      const savedOrder = await orderService.createOrder(
        orderGroup.id,
        order.product_id,
        user.name ? user.name + " " + user.last_name : user.mobile
      );
      console.log("savedOrder", savedOrder);
      //save form of each order if custom
      if (order.form_id) {
        const savedForm = await formService.addUserAnswer(
          savedOrder.id,
          order.form_id,
          order.values
        );
      }
      setPending(false);
    });
    Navigate("/orders");
    console.log("sdvvvdsvdvd");
    //TODO:update order group if needed
  };
  return (
    <div className="w-full h-full">
      {pending && <FullscreenLoading />}

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
