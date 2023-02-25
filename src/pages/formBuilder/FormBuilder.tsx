import { Add, Setting4 } from "iconsax-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCollapseMenu } from "../../app/redux/app/actions";
import { useAppDispatch } from "../../app/redux/hooks";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Button from "../../components/button/Button";
import Tabs from "../../components/tabs/Tabs";

const FormBuilder = () => {
  const Dispatch = useAppDispatch();
  useEffect(() => {
    Dispatch(setCollapseMenu(true));
  });
  return (
    <div className="w-full h-full">
      <Breadcrumb
        actions={
          <>
            {" "}
            <div className="w-[186px]">
              <Button
                icon={<Setting4 />}
                text="فیلتر پیشرفته"
                onClick={() => {}}
                simple
              />
            </div>
            <div className="w-[186px] mr-[16px]">
              <Button icon={<Add />} text="ثبت سفارش جدید" href="submit" />
            </div>
          </>
        }
        title="فرم ساز"
      />
      <div className="w-full flex">
        <div className="basis-1/4 bg-white p-4 ml-[10px]">
          <Tabs
            items={[
              {
                label: "المان ها",
                value: "elements",
              },
              {
                label: "ویرایش المان",
                value: "editElement",
              },
              {
                label: "شرط های فرم",
                value: "formConditions",
              },
            ]}
          />
        </div>
        <div className="basis-3/4 bg-white p-4 mr-[10px]">content</div>
      </div>
    </div>
  );
};

export default FormBuilder;
