type TabsProps = {
  items: { label: string; value: string }[];
};
const Tabs = ({ items }: TabsProps) => {
  return (
    <div className="w-full flex px-3">
      {items.map((item: any) => (
        <div>{item.label}</div>
      ))}
    </div>
  );
};
export default Tabs;
