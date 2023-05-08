import { CloseCircle } from "iconsax-react";
import ReactDOM from "react-dom";

const ImageFullscreen = ({ url }: any) => {
  const handleClose = () => {
    document.body.removeChild(
      document.getElementById("image-fullscreen") as HTMLElement
    );
  };
  return (
    <div
      id="image-fullscreen"
      className="fixed w-[100vw] h-[100vh] bg-black-90 flex flex-col items-center justify-center left-0 top-0 z-[999]"
    >
      <div className="w-full h-[60px] px-16 pt-8 flex items-center text-white">
        <CloseCircle
          onClick={handleClose}
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full h-[calc(100%-60px)] flex items-center justify-center pb-10">
        <img
          src={url}
          className="w-full max-w-[70vw] h-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
};
export default ImageFullscreen;
