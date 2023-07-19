import { fileToUrl } from "@/app/utils/transform";
import { Document, MaximizeCircle, Trash } from "iconsax-react";
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
  const [url, setUrl] = useState<any>();
  const [isImage, setIsImage] = useState<Boolean>(false);
  const { t } = useTranslation(["common", "validations"]);

  useEffect(() => {
    transform.fileToUrl(src).then((url) => {
      setUrl(url);
    });
  }, []);
  useEffect(() => {

    setIsImage(src?.type?.search("image") > -1 ? true : false);
  }, [src]);

  return (
    <div className="group/item w-full h-full rounded-[6px] overflow-hidden relative">
      <div className="w-full h-full relative">
        {badge && isImage && (
          <p className="right-[8px] top-[8px] text-[10px] inline-block absolute py-[5px] px-[8px] bg-secondary-500 text-white rounded-[4px]">
            {badge}
          </p>
        )}
        {isImage ? (
          <img
            src={url}
            alt=""
            className="w-full h-full object-cover rounded-[6px]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center flex-col text-primary-main">
            <Document className="w-8 h-8" />
            <p className="mt-2">{src.name}</p>
          </div>
        )}
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
                  {isImage ? t("viewImage") : t("viewFile")}
                </p>
              )
            ) : (
              <CircularProgress />
            )}
          </div>
          <div className="w-full flex items-center justify-between px-[10px] py-[12px] text-white">
            {hashCode && handleFullscreen && (
              <div className="cursor-pointer" onClick={handleFullscreen}>
               {isImage && <MaximizeCircle />}
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
