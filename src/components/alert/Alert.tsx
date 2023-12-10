import { InfoCircle } from "iconsax-react"

const Alert = ({ title, text, type }: { title: string, text: string, type: string }) => {
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
            w-full rounded-[6px] border  p-4 ${style} flex flex-col items-start justify-start
        `}>
            <div className="mb-2 flex items-center">
                <InfoCircle />
                <p className="mr-1 text-[16px] font-bold">
                    {title}
                </p>
            </div>
            <div>
                <p className="text-[16px]">
                    {text}
                </p>
            </div>

        </div>
    )
}

export default Alert