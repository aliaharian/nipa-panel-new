import { useState } from "react";
import UploadFile from "./UploadFile";
import ImageThumbnail from "../imageManager/ImageThumbnail";
import { useTranslation } from "react-i18next";
import ImageFullscreen from "../imageManager/ImageFullscreen";
import ReactDOM from "react-dom/client";
import transform from "app/utils/transform";

type UploadGroupProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string | null;
  formik: any;
  mask?: string;
  maskChar?: string;
  inputActions?: any;
  className?: string;
  imageOnly?: boolean;
};

const UploadGroup = ({
  name,
  label,
  formik,
  type,
  placeholder,
  maskChar,
  className,
  mask,
  inputActions,
  imageOnly,
}: UploadGroupProps) => {
  const { t } = useTranslation(["common", "validations"]);

  const [files, setFiles] = useState<any>([]);
  const handleUploadFile = (e: any) => {
    console.log("eee", e);
    const newFiles = [...files];

    newFiles.push({
      name: name + "_" + Math.floor(Math.random() * 100),
      value: e.target.value,
    });
    //do upload

    setFiles([...newFiles]);
  };

  console.log("files", files);

  const handleDeleteFile = (file: any, index: number) => {
    console.log("file", index);
    console.log("file", file);
    //remove index from files

    let newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles([...newFiles]);
  };
  const handleFullscreen = (file: any) => {
    //check type to verify this file is an image

    if (transform.imageValidExtensions.includes(file.type)) {
      transform.fileToUrl(file).then((url) => {
        const rootElement = document.createElement("div");
        rootElement.setAttribute("id", "image-fullscreen");
        document.body.appendChild(rootElement);
        ReactDOM.createRoot(rootElement).render(<ImageFullscreen url={url} />);
      });
    }
  };
  const handleViewImage = (file: any) => {
    //open file object in new tab
    if (transform.imageValidExtensions.includes(file.type)) {
      const blob = transform.fileToBlob(file);
      const blobUrl = URL.createObjectURL(blob);
      console.log(blobUrl);
      window.open(blobUrl, "_blank");
    }
  };
  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      <div className="text-sm mb-2 flex justify-between w-full">
        <label className="font-normal" htmlFor={name}>
          {label}
        </label>
      </div>

      <div className="bg-text-300 w-full p-[14px] grid grid-cols-4 gap-x-5 gap-y-5">
        <div className="bg-white w-full h-min rounded-[6px]">
          <UploadFile
            name={"uploadFile"}
            imageOnly={imageOnly}
            placeholder={placeholder || ""}
            formik={{
              handleChange: (e: any) => {
                handleUploadFile(e);
              },
            }}
          />
        </div>
        {/* map all except last */}
        {files.map((file: any, index: any) => {
          return (
            <div
              key={file.name}
              className="bg-white rounded-[6px] w-full h-[144px]"
            >
              <ImageThumbnail
                src={file.value}
                handleDelete={() => {
                  handleDeleteFile(file, index);
                }}
                handleFullscreen={() => {
                  handleFullscreen(file.value);
                }}
                handleViewImage={() => {
                  handleViewImage(file.value);
                }}
                badge={index === 0 ? t("mainImage") || "" : ""}
              />
            </div>
          );
        })}
      </div>

      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">
          {formik.errors?.[name]}
        </p>
      )}
    </div>
  );
};
export default UploadGroup;
