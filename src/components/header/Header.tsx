import { ArrowDown, ArrowDown2, ArrowRight, Notification } from "iconsax-react";

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-white flex items-center justify-between pl-[36px]">
      <div>
        <ArrowRight />
      </div>
      <div className="flex">
        <div className="p-[20px] ml-[20px]">
          <Notification />
        </div>
        <div className="flex items-center pr-[7px] pl-[16px] cursor-pointer">
          <img
            src="https://avatars.githubusercontent.com/u/47092464?v=4"
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full"
          />
          <p className="mx-[10px]">علیرضا هاشمی</p>
          <ArrowDown2 />
        </div>
      </div>
    </div>
  );
};
export default Header;
