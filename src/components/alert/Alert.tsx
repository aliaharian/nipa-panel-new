import { InfoCircle } from "iconsax-react"
import { ReactNode } from "react";

const Alert = ({ title, text, type, actions }: { title: string, actions?: ReactNode, text: string | ReactNode, type: string }) => {
    let style;
    switch (type) {
        case "success":
            style = "bg-success-secondary text-success-primary border-success-primary"
            break;
        case "warning":
            style = "bg-warning-secondary text-warning-text border-warning-primary"
            break;
        case "error":
            style = "bg-error-secondary text-error-primary border-error-primary"
            break;
        default:
            style = "bg-info-secondary text-info-primary border-info-primary"
            break;
    }
    return (
        <div className={`
            w-full rounded-[6px] border  p-4 ${style} flex  items-center justify-between
        `}>
            <div className="flex flex-col justify-center">
                <div className="flex items-center">
                    <InfoCircle />
                    <p className="mr-1 text-[16px] font-bold">
                        {title}
                    </p>
                </div>
                {text &&
                    <div className="mt-2">

                        {typeof text == "string" ? <p className="text-[14px]">
                            {text}
                        </p> : text}

                    </div>
                }
            </div>
            {
                actions &&
                <div className="flex items-center">
                    {actions}
                </div>
            }

        </div>
    )
}

export default Alert