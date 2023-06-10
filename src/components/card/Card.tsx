import { ArrowLeft } from "iconsax-react";

type CardProps = {
  arrow?: boolean;
  children?: React.ReactNode;
};
const Card = ({ arrow = true, children }: CardProps) => {
  return (
    <div className="transition-all cursor-pointer flex items-center justify-between w-full py-8 px-[23px] bg-white border border-text-300 hover:shadow rounded-[6px] text-text-500 hover:text-primary-main">
      <div>{children}</div>
      {arrow && (
        <div>
          <ArrowLeft  />
        </div>
      )}
    </div>
  );
};
export default Card;
