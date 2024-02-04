import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import Section from "components/section/Section";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Breadcrumb title={t("profile.userInfo")} />
      <Section headerTitle={t("profile.userInfo") || ""}></Section>
    </div>
  );
};
export default Profile;
