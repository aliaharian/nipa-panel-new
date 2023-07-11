import { useTranslation } from "react-i18next";
import DropDown from "../form/Dropdown";
import { Product } from "app/models/product";
import { selectedOrderType } from "pages/orders/AddOrder";
import { useEffect, useState } from "react";
import formService from "app/redux/forms/service";
import FormContent from "../formBuilder/formContent/FormContent";
import { renderElement } from "app/utils/FormActions";
import { FormField } from "app/models/form";
import Button from "../button/Button";
import { Add, ArrowLeft, ArrowRight } from "iconsax-react";
type SelectProductProps = {
  selectedOrder: selectedOrderType;
  products: Product[];
  handleClearOrder: () => void;
};
const OrderCreateForm = ({
  selectedOrder,
  products,
  handleClearOrder,
}: SelectProductProps) => {
  const { t } = useTranslation();
  const [form, setForm] = useState<any>();
  const [fields, setFields] = useState<FormField[]>([]);
  const selectedProduct = products.find(
    (x) => x.id === selectedOrder.product_id
  );

  useEffect(() => {
    loadForm();
  }, []);

  const loadForm = async () => {
    if (selectedProduct?.initialFormId) {
      const response = await formService.getForm(
        selectedProduct?.initialFormId
      );
      setForm(response);
      console.log("res", response);

      let fieldsTmp: any[] = [];
      response.fields?.map((item: any) => {
        let tmp: any = {
          name: item.name,
          placeholder: item.placeholder,
          label: item.label,
          type: item.type.type,
          typeId: item.type.id,
          required: item.required,
          id: item.id,
          fromRelatedFields:
            item?.form?.id && item?.form?.id != response?.id ? true : false,
        };

        if (item.type.type === "dropDown" || item.type.type === "checkbox") {
          if (item.basic_data_id) {
            tmp = {
              ...tmp,
              basic_data: item.basic_data,
              basic_data_id: item.basic_data_id,
              basicDataItems: item.basicDataItems.map((opt: any) => ({
                id: opt.id,
                label: <p>{opt.label}</p>,
                server_id: opt.id,
                value: opt.option,
              })),
            };
          } else {
            tmp = {
              ...tmp,
              options: item.options.map((opt: any) => ({
                id: opt.id,
                label: <p>{opt.label}</p>,
                server_id: opt.id,
                value: opt.option,
              })),
            };
          }
        }
        if (item.type.type === "uploadFile") {
          tmp = { ...tmp, onlyImage: false };
        }
        fieldsTmp.push({ ...tmp });
      });

      setFields([...fieldsTmp]);
    }
  };

  return (
    <div>
      <DropDown
        className="group"
        name={"product"}
        label={t("selectedProduct")}
        options={products?.map((product: Product) => ({
          label: <p>{product.name}</p>,
          value: product.id || 0,
        }))}
        placeholder={t("pleaseSelectProduct")}
        disabled={true}
        formik={{
          values: {
            product: selectedOrder.product_id,
          },
          handleChange: (e: any) => {
            // e.preventDefault();
          },
        }}
      />
      <div>
        {fields?.map((element: any, index: number) => {
          return (
            <div className="mt-[30px]" key={index}>
              {renderElement(element)}
            </div>
          );
        })}
      </div>
      <div className="mt-[30px] mb-[50px]">
        <Button
          icon={<Add />}
          onClick={() => {}}
          bordered
          text={t("addProductToOrder")}
        />
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="w-[227px]">
          <Button
            icon={<ArrowRight className="ml-[7px]" />}
            onClick={handleClearOrder}
            gray
            text={t("backToPrevStep")}
          />
        </div>
        <div className="w-[202px]">
          <Button
            icon={<ArrowLeft className="mr-[7px]" />}
            after
            onClick={() => {}}
            text={t("saveAndContinue")}
          />
        </div>
      </div>
    </div>
  );
};
export default OrderCreateForm;
