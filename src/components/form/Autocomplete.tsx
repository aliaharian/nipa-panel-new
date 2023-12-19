import React, { useState } from "react";
import { FormOption } from "../../app/models/form";
import { CircularProgress, Autocomplete as MuiAutocomplete, TextField, debounce } from "@mui/material";
import { ArrowDown, ArrowDown2 } from "iconsax-react";

type AutocompleteProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string | null;
  formik: any;
  mask?: string;
  maskChar?: string;
  inputActions?: any;
  className?: string;
  options: FormOption[];
  disabled?: boolean;
  fetchList: (value: string) => Promise<FormOption[]>;
};
const Autocomplete = ({
  name,
  label,
  formik,
  type,
  placeholder,
  maskChar,
  className,
  mask,
  inputActions,
  options,
  disabled,
  fetchList
}: AutocompleteProps) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionsTmp, setOptionsTmp] = useState<FormOption[]>(options || [])
  const [loading, setLoading] = useState<boolean>(false);
  //update optionsTmp on update options
  React.useEffect(() => {
    options.length > 0 && setOptionsTmp(options || [])
  }, [options])
  const handleChange = (e: any) => {
    setSelectedOption(e);
    // formik?.handleChange(e);
    formik.handleChange({
      target: {
        name,
        value: e.value,
        type: e.type,
        // value: e.target.value.replace(/ /g, ""),
      },
    });
  };

  const fetch = React.useMemo(
    () =>
      debounce(
        (
          request: { input: string },
          callback: (results?: readonly any[]) => void,
        ) => {
          if (request.input.length < 3 && request.input.length > 0) return
          console.log(request);
          setLoading(true)
          fetchList(request.input).then((res: FormOption[]) => {
            setOptionsTmp(res)
            callback(res);
            setLoading(false)
          }
          );
        },
        400,
      ),
    [],
  );

  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      <div className="text-xs mb-2 flex justify-between w-full">
        <label className="font-normal" htmlFor={name}>
          {label}
        </label>
        {inputActions?.()}
      </div>

      <MuiAutocomplete
        value={formik.values
          ? optionsTmp?.find((x) => x.value === formik.values[name])
          : selectedOption
        }
        onChange={(event, newValue) => {
          handleChange({
            value: newValue,
            type: newValue,
          })
        }}
        //print no result found if no option found
        onInputChange={
          (event, newInputValue) => {
            fetch({ input: newInputValue }, (results?: readonly any[]) => {
              console.log(results);
              //update options              
            }
            );
          }
        }
        id={`AutoComplete${name}`}
        options={optionsTmp || []}
        getOptionLabel={(option: any) => {
          return option?.label || "";
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => (
          <li key={option.value} {...props}>
            <p>{option?.label}</p>
          </li>
        )}
        sx={{
          width: "100%",
          border: "none",
          "& .Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(165 180 252) !important",
              borderWidth: "1px !important",
              boxShadow: "0 0 3px rgb(165 180 252)",
            },
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.375rem",
            padding: "2px 8px",
            //change color of border and box shadow on focus
          },
          "& input": {
            //disable focus glow
            // marginRight:5,s
            "&:focus": {
              boxShadow: "none !important",
            },
          },
        }}
        // loading={loading}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            placeholder="حداقل ۳ کاراکتر تایپ کنید"

            classes={
              //set border
              {
                root: "!border-solid !border !hover:border-primary-main !border-text-400 rounded-[6px] h-12 !outline-none !shadow-none",
              }
            }
            InputProps={{
              ...params.InputProps,
              classes: {
                root: " h-12 !ps-2",
                input: "!text-xs !font-bold hover:!border-primary-main focus:!border-primary-main",
                //change fieldset hove
                notchedOutline: "!border-none !outline-none !shadow-none",

              },
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress
                      color="inherit"
                      size={20}
                    />
                  ) :
                    <ArrowDown2 style={{ width: 20, height: 20, color: "#757575" }} />
                  }
                </>
              ),
            }}
          />
        )}
      />

      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">
          {formik.errors?.[name]}
        </p>
      )}
    </div>
  );
};
export default Autocomplete;
