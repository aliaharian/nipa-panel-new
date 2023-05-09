import transform from "app/utils/transform";
import SnackbarUtils from "app/utils/SnackbarUtils";
import { DocumentText, GalleryAdd } from "iconsax-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface DropzoneProps {
  onFileDrop?: (file: File) => void;
  acceptedTypes?: string[];
  maxSize?: number;
  imageOnly?: boolean;
  file?: File;
  placeholder?: string;
  fileRef: any;
  disabled?: boolean;
}
const Dropzone: React.FC<DropzoneProps> = ({
  onFileDrop,
  acceptedTypes,
  maxSize,
  imageOnly,
  file,
  placeholder,
  fileRef,
  disabled,
}) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(["common", "validations"]);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropzoneRef.current?.classList.add("!bg-primary-main");
    dropzoneRef.current?.classList.add("!text-white");
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dropzoneRef.current?.classList.remove("!bg-primary-main");
    dropzoneRef.current?.classList.remove("!text-white");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!disabled) {
      e.preventDefault();
      dropzoneRef.current?.classList.remove("!bg-primary-main");
      dropzoneRef.current?.classList.remove("!text-white");

      const file = e.dataTransfer.files[0];

      if (acceptedTypes && !acceptedTypes.includes(file.type)) {
        console.error("File type not supported");
        return;
      }
      //image file types
      if (imageOnly) {
        //check extensions

        if (!transform.imageValidExtensions.includes(file.type)) {
          console.error("File type not supported");
          return;
        }
      }

      if (maxSize && file.size > maxSize) {
        console.error("File size exceeds maximum limit");
        return;
      }
      onFileDrop?.(file);
    }
  };
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (acceptedTypes && !acceptedTypes.includes(file.type)) {
        console.error("File type not supported");
        return;
      }

      if (maxSize && file.size > maxSize) {
        console.error("File size exceeds maximum limit");
        SnackbarUtils.error(
          t("file_size_exceeds_maximum_limit", { ns: "validations" })
        );
        return;
      }

      //image file types
      if (imageOnly) {
        //check extensions

        if (!transform.imageValidExtensions.includes(file.type)) {
          console.error("File type not supported");
          SnackbarUtils.error(
            t("file_type_not_supported", { ns: "validations" })
          );

          return;
        }
      }

      onFileDrop?.(file);
    }
  };
  const handleFilePickerClick = () => {
    if (dropzoneRef.current && !disabled) {
      const fileInput = dropzoneRef.current.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      fileInput.click();
      console.log('ok')
      console.log('ok')
      console.log('ok')
      console.log('ok')

    }
  };

  return (
    <div
      ref={dropzoneRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleFilePickerClick}
      className="w-full h-[144px] border border-dashed border-text-400 text-text-500 rounded-[6px] flex items-center justify-center cursor-pointer"
    >
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <div className="flex items-center justify-center flex-col">
        <div className="w-[30px] h-[30px]">
          {imageOnly ? (
            <GalleryAdd className="w-full h-full text-inherit" />
          ) : (
            <DocumentText className="w-full h-full text-inherit" />
          )}
        </div>
        <p className="text-[14px] mt-[5px] font-medium text-inherit">
          {file ? file.name : placeholder || "انتخاب کنید"}
        </p>
      </div>
    </div>
  );
};
export default Dropzone;
