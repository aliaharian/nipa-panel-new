import transform from "app/utils/transform";
import { Button } from "@mui/material";
import { Add, Minus, Trash } from "iconsax-react";
import { useTranslation } from "react-i18next";

type ProductSidebarItemProps = {
  item: any;
  handleIncrease: () => void;
  handleDecrease: () => void;
};

const ProductSidebarItem = ({
  item,
  handleIncrease,
  handleDecrease,
}: ProductSidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex border border-text-400 px-[14px] py-[7px] rounded-[8px] items-center justify-between mt-2">
      <div>
        <p className="text-[14px] text-text-500">{t("productName")}</p>
      </div>
      <div>
        <p>{item.product_name}</p>
      </div>
      <div className="bg-text-200 p-2 rounded-[8px] flex items-center justify-between w-[97px]">
        <Button
          className="!w-6 !max-w-[24px] !min-w-[24px] !p-[2px] h-6"
          onClick={handleIncrease}
        >
          <Add className="text-primary-main" />
        </Button>
        <p className="pointer-events-none select-none text-[16px] text-primary-main">
          {transform.toPersianDigits(item.count)}
        </p>
        <Button
          className="!w-6 !max-w-[24px] !min-w-[24px] !p-[2px] h-6"
          onClick={handleDecrease}
        >
          {item.count == 1 ? (
            <Trash className="text-error-primary" />
          ) : (
            <Minus className="text-primary-main" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductSidebarItem;
