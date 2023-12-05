import transform from "app/utils/transform";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

type paginationProps = {
    total: number;
    current: number;
    onChange: (page: number) => void;
}

const Pagination = ({
    total,
    current,
    onChange,
}: paginationProps) => {
    return (
        <div className="w-full flex items-center justify-center">
            <div onClick={() => {
                if (current > 1) {
                    onChange(current - 1)
                }
            }} className={`w-8 h-8 ${current == 1 ? "svg:text-text-300" : "svg:text-text-500 cursor-pointer"}`}>
                <ArrowCircleRight style={{ width: 32, height: 32 }} />
            </div>
            <div className="mx-4 flex items-center justify-center">
                {Array(total).fill(0).map((_, index) => (
                    <div onClick={
                        () => {
                            onChange(index + 1)
                        }
                    } key={index} className={`cursor-pointer mx-1 rounded-full w-8 h-8 flex items-center justify-center ${current == index + 1 && "bg-primary-main"}`}>
                        <p className={`${current == index + 1 ? "text-white" : "text-text-900"} text-[16px]`}>
                            {transform.toPersianDigits(index + 1)}
                        </p>
                    </div>
                ))}
            </div>

            <div
                onClick={() => {
                    if (current < total) {
                        onChange(current + 1)
                    }
                }}
                className={`w-8 h-8 ${current == total ? "svg:text-text-300" : "svg:text-text-500 cursor-pointer"}`}>
                <ArrowCircleLeft style={{ width: 32, height: 32 }} />
            </div>
        </div>

    )

}

export default Pagination;
