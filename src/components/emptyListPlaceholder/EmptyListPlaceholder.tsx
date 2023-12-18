import { SearchNormal } from "iconsax-react";
import { ReactNode } from "react";

const EmptyListPlaceholder = ({ title, subTitle, action }: { title: string, subTitle?: string, action?: ReactNode }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-4">

            <div className="svg:w-[40px] svg:h-[40px] mb-4 svg:text-text-500">
                <SearchNormal />

            </div>
            <p className="text-[14px] text-text-600 mb-4">
                {title}
            </p>
            {
                subTitle &&
                <p className="text-[12px] text-text-600 mb-4">
                {subTitle}
                </p>
            }
            {
                action &&
                <div className="w-[130px]">
                    {action}
                </div>
            }

        </div>
    );
}
export default EmptyListPlaceholder;