import { ExportCurve, TextBlock, TickSquare } from "iconsax-react";
import FormElementItem from "./FormElementItem";
import { ReactComponent as Frame } from "../../../assets/icons/Frame.svg";
import { ReactComponent as NumericField } from "../../../assets/icons/NumericField.svg";
import { ReactComponent as Dropdown } from "../../../assets/icons/Dropdown.svg";

type FormBuilderElementsTabProps = {
  addElement(element: any): void;
};

const FormBuilderElementsTab = ({
  addElement,
}: FormBuilderElementsTabProps) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-[10px] px-4">
        <FormElementItem
          type="text"
          onClick={addElement}
          icon={<TextBlock />}
          label={"متن کوتاه"}
        />
        <FormElementItem
          type="textArea"
          onClick={addElement}
          icon={<Frame />}
          label={"متن بلند"}
        />
        <FormElementItem
          type="number"
          onClick={addElement}
          icon={<NumericField />}
          label={"فیلد عددی"}
        />
            <FormElementItem
          type="uploadFile"
          onClick={addElement}
          icon={<ExportCurve />}
          label={"آپلود فایل"}
        />
        <FormElementItem
          type="dropDown"
          onClick={addElement}
          icon={<Dropdown />}
          label={"دراپ داون"}
        />
         <FormElementItem
          type="checkbox"
          onClick={addElement}
          icon={<TickSquare />}
          label={"چند انتخابی"}
        />
      </div>
    </div>
  );
};
export default FormBuilderElementsTab;
