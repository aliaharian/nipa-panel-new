import Accordion from "components/accordion/Accordion";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const ProductSteps = () => {
  const { t } = useTranslation(["common", "validations"]);

  const Navigate = useNavigate();
  let { code } = useParams();

  console.log("props", code);
  const handleBack = () => {
    console.log("back");
    Navigate("/products");
  };
  return (
    <div className="w-full h-full">
      <Breadcrumb
        title={t("handleProductSteps") + " "}
        handleBack={handleBack}
      />
      <div className="w-full">
        <Accordion />
      </div>
    </div>
  );
};

export default ProductSteps;
