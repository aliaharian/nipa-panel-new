import Button from "components/button/Button";
import { Filter, ReceiveSquare, Setting4 } from "iconsax-react";
import TransactionFiltersDialog from "./TransactionFiltersDialog";
import { useState } from "react";

const AdminFilterActions = () => {
    const [openFilter, setOpenFilter] = useState<boolean>(true);

    return (

        <div className="flex items-center justify-center">
            <TransactionFiltersDialog
                open={openFilter}
                handleClose={() => setOpenFilter(false)}
            />
            <div>
                <Button
                    text="فیلتر"
                    onClick={() => { setOpenFilter(true) }}
                    icon={<Setting4 />}
                    simple
                />
            </div>
            <div className="mr-12">
                <Button
                    text="خروجی اکسل"
                    onClick={() => { }}
                    icon={<ReceiveSquare />}
                    simple
                />
            </div>



        </div>)
}
export default AdminFilterActions;