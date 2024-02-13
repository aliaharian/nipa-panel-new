import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "./services";

const useUploadFile = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["uploadFile"],
    mutationFn: uploadFile,
  });
  return {
    mutate,
    loading: isPending,
  };
};



export { useUploadFile };
