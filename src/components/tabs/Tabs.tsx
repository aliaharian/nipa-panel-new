type TabsProps = {
  items: { label: string; value: string }[];
  value: string;
  handleChange: (value: string) => void;
};
const Tabs = ({ items, value, handleChange }: TabsProps) => {
  return (
    <div className="mx-auto w-full flex px-3 items-center justify-between border-b mb-[19px] border-text-300">
      {items.map((item: any,index:number) => (
        <div
        key={index}
          className="mx-1 cursor-pointer min-w-[70px] w-1/3 px-[10px] 2xl:px-[6px] relative flex items-center justify-center"
          onClick={() => handleChange(item.value)}
        >
          <p
            className={`mb-[20px] transition-all text-[14px] 2xl:text-[12px] leading-[20px] ${
              item.value === value ? "text-primary-main font-black 2xl:font-semibold" : "text-text-500"
            }`}
          >
            {item.label}
          </p>
          <div
            className={`w-full ${
              item.value === value ? "h-[3px] rounded-t-[2px]" : "h-0"
            } bg-primary-main transition-all absolute bottom-0`}
          ></div>
        </div>
      ))}
    </div>
  );
};
export default Tabs;
