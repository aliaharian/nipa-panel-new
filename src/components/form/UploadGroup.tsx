import { useEffect, useRef, useState } from "react";
import UploadFile from "./UploadFile";
import ImageThumbnail from "../imageManager/ImageThumbnail";
import { useTranslation } from "react-i18next";
import ImageFullscreen from "../imageManager/ImageFullscreen";
import ReactDOM from "react-dom/client";
import transform from "app/utils/transform";
import Api from "app/service/Api";
import SnackbarUtils from "app/utils/SnackbarUtils";

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
  const fileRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<any>([]);
  const [uploading, setUploading] = useState(false);
  const handleUploadFile = async (e: any) => {
    console.log("eee", e);
    const newFiles = [...files];
    const newName = name + "_" + Math.floor(Math.random() * 100);
    newFiles.push({
      name: newName,
      value: e.target.value,
      hashCode: null,
    });
    setFiles([...newFiles]);

    setUploading(true);
    //upload file
    uploadFile(e.target.value, newName, newFiles);
  };
  const uploadFile = async (file: File, name: string, allFiles: any[]) => {
    //do upload
    var formData = new FormData();
    formData.append("file", file);
    try {
      let response = await Api()?.post("/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("response", response);
      if (response?.data?.file?.hash_code) {
        const newFiles = [...allFiles];
        const foundIndex = newFiles.findIndex((x: any) => x.name === name);
        if (foundIndex !== -1) {
          newFiles[foundIndex] = {
            ...newFiles[foundIndex],
            hashCode: response.data.file.hash_code,
          };
          setFiles([...newFiles]);
        }
      }
      setUploading(false);
    } catch (e) {
      console.log("error", e);
      //remove image from array
      const newFiles = [...allFiles];
      const foundIndex = newFiles.findIndex((x: any) => x.name === name);
      if (foundIndex !== -1) {
        newFiles.splice(foundIndex, 1);
        setFiles([...newFiles]);
      }
      //snackbar
      SnackbarUtils.error(t("validations:uploadError"));
      setUploading(false);
    }
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

      <div className="bg-text-300 w-full p-[14px] grid grid-cols-5 gap-x-5 gap-y-5">
        <div className="bg-white w-full h-min rounded-[6px]">
          <UploadFile
            disabled={uploading}
            name={"uploadFile"}
            imageOnly={imageOnly}
            fileRef={fileRef}
            placeholder={uploading ? t("pleaseWait") || "" : placeholder || ""}
            formik={{
              handleChange: (e: any) => {
                handleUploadFile(e);
                if (fileRef.current) fileRef.current.value = "";
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
                hashCode={file.hashCode}
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
