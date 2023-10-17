import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
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
  placeholder?: string | null;
  formik: any;
  className?: string;
  imageOnly?: boolean;
  setPending?: Dispatch<SetStateAction<boolean>>;
  mock?: boolean;
  noBadge?: boolean;
};

const UploadGroup = ({
  name,
  label,
  formik,
  placeholder,
  className,
  imageOnly,
  setPending,
  mock,
  noBadge,
}: UploadGroupProps) => {
  const { t } = useTranslation(["common", "validations"]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<any>([]);
  const [uploading, setUploading] = useState(false);
  const handleUploadFile = async (e: any) => {
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

  const handleDeleteFile = async (file: any, index: number) => {
    //remove index from files

    let newFiles = [...files];
    try {
      let response = await Api()?.delete(`/files/${file.hashCode}`);
      newFiles.splice(index, 1);
      setFiles([...newFiles]);

      SnackbarUtils.success(t("validations:imageDeleteSuccess"));
    } catch (e) {
      SnackbarUtils.error(t("validations:imageDeleteError"));
    }
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
    // if (transform.imageValidExtensions.includes(file.type)) {
    const blob = transform.fileToBlob(file);
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, "_blank");
    // }
  };

  useEffect(() => {
    //formik change listener
    formik.setFieldValue(name, files);
  }, [files]);
  // useEffect(() => {

  //   //formik change listener
  if (formik.values?.[name]?.length > 0 && files.length == 0) {
    setFiles(formik.values?.[name] || []);
  }
  // }, [formik]);

  useEffect(() => {
    if (setPending) {
      setPending(uploading);
    }
  }, [uploading]);

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
        {files.length < 5 && (
          <div className="bg-white w-full h-min rounded-[6px]">
            <UploadFile
              disabled={uploading}
              name={"uploadFile"}
              imageOnly={imageOnly}
              fileRef={fileRef}
              placeholder={
                uploading ? t("pleaseWait") || "" : placeholder || ""
              }
              formik={{
                handleChange: (e: any) => {
                  if (!mock) {
                    handleUploadFile(e);
                    if (fileRef.current) fileRef.current.value = "";
                  }
                },
              }}
            />
          </div>
        )}
        {/* map all except last */}
        {files.map((file: any, index: any) => {
          return (
            <div
              key={index}
              className="bg-white rounded-[6px] w-full h-[144px]"
            >
              <ImageThumbnail
                src={file?.value || file?.file}
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
                badge={index === 0 && !noBadge ? t("mainImage") || "" : ""}
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
