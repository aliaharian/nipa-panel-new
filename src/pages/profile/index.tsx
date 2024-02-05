import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import Section from "components/section/Section";
import Dropzone from "components/form/Dropzone";
import { useRef, useState } from "react";
import { useGetUserInfo } from "app/queries/auth/hooks";
import { GalleryAdd } from "iconsax-react";

const Profile = () => {
  const { t } = useTranslation();
  const fileRef = useRef<any>(null);
  const [file, setFile] = useState<File>();
  const { data: userInfo } = useGetUserInfo();
  console.log("user", userInfo);
  return (
    <div>
      <Breadcrumb title={t("profile.userInfo")} />
      <Section headerTitle={t("profile.userInfo") || ""}>
        <div className="grid grid-cols-2">
          <Dropzone
            onFileDrop={(e: File) => {
              setFile(e);
            }}
            placeholder={t("uploadProfilePic") || ""}
            imageOnly={true}
            fileRef={fileRef}
            file={file}
            className="h-[115px]"
          >
            <div className="flex items-center w-full h-full">
              <div>
                {userInfo?.avatar ? (
                  <img
                    src={
                      (process.env.REACT_APP_BASE_URL || "") +
                      (process.env.REACT_APP_IMAGE_URL || "") +
                      userInfo.avatar.hash_code
                    }
                    alt=""
                  />
                ) : (
                  <GalleryAdd className="w-full h-full text-inherit" />
                )}
              </div>
            </div>
          </Dropzone>
        </div>
      </Section>
    </div>
  );
};
export default Profile;
