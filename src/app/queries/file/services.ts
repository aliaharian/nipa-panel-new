import Api from "app/service/Api";

async function uploadFile(file: File) {
  let formData = new FormData();
  formData.append("file", file);
  let response = await Api()?.post("/files", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return {
    ...response?.data,
  };
}

export { uploadFile };
