import { TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { ArrowLeft2, ArrowRight2, Calendar } from "iconsax-react";
import React from "react";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";

type DatePickerProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string | null;
  formik: any;
  mask?: string;
  maskChar?: string;
  inputActions?: any;
  className?: string;
  disabled?: boolean;
  disablePast?: boolean;
};
const Datepicker = ({
  className,
  name,
  label,
  inputActions,
  placeholder,
  formik,
  disablePast,
  disabled,
}: DatePickerProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { t } = useTranslation("common");
  console.log(formik.values)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <div
        className={`flex flex-col w-full items-start justify-start ${className}`}
      >
        <div className="text-xs mb-2 flex justify-between w-full">
          <label className="font-normal" htmlFor={name}>
            {label}
          </label>
          {inputActions?.()}
        </div>
        <MobileDatePicker
          value={formik.values?.[name]}
          disablePast={disablePast}
          disabled={disabled}
          onAccept={(newValue) => {
            console.log("newValue", newValue);
            formik.setFieldValue(name, newValue);
          }}
          className="w-full"
          //with inputRef create custom input
          timezone="Asia/Tehran"
          inputRef={inputRef}
          slots={{
            toolbar: (data: any) => {
              return (
                <div className="p-4 MuiPickersToolbar-root MuiPickersLayout-toolbar bg-primary-main text-white css-1eurbeq-MuiPickersToolbar-root-MuiDatePickerToolbar-root">
                  <span className="text-white text-[12px]">
                    تاریخ مورد نظر خود را انتخاب کنید
                  </span>
                  <div className="mt-2 MuiPickersToolbar-content css-15jcv2p-MuiPickersToolbar-content">
                    <h4 className="text-[30px] MuiTypography-root MuiTypography-h4 MuiTypography-alignCenter MuiDatePickerToolbar-title css-3jvy96-MuiTypography-root-MuiDatePickerToolbar-title">
                      {data.value?.toLocaleDateString("fa-IR", {
                        month: "long",
                        day: "numeric",
                      }) || "انتخاب تاریخ"}
                    </h4>
                  </div>
                </div>
              );
            },
            textField: (data: any) => {
              return (
                <TextField
                  {...data}
                  value={
                    data.ownerState.value?.toLocaleDateString("fa-IR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) || ""
                  }
                />
              );
            },
            leftArrowIcon: () => (
              <ArrowRight2 style={{ width: 20, height: 20 }} />
            ),
            rightArrowIcon: () => (
              <ArrowLeft2 style={{ width: 20, height: 20 }} />
            ),
            actionBar: (data) => (
              <div className="[grid-column:1/4] [grid-row:3] py-4 border-t border-text-300 px-4 flex justify-between">
                <div className="w-[80px]">
                  <Button
                    // disabled={submitdisabled}
                    text={t("deleteDate")}
                    onClick={() => {
                      data.onClear();
                    }}
                    simple
                    sm
                    className="!text-error-primary !text-sm"
                  />
                </div>
                <div className="w-[100px]">
                  <Button
                    // disabled={submitdisabled}
                    // icon={<Add />}
                    sm
                    text={"تایید"}
                    onClick={() => {
                      data.onAccept();
                    }}
                  />
                </div>
              </div>
            ),
          }}
          slotProps={{
            textField: {
              className: "rounded-[6px]",
              label: "",
              placeholder: placeholder || "",
              classes: {
                root: "!cursor-pointer !border-solid !border !hover:border-primary-main !border-text-400 rounded-[6px] h-12 !outline-none !shadow-none",
              },
              InputProps: {
                classes: {
                  root: " h-12 pe-2 !ps-2",
                  input:
                    "!cursor-pointer !text-xs !font-bold hover:!border-primary-main focus:!border-primary-main",
                  //change fieldset hove
                  notchedOutline: "!border-none !outline-none !shadow-none",
                },
                endAdornment: (
                  <div className="w-[20px] h-[20px]">
                    <Calendar
                      style={{ width: 20, height: 20, color: "#757575" }}
                    />
                  </div>
                ),
              },
              inputProps: {},
            },
            toolbar: {
              className: "bg-primary-main text-white",
            },
            calendarHeader: {
              className:
                "[&>*:nth-child(1)]:ms-0 w-full flex justify-between items-center",
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
};
export default Datepicker;
