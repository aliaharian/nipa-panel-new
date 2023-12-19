import React, { MutableRefObject, useRef } from "react";
import clsx from "clsx";

type TextFieldProps = {
  name: string;
  formik: any;
};

const VerifyText = ({ name, formik }: TextFieldProps) => {
  const refV1 = useRef<HTMLInputElement>(null);
  const refV2 = useRef<HTMLInputElement>(null);
  const refV3 = useRef<HTMLInputElement>(null);
  const refV4 = useRef<HTMLInputElement>(null);
  const refV5 = useRef<HTMLInputElement>(null);

  function handleChange(event: any) {
    let refsMap = [refV1, refV2, refV3, refV4, refV5];
    event.target.value = event.target.value;

    let newstate = {
      ...{
        v0:
          formik.values[name].length >= 1
            ? formik.values[name].slice(0, 1)
            : "",
        v1:
          formik.values[name].length >= 2
            ? formik.values[name].slice(1, 2)
            : "",
        v2:
          formik.values[name].length >= 3
            ? formik.values[name].slice(2, 3)
            : "",
        v3:
          formik.values[name].length >= 4
            ? formik.values[name].slice(3, 4)
            : "",
        v4:
          formik.values[name].length >= 5
            ? formik.values[name].slice(4, 5)
            : "",
      },
      ["v" + event.target.name]: event.target.value,
    };
    let nValue = Object.values(newstate).join("");
    // input.onChange(nValue);
    formik.handleChange({
      target: {
        name,
        value: nValue,
      },
    });
    if (nValue.length === 5) {
      //   setTimeout(() => {
      //     submit();
      //   }, 500);
    }

    if (event.target.name < 4)
      refsMap[parseInt(event.target.name) + 1]?.current?.focus();
  }

  return (
    <>
      <div className="flex flex-row-reverse">
        <input
          className={`focus:border-primary-main !outline-none w-12 h-12 border border-text-400 rounded-[8px] flex items-center justify-center outline-none text-center mx-2 ${
            formik.errors?.[name] && formik.touched?.[name]
              ? "!border-error-primary"
              : ""
          }`}
          name="0"
          ref={refV1}
          value={
            formik.values[name].length >= 1
              ? formik.values[name].slice(0, 1)
              : ""
          }
          placeholder="-"
          onChange={handleChange}
        />
        <input
          className={`focus:border-primary-main !outline-none w-12 h-12 border border-text-400 rounded-[8px] flex items-center justify-center outline-none text-center mx-2 ${
            formik.errors?.[name] && formik.touched?.[name]
              ? "!border-error-primary"
              : ""
          }`}
          name="1"
          ref={refV2}
          value={
            formik.values[name].length >= 2
              ? formik.values[name].slice(1, 2)
              : ""
          }
          placeholder="-"
          onChange={handleChange}
        />
        <input
          className={`focus:border-primary-main !outline-none w-12 h-12 border border-text-400 rounded-[8px] flex items-center justify-center outline-none text-center mx-2 ${
            formik.errors?.[name] && formik.touched?.[name]
              ? "!border-error-primary"
              : ""
          }`}
          name="2"
          ref={refV3}
          value={
            formik.values[name].length >= 3
              ? formik.values[name].slice(2, 3)
              : ""
          }
          placeholder="-"
          onChange={handleChange}
        />
        <input
          className={`focus:border-primary-main !outline-none w-12 h-12 border border-text-400 rounded-[8px] flex items-center justify-center outline-none text-center mx-2 ${
            formik.errors?.[name] && formik.touched?.[name]
              ? "!border-error-primary"
              : ""
          }`}
          name="3"
          ref={refV4}
          value={
            formik.values[name].length >= 4
              ? formik.values[name].slice(3, 4)
              : ""
          }
          placeholder="-"
          onChange={handleChange}
        />
        <input
          className={`focus:border-primary-main !outline-none w-12 h-12 border border-text-400 rounded-[8px] flex items-center justify-center outline-none text-center mx-2 ${
            formik.errors?.[name] && formik.touched?.[name]
              ? "!border-error-primary"
              : ""
          }`}
          name="4"
          ref={refV5}
          value={
            formik.values[name].length >= 5
              ? formik.values[name].slice(4, 5)
              : ""
          }
          placeholder="-"
          onChange={handleChange}
        />
      </div>
      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1 text-start ps-2">
          {formik.errors?.[name]}
        </p>
      )}
    </>
  );
};

export default VerifyText;
