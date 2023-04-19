import { DocumentText, GalleryAdd } from "iconsax-react";
import { useRef } from "react";

interface DropzoneProps {
  onFileDrop?: (file: File) => void;
  acceptedTypes?: string[];
  maxSize?: number;
  imageOnly?: boolean;
  file?: File;
  placeholder?: string;
}
const Dropzone: React.FC<DropzoneProps> = ({
  onFileDrop,
  acceptedTypes,
  maxSize,
  imageOnly,
  file,
  placeholder,
}) => {
  const dropzoneRef = useRef<HTMLDivElement>(null);

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
    e.preventDefault();
    dropzoneRef.current?.classList.remove("!bg-primary-main");
    dropzoneRef.current?.classList.remove("!text-white");

    const file = e.dataTransfer.files[0];

    if (acceptedTypes && !acceptedTypes.includes(file.type)) {
      console.error("File type not supported");
      return;
    }

    if (maxSize && file.size > maxSize) {
      console.error("File size exceeds maximum limit");
      return;
    }

    onFileDrop?.(file);
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
        return;
      }

      onFileDrop?.(file);
    }
  };
  const handleFilePickerClick = () => {
    if (dropzoneRef.current) {
      const fileInput = dropzoneRef.current.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      fileInput.click();
    }
  };

  return (
    <div
      ref={dropzoneRef}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleFilePickerClick}
      className="w-[161px] h-[144px] border border-dashed border-text-400 text-text-500 rounded-[6px] flex items-center justify-center cursor-pointer"
    >
      <input
        type="file"
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
