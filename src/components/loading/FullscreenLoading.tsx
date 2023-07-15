import { CircularProgress } from "@mui/material";

const FullscreenLoading = () => {
  return (
    <div className="flex-col w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] z-[9999] pointer-events-auto flex justify-center items-center">
      <CircularProgress />
      <p className="text-white mt-4">لطفا چند لحظه صبر کنید...</p>
    </div>
  );
};
export default FullscreenLoading;
