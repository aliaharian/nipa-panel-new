import React, { useState } from "react";
import { FormOption } from "../../app/models/form";
import { Autocomplete as MuiAutocomplete, TextField } from "@mui/material";
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
  options?: FormOption[];
  disabled?: boolean;
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
}: AutocompleteProps) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (e: any) => {
    setSelectedOption(e);
    console.log("nice car", e);
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
  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      <div className="text-sm mb-2 flex justify-between w-full">
        <label className="font-normal" htmlFor={name}>
          {label}
        </label>
        {inputActions?.()}
      </div>
      {/* <Select
        isDisabled={disabled}
        defaultValue={formik.values ? formik.values[name] : selectedOption}
        onChange={handleChange}
        value={
          formik.values
            ? options?.find((x) => x.value === formik.values[name])
            : selectedOption
        }
        placeholder={placeholder}
        options={options}
        className="w-full h-12 !outline-none"
        classNames={{
          control: (state) =>
            `h-12 !rounded-[6px] !outline-none !shadow-none ${state.isFocused ? "!border-primary-main" : "border-text-300"
            }`,
          placeholder: (state) => `text-right text-xs`,
          singleValue: (state) => `text-right text-xs`,
          valueContainer: (state) => `!outline-none`,
          indicatorSeparator: (state) => `!hidden`,
          menu: (state) =>
            `!shadow-none border border-text-400 !rounded-[6px] py-[6px]`,
          option: (state) => `p-[6px] ${state.isFocused ? "" : ""}`,
        }}
        styles={{
          option: (baseStyles, state) => ({
            "&>p": {
              cursor: "pointer",
              backgroundColor:
                state.isFocused || state.isSelected ? "#eef3fa" : "#fff",
              height: 40,
              display: "flex",
              fontWeight: "normal",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px",
              borderRadius: "4px",
              color: "#1f1f1f",
            },
          }),
        }}
      /> */}

      <MuiAutocomplete
        value={formik.values
          ? options?.find((x) => x.value === formik.values[name])
          : selectedOption
        }
        onChange={(event, newValue) => {
          handleChange(event)
        }}
        // filterOptions={(options, params) => {
        //   const filtered = filter(options, params);

        //   if (params.inputValue !== "" && freeSolo) {
        //     filtered.push({
        //       inputValue: params.inputValue,
        //       title: `افزودن "${params.inputValue}"`,
        //     });
        //   }

        //   return filtered;
        // }}
        id={`AutoComplete${name}`}
        options={options || []}
        getOptionLabel={(option: any) => {
          //find option from its value
          // const found = _options.find((item) => item.value == option);
          // //if found return its title
          // if (found) return found.title;
          // //else return option itself
          // return null;
          return option?.name || "";
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => (
          <li key={option.value} {...props}>
            <p>{option?.name}</p>
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
            classes={
              //set border
              {
                root: "!border-solid !border !hover:border-primary-main !border-text-400 rounded-[6px] h-12 !outline-none !shadow-none",
              }
            }
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
              classes: {
                root: "h-12",
                input: "text-xs hover:!border-primary-main focus:!border-primary-main",
                //change fieldset hove
                notchedOutline: "!border-none !outline-none !shadow-none",

              },
              endAdornment: (
                <>
                  {/* {loading ? (
                    <CircularProgress
                      color="inherit"
                      size={20}
                    />
                  ) : null} */}
                  <ArrowDown2 style={{width:20,height:20, color:"#757575"}} />
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
