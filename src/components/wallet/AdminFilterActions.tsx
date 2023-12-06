import Button from "components/button/Button";
import { Filter, ReceiveSquare, Setting4 } from "iconsax-react";
import TransactionFiltersDialog from "./TransactionFiltersDialog";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { transactionsList } from "app/redux/wallet/actions";
import walletService from "app/redux/wallet/service";
import { Badge } from "@mui/material";
import transform from "app/utils/transform";

const AdminFilterActions = () => {
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const Dispatch = useAppDispatch();
    const params = useAppSelector((state) => state.wallet.transactions).filters;
    console.log("params", params)

    const handleSubmitFilters = (values: any) => {
        Dispatch(transactionsList(1, values))

    }
    const handleDownloadExcel = async () => {
        const response = await walletService.exportExcel(params);
        const blob = new Blob([response.data], { type: response.headers['content-type'] });

        // Create a link element
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);

        // Extract the filename from the Content-Disposition header (if available)
        const contentDisposition = response.headers['content-disposition'];
        const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"$/);
        const filename = filenameMatch ? filenameMatch[1] : 'download';

        // Set the download attribute and filename for the link
        link.download = filename;

        // Append the link to the document and trigger a click event
        document.body.appendChild(link);
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);

    }
    return (

        <div className="flex items-center justify-center">
            <TransactionFiltersDialog
                open={openFilter}
                handleClose={() => setOpenFilter(false)}
                handleSubmit={handleSubmitFilters}
            />
            <Badge badgeContent={transform.toPersianDigits(Object.keys(params || {}).length || null)}
                classes={{
                    badge: "bg-secondary-main text-white"

                }}
                invisible={Object.keys(params || {}).length === 0}

            >
                <div>
                    <Button
                        text="فیلتر"
                        onClick={() => { setOpenFilter(true) }}
                        icon={<Setting4 />}
                        simple
                    />

                </div>
            </Badge>
            <div className="mr-12">
                <Button
                    text="خروجی اکسل"
                    onClick={() => { handleDownloadExcel() }}
                    icon={<ReceiveSquare />}
                    simple
                />
            </div>



        </div>)
}
export default AdminFilterActions;