import { ExportCurve, TextBlock, TickSquare } from "iconsax-react";
import FormElementItem from "./FormElementItem";
import { ReactComponent as Frame } from "../../../assets/icons/Frame.svg";
import { ReactComponent as NumericField } from "../../../assets/icons/NumericField.svg";
import { ReactComponent as Dropdown } from "../../../assets/icons/Dropdown.svg";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useEffect } from "react";
import { getFormFieldTypes } from "app/redux/forms/actions";
import { Skeleton } from "@mui/material";
import { FormField } from "app/models/form";
import DropDown from "components/form/Dropdown";
import { useTranslation } from "react-i18next";
import { DateRange } from "@mui/icons-material";

type FormBuilderElementsTabProps = {
  addElement(element: any, id: number, fromRelatedFields?: boolean): void;
  relatedFields?: FormField[];
};

const FormBuilderElementsTab = ({
  addElement,
  relatedFields,
}: FormBuilderElementsTabProps) => {
  const { t } = useTranslation();
  const formFieldTypes = useAppSelector((state) => state.forms.formFieldTypes);
  const Dispatch = useAppDispatch();
  useEffect(() => {
    if (!formFieldTypes) {
      Dispatch(getFormFieldTypes());
    }
  }, []);
  const parseIcon = (icon: string): any => {
    switch (icon) {
      case "TextBlock":
        return <TextBlock />;
      case "Frame":
        return <Frame />;
      case "NumericField":
        return <NumericField />;
      case "ExportCurve":
        return <ExportCurve />;
      case "Dropdown":
        return <Dropdown />;
      case "TickSquare":
        return <TickSquare />;
      case "DatePicker":
        return <DateRange />;
      default:
        return <TextBlock />;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-[10px] px-4">
        {formFieldTypes ? (
          formFieldTypes.map((item, index) => (
            <FormElementItem
              key={item.id}
              id={item.id}
              type={item.type}
              onClick={addElement}
              icon={parseIcon(item.icon)}
              label={item.label}
            />
          ))
        ) : (
          <>
            {/* repeat 9 in loop skeleton */}
            {Array.from(Array(9).keys()).map((item, index) => (
              <Skeleton
                key={index}
                variant="rounded"
                width={80}
                height={80}
                animation="wave"
              />
            ))}
          </>
        )}
        {/* <FormElementItem
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
        /> */}
      </div>
      <div className="px-4">
        {relatedFields ? (
          <DropDown
            className="group mt-[30px]"
            name={"relatedFields"}
            label={t("selectFromRelatedFields")}
            options={
              relatedFields
                ? relatedFields.map((data) => {
                    return {
                      label: (
                        <p>
                          {data.label} {t("fromStep")}{" "}
                          {data.form?.step?.step_name}
                        </p>
                      ),
                      value: data.server_id?.toString(),
                      type: data.type,
                    };
                  })
                : []
            }
            placeholder={"انتخاب کنید"}
            formik={{
              handleChange: (e: any) => {
                console.log("e", e);
                addElement(e.target.type, e.target.value, true);
              },
              values: {
                relatedFields: 0,
                // basic_data: selectedField.basic_data?.id.toString(),
              },
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default FormBuilderElementsTab;
