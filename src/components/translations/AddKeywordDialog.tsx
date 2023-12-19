import { Add } from "iconsax-react";
import SideDialog from "../sideDialog/SideDialog";
import TextField from "../form/TextField";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import * as Yup from "yup";
import { setSaveSuccess } from "app/redux/products/actions";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { useEffect, useState } from "react";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { addKeyword, editKeyword } from "app/redux/translations/actions";

type AddKeywordDialogProps = {
  open: boolean;
  handleClose?: () => void;
  langs: any[];
  keyword?: any;
};

const AddKeywordDialog = ({
  open,
  handleClose,
  keyword,
  langs
}: AddKeywordDialogProps) => {
  const { t } = useTranslation(["common", "validations"]);
  const Dispatch = useAppDispatch();
  const saveSuccess = useAppSelector(
    (state: any) => state.translations.saveSuccess
  );

  const validationSchema = Yup.object().shape({
    keyword: Yup.string().required(
      t("keyword.required", { ns: "validations" }) || ""
    ),
  });

  let initialValues: any = {
    id: 0,
    keyword: "",

  };
  //append langs
  langs.map((lang: any) => {
    initialValues[lang.language] = "";
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      values.id ? Dispatch(editKeyword(values)) : Dispatch(addKeyword(values));
    },
  });

  const handleSubmitForm = () => {
    formik.handleSubmit();
  };
  const _handleClose = () => {
    handleClose && handleClose();
    formik.resetForm();
    formik.setValues(initialValues);
  };

  useEffect(() => {
    if (keyword) {
      formik.setFieldValue("id", keyword.id);
      formik.setFieldValue("keyword", keyword.keyword);
      keyword.translations.map((t: any) => {
        formik.setFieldValue(`${t.lang}`, t.translation);
      })
    }
  }, [keyword])

  useEffect(() => {
    handleClose && handleClose();
    formik.resetForm();
    formik.setValues(initialValues);
  }, [saveSuccess])

  // console.log("edit", editData);
  // console.log("keyord", keyword);
  console.log("formik.values", formik.values);
  return (
    <SideDialog
      headerText={t("addBasicData")}
      headerIcon={<Add />}
      open={open}
      handleClose={_handleClose}
    >
      <SideDialog.Content>
        <div className="p-7 font-bold text-[18px]">
          <p className="text-start">{t("enterBasicDataDetail")}</p>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mt-7 w-full grid grid-cols-2 gap-x-5 gap-y-7">
              <TextField
                name="keyword"
                label={t("keyword")}
                type={"text"}
                placeholder={t("keyword")}
                formik={formik}
              />

              {
                langs?.map((lang: any, index) => (
                  <TextField
                    key={lang.id}
                    name={lang.language}
                    label={t("translateIn") + " " + t(lang.language)}
                    type={"text"}
                    placeholder={t(lang.language)}
                    formik={formik}
                  />
                ))
              }
            </div>
          </form>
        </div>
      </SideDialog.Content>
      <SideDialog.Footer>
        <div className="py-[24px] border-t border-text-300 px-7 flex justify-between">
          <div className="w-[126px]">
            <Button
              disabled={!saveSuccess}
              text={t("cancel")}
              onClick={_handleClose}
              gray
            />
          </div>
          <div className="w-[207px]">
            <Button
              disabled={!saveSuccess}
              icon={saveSuccess ? <Add /> : null}
              text={t("submit")}
              onClick={handleSubmitForm}
              loading={!saveSuccess}
            />
          </div>
        </div>
      </SideDialog.Footer>
    </SideDialog>
  );
};

export default AddKeywordDialog;
