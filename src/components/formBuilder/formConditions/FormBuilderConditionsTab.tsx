import { useState } from "react";
import { Condition, FormField } from "../../../app/models/form";
import DropDown from "../../form/Dropdown";
import ConditionItem from "./ConditionItem";
import Button from "../../../components/button/Button";
import { Add } from "iconsax-react";
import SnackbarUtils from "../../../app/utils/SnackbarUtils";

type FormBuilderConditionsTabProps = {
  conditionalfields: FormField[];
  formElements: FormField[];
  saveConditions: (conditions: Condition[]) => void;
  savedConditions: Condition[];
};
const FormBuilderConditionsTab = ({
  conditionalfields,
  formElements,
  saveConditions,
  savedConditions,
}: FormBuilderConditionsTabProps) => {
  const [conditions, setConditions] = useState<Condition[]>([
    ...savedConditions,
  ]);
  const handleAddCondition = () => {
    if (conditionalfields.length > 0 && formElements.length >= 2) {
      setConditions([
        ...conditions,
        {
          id: Math.floor(Math.random() * 1000),
          field: null,
          operation: null,
          values: [],
          relationField: null,
          saved: false,
        },
      ]);
    } else {
      SnackbarUtils.error(
        "فیلد های ایجاد شده برای ایجاد شرط فرم مناسب نمی باشند"
      );
    }
  };


  const setCondition = (condition: Condition) => {
    let index = conditions.findIndex((x) => x.id == condition.id);
    if (index > -1) {
      let newConditions = conditions;
      newConditions[index] = condition;
      setConditions([...newConditions]);
    }
  };

  const handleDeleteCondition = (condition: number) => {
    let index = conditions.findIndex((x) => x.id == condition);
    if (index > -1) {
      let newConditions = conditions;
      newConditions.splice(index, 1);
      setConditions([...newConditions]);
    }
    saveConditions([...conditions]);
    SnackbarUtils.success("شرط حذف شد");
  };

  const handleSaveCondition = (condition: number) => {
    //check all filds filled

    let index = conditions.findIndex((x) => x.id == condition);
    if (index > -1) {
      let condTemp = conditions[index];
      if (
        condTemp.field &&
        condTemp.operation &&
        condTemp.values &&
        condTemp.values.length > 0 &&
        condTemp.relationField
      ) {
        //check if condtemp.field already exist in conditionalfields
        let fieldIndex = conditionalfields.findIndex(
          (x) => x.id == condTemp.field
        );
        if (fieldIndex > -1) {
          //check if condtemp.relationField already exist in formElements
          let relationFieldIndex = formElements.findIndex(
            (x) => x.id == condTemp.relationField
          );
          if (relationFieldIndex > -1) {
            //finally save form!
            let newConditions = conditions;
            newConditions[index].saved = true;
            setConditions([...newConditions]);
            saveConditions(conditions);
            SnackbarUtils.success("شرط ذخیره شد");
          } else {
            SnackbarUtils.error("فیلد انتخاب شده در فرم وجود ندارد");
          }
        } else {
          SnackbarUtils.error("فیلد انتخاب شده در فرم وجود ندارد");
        }
      } else {
        SnackbarUtils.error("لطفا تمام فیلد های شرط را پر کنید");
      }
    }
  };

  return (
    <div>
      {conditions &&
        conditions.map((cond, index) => {
          return (
            <ConditionItem
              key={index}
              conditionalfields={conditionalfields}
              formElements={formElements}
              condition={cond}
              setCondition={setCondition}
              saveCondition={handleSaveCondition}
              deleteCondition={handleDeleteCondition}
            />
          );
        })}

      <div className="w-full px-[16px]">
        <Button
          icon={<Add />}
          text="افزودن شرط جدید"
          onClick={handleAddCondition}
        />
      </div>
    </div>
  );
};
export default FormBuilderConditionsTab;
