import { useTranslation } from "react-i18next";
import DropDown from "../form/Dropdown";
import { Product } from "app/models/product";

type SelectProductProps = {
  products: Product[];
  handleSelectProduct: (product_id: number) => void;
};
const SelectProduct = ({
  products,
  handleSelectProduct,
}: SelectProductProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <DropDown
        className="group"
        name={"products"}
        label={t("selectedProduct")}
        options={products?.map((product: Product) => ({
          label: <p>{product.name}</p>,
          value: product.id || 0,
        }))}
        placeholder={t("pleaseSelectProduct")}
        formik={{
          handleChange: (e: any) => {
            handleSelectProduct(e.target.value);
          },
        }}
      />
    </div>
  );
};
export default SelectProduct;
