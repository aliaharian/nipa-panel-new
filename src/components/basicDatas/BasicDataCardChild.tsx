import transform from "app/utils/transform";
import { Book } from "iconsax-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type BasicDataCardChildProps = {
  title: string;
  count: number;
};
const BasicDataCardChild = ({ title, count }: BasicDataCardChildProps) => {
  const { t } = useTranslation("common");
  return (
    <div


      className="flex items-center justify-between"
    >
      <div className="w-12 h-12 rounded-full bg-primary-600 text-primary-main flex items-center justify-center me-4">
        <Book variant="Bold" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-[18px] font-bold mb-3 text-text-700 leading-[20px]">
          {title}
        </h3>
        <p className="text-[16px] leading-[16px] text-text-500">
          {transform.toPersianDigits(count)} {count > 1 ? t("items") : t("item")}
        </p>
      </div>
    </div>
  );
};
export default BasicDataCardChild;
