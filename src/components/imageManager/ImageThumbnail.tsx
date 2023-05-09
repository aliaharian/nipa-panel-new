import { fileToUrl } from "@/app/utils/transform";
import { MaximizeCircle, Trash } from "iconsax-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import transform from "app/utils/transform";
import { CircularProgress } from "@mui/material";
type ImageThumbnailProps = {
  src: any;
  badge?: string;
  handleDelete?: () => void;
  handleFullscreen?: () => void;
  handleViewImage?: () => void;
  hashCode?: string;
};
const ImageThumbnail = ({
  src,
  badge,
  handleDelete,
  handleFullscreen,
  handleViewImage,
  hashCode,
}: ImageThumbnailProps) => {
  console.log('hashCode', hashCode)
  const [url, setUrl] = useState<any>();
  const { t } = useTranslation(["common", "validations"]);

  useEffect(() => {
    transform.fileToUrl(src).then((url) => {
      setUrl(url);
    });
  }, []);
  return (
    <div className="group/item w-full h-full rounded-[6px] overflow-hidden relative">
      <div className="w-full h-full relative">
        {badge && (
          <p className="right-[8px] top-[8px] text-[10px] inline-block absolute py-[5px] px-[8px] bg-secondary-500 text-white rounded-[4px]">
            {badge}
          </p>
        )}
        <img
          src={url}
          alt=""
          className="w-full h-full object-cover rounded-[6px]"
        />
        {/* //overlay */}
        <div
          className={`absolute top-0 left-0 bg-black-60 w-full h-full flex grid grid-rows-3 ${
            hashCode ? "opacity-0" : "opacity-100"
          } pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto transition-all`}
        >
          <div></div>
          <div>
            {hashCode ? (
              handleViewImage && (
                <p
                  onClick={handleViewImage}
                  className="cursor-pointer text-[10px] inline-block py-[5px] px-[8px] bg-secondary-500 text-white rounded-[4px]"
                >
                  {t("viewImage")}
                </p>
              )
            ) : (
              <CircularProgress />
            )}
          </div>
          <div className="w-full flex items-center justify-between px-[10px] py-[12px] text-white">
            {hashCode && handleFullscreen && (
              <div className="cursor-pointer" onClick={handleFullscreen}>
                <MaximizeCircle />
              </div>
            )}
            {hashCode && handleDelete && (
              <div className="cursor-pointer" onClick={handleDelete}>
                <Trash />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageThumbnail;
