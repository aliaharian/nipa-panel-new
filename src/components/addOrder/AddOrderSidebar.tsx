import { useTranslation } from "react-i18next";
import ProductSidebarItem from "./ProductSidebarItem";
import { useEffect, useState } from "react";
import transform from "app/utils/transform";
import Button from "../button/Button";

type AddOrderSidebarProps = {
  orders: any[];
  handleEditOrder: (order: any) => void;
  handleSubmitForm: () => void;
};

const AddOrderSidebar = ({
  orders,
  handleEditOrder,
  handleSubmitForm,
}: AddOrderSidebarProps) => {
  console.log("orders", orders);
  const { t } = useTranslation();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let tmp = 0;
    orders?.map((item) => {
      tmp = tmp + item.count;
    });
    setTotal(tmp);
  }, [orders]);
  const handleIncrease = (item: any) => {
    handleEditOrder({
      ...item,
      count: item.count + 1,
    });
  };
  const handleDecrease = (item: any) => {
    handleEditOrder({
      ...item,
      count: item.count > 0 ? item.count - 1 : 0,
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between text-primary-main font-bold mb-[29px]">
        <p>{t("productsOfThisOrder")}</p>
        <p>
          {transform.toPersianDigits(total)} {t("product")}
        </p>
      </div>
      {orders.map((item, index) => (
        <ProductSidebarItem
          item={item}
          key={index}
          handleIncrease={() => handleIncrease(item)}
          handleDecrease={() => handleDecrease(item)}
        />
      ))}

      <div className="mt-[32px]">
        <Button after onClick={handleSubmitForm} text={t("submitForm")} />
      </div>
    </div>
  );
};
export default AddOrderSidebar;
