import { ArrowDown, ArrowDown2, ArrowRight, Notification } from "iconsax-react";
import { setCollapseMenu } from "../../app/redux/app/actions";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";

const Header = () => {
  const Dispatch = useAppDispatch();
  const collapseMenu = useAppSelector((state) => state.app.collapseMenu);
  const handleCollapseMenu = () => {
    console.log("collapse menu");
    Dispatch(setCollapseMenu(!collapseMenu));
  };
  return (
    <div className="w-full h-[80px] bg-white flex items-center justify-between pl-[36px] sticky top-0 z-50">
      <div>
        <ArrowRight onClick={handleCollapseMenu} className={`${collapseMenu && "rotate-180"}`}/>
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
