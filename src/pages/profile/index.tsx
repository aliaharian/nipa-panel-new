import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import Section from "components/section/Section";
import Dropzone from "components/form/Dropzone";
import { useEffect, useRef, useState } from "react";
import { useCompleteProfile, useGetUserInfo } from "app/queries/auth/hooks";
import { GalleryAdd } from "iconsax-react";
import { CircularProgress } from "@mui/material";
import * as Yup from "yup";
import { useUploadFile } from "app/queries/file/hooks";
import TextField from "components/form/TextField";
import { useFormik } from "formik";
import { ProfileInfo } from "@models/auth";
import Button from "components/button/Button";

const Profile = () => {
  const { t } = useTranslation();
  const fileRef = useRef<any>(null);
  const [file, setFile] = useState<File>();
  const [avatarHashCode, setAvatarHashCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { data: userInfo } = useGetUserInfo();
  console.log("user", userInfo?.user?.avatar?.hash_code);
  const initialValues: ProfileInfo = {
    name: userInfo?.user?.name,
    last_name: userInfo?.user?.last_name,
    mobile: userInfo?.user?.mobile,
    email: userInfo?.user?.email,
    avatar_hash_code: userInfo?.user?.avatar?.hash_code,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(
      t("name.required", { ns: "validations" }) || ""
    ),
    last_name: Yup.string().required(
      t("lastName.required", { ns: "validations" }) || ""
    ),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      handleUpdateProfile({
        ...values,
        mobile: userInfo?.user?.mobile,
      });
    },
  });
  useEffect(() => {
    if (userInfo?.user) {
      if (userInfo?.user?.avatar?.hash_code) {
        setAvatarHashCode(
          (process.env.REACT_APP_BASE_URL || "") +
            (process.env.REACT_APP_IMAGE_URL || "") +
            userInfo?.user?.avatar?.hash_code || ""
        );
      }
      formik.setValues({
        name: userInfo.user.name,
        last_name: userInfo.user.last_name,
        mobile: userInfo.user.mobile,
        email: userInfo.user.email,
      });
      setLoading(false);
    }
  }, [userInfo, userInfo?.user]);
  const { mutate: uploadFile } = useUploadFile();
  const { mutate: updateProfile } = useCompleteProfile();
  const handleDropImage = (e: File) => {
    setLoading(true);
    setFile(e);
    uploadFile(e, {
      onSuccess: (response: any) => {
        handleUpdateProfile({
          mobile: userInfo?.user?.mobile,
          avatar_hash_code: response.file.hash_code,
        });
      },
      onError: () => {
        setLoading(false);
      },
    });
  };
  const handleUpdateProfile = (data: ProfileInfo) => {
    updateProfile(data, {
      onSuccess: (data) => {
        if (userInfo?.user?.avatar?.hash_code) {
          setAvatarHashCode(
            (process.env.REACT_APP_BASE_URL || "") +
              (process.env.REACT_APP_IMAGE_URL || "") +
              data?.user?.avatar?.hash_code || ""
          );
        }
      },
      onSettled: () => {
        setLoading(false);
      },
    });
  };
  return (
    <div>
      <Breadcrumb title={t("profile.userInfo")} />
      <Section headerTitle={t("profile.userInfo") || ""}>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-y-[30px] gap-x-4">
            <Dropzone
              onFileDrop={handleDropImage}
              placeholder={t("uploadProfilePic") || ""}
              imageOnly={true}
              fileRef={fileRef}
              file={file}
              className="h-[115px]"
            >
              <div className="flex items-center w-full h-full p-5 gap-x-5">
                <div className="flex items-center justify-center relative w-[75px] h-[75px] border border-text-300 rounded-full bg-text-300 overflow-hidden">
                  {avatarHashCode ? (
                    <img
                      src={avatarHashCode+"?thumbnail=true"}
                      alt={avatarHashCode}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <GalleryAdd className="w-[30px] h-[30px] text-inherit" />
                  )}
                  {loading && (
                    <div className="absolute flex items-center justify-center bg-primary-dark/30 w-full h-full rounded-full top-0 left-0">
                      <CircularProgress />
                    </div>
                  )}
                </div>
                <p className="text-sm">
                  {userInfo?.user?.avatar
                    ? t("profile.updateAvatar")
                    : t("profile.uploadAvatar")}
                </p>
              </div>
            </Dropzone>
            <div />
            <div>
              <TextField
                className="group"
                name={"name"}
                label={t("name")}
                type="text"
                placeholder={t("profile.enterName")}
                formik={formik}
              />
            </div>
            <div>
              <TextField
                className="group"
                name={"last_name"}
                label={t("profile.lastName")}
                type="text"
                placeholder={t("profile.enterLastName")}
                formik={formik}
              />
            </div>
            <div>
              <TextField
                className="group"
                name={"email"}
                label={t("profile.email")}
                type="text"
                placeholder={t("profile.enterEmail")}
                formik={formik}
              />
            </div>
            <div>
              <TextField
                className="group"
                name={"mobile"}
                label={t("profile.mobile")}
                type="text"
                placeholder={t("profile.enterMobile")}
                formik={formik}
              />
            </div>
            <div></div>
            <div className="w-full flex justify-end">
              <div className="w-[163px] float-left">
                <Button
                  loading={loading}
                  disabled={loading}
                  type="submit"
                  text={t("saveChanges")}
                />
              </div>
            </div>
          </div>
        </form>
      </Section>
    </div>
  );
};
export default Profile;
