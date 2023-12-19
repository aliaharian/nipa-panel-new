import Button from "components/button/Button";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { Add, Edit, Trash } from "iconsax-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import TableSkeleton from "components/skeleton/TableSkeleton";
import Table from "components/table/Table";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import TableAction from "components/table/TableAction";
import { keywordsList, languagesList } from "app/redux/translations/actions";
import AddKeywordDialog from "components/translations/AddKeywordDialog";
import DeletePopup from "components/popup/DeletePopup";
import translationService from "app/redux/translations/service";

const TranslationsPage = () => {
    const { t } = useTranslation();
    const [openAddKeyword, setOpenAddKeyword] = useState<boolean>(false);
    const data = useAppSelector(state => state.translations.keywords);
    const langs = useAppSelector(state => state.translations.languages);
    const [selectedKeyword, setSelectedKeyword] = useState<any>(null);
    const Dispatch = useAppDispatch();
    const [openDeletePopup, setOpenDeletePopup] = useState<boolean>(false);
    const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

    useEffect(() => {
        Dispatch(keywordsList())
        !langs && Dispatch(languagesList())
    }, [])
    const columns = [
        {
            name: t("#"),
            selector: (row: any) => row.id,
            sortable: true,
        },
        {
            name: t("keyword"),
            selector: (row: any) => row.keyword,
            sortable: true,
        },
        {
            name: t("translateIn") + " " + t("en"),
            selector: (row: any) => row.translations.find((item: any) => item.lang == "en")?.translation||t("dontHave"),
            sortable: true,
        },
        {
            allowOverflow: true,
            button: true,
            width: "120px",
            cell: (row: any) => (
                <TableAction
                    items={[
                        {
                            icon: <Edit variant="Bold" />,
                            text: t('edit'),
                            name: "edit",
                        },
                        {
                            icon: <Trash variant={"Bold"} />,
                            text: t('delete'),
                            name: "delete",
                        },
                    ].filter(Boolean)}
                    handleAction={handleTableAction}
                    row={row}
                />
            ),
        }
    ];
    const handleTableAction = (
        row: any,
        action: string
    ) => {
        switch (action) {
            case "edit":
                setSelectedKeyword(row);
                setOpenAddKeyword(true);
                break;
            case "delete":
                setSelectedKeyword(row);
                setOpenDeletePopup(true);
                break;
            default:
                break;
        }
    }
    const handleClosedeletePopup = () => {
        setOpenDeletePopup(false);
        setSelectedKeyword(null);
    }
    const handleDeleteProduct = async () => {
        setDeleteLoading(true);
        await translationService.deleteKeyword(selectedKeyword.id);
        setDeleteLoading(false);
        setOpenDeletePopup(false);
        setSelectedKeyword(null);
        Dispatch(keywordsList())
    }

    return (
        <div className="w-full h-full">
            {langs &&
                <AddKeywordDialog
                    open={openAddKeyword}
                    handleClose={() => { setOpenAddKeyword(false); setSelectedKeyword(null) }}
                    // getKeywords={() => Dispatch(keywordsList())}
                    langs={langs}
                    keyword={selectedKeyword}

                />}
            <DeletePopup
                title={t("deleteKeywordConfirmation")}
                open={openDeletePopup}
                onClose={handleClosedeletePopup}
                handleConfirm={handleDeleteProduct}
                loading={deleteLoading}
            />
            <Breadcrumb
                actions={
                    <>
                        <div className="w-[186px] ms-4">
                            <Button
                                icon={<Add />}
                                text={t("addKeyword")}
                                onClick={() => setOpenAddKeyword(true)}
                            />
                        </div>
                    </>
                }
                title={t("translations")}
            />
            <div>

                {data ? (
                    <Table columns={columns} data={data || []} />
                ) : (
                    <TableSkeleton />
                )}
            </div>
        </div>
    )
}
export default TranslationsPage;