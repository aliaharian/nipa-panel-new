import { useTranslation } from "react-i18next";
import ProductSidebarItem from "./ProductSidebarItem";
import { useEffect, useState } from "react";
import transform from "app/utils/transform";
import Button from "../button/Button";
import DropDown from "../form/Dropdown";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { getCustomersList } from "app/redux/users/actions";

type AddOrderSidebarProps = {
  orders: any[];
  handleEditOrder: (order: any) => void;
  handleSubmitForm: (selectedCustomer?: string) => void;
};

const AddOrderSidebar = ({
  orders,
  handleEditOrder,
  handleSubmitForm,
}: AddOrderSidebarProps) => {
  console.log("orders", orders);
  const { t } = useTranslation();
  const [total, setTotal] = useState(0);
  const customers = useAppSelector((state) => state.users.customers);
  const Dispatch = useAppDispatch();
  const [selectedCustomer, setSelectedCustomer] = useState<string>();
  useEffect(() => {
    !customers &&transform.checkPermission("add-order-as-another") && Dispatch(getCustomersList());
  }, []);
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
      <div>
        {transform.checkPermission("add-order-as-another") && (
          <div className="flex rounded-[8px] items-center justify-between mb-5">
            <DropDown
              className="group"
              name={"customers"}
              label={t("customer")}
              options={customers?.map((item) => ({
                label: (
                  <p>{`${item.code} - ${
                    item.user.name
                      ? item.user.name + " " + item.user.last_name
                      : item.user.mobile
                  }`}</p>
                ),
                value: item.code,
              }))}
              placeholder={t("pleaseSelectCustomer")}
              formik={{
                handleChange: (e: any) => {
                  setSelectedCustomer(e.target.value);
                },
              }}
            />
          </div>
        )}
      </div>

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
        <Button
          after
          onClick={() => handleSubmitForm(selectedCustomer)}
          text={t("submitForm")}
        />
      </div>
    </div>
  );
};
export default AddOrderSidebar;
