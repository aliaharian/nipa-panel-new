import DataTable, { Direction } from "react-data-table-component";
import { useTranslation } from "react-i18next";

type TableProps = {
  columns: any;
  data: any;
}
const Table = ({ columns, data }: TableProps) => {
  const { i18n } = useTranslation();
  const conditionalRowStyles = [
    {
      when: (row: any) => row.id === "footer",
      style: {
        backgroundColor: "rgba(247, 247, 247, 1)",
        borderTop: "2px solid #EDEDED",
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },

  ];
  return (
    <DataTable
      direction={
        i18n.dir() === "ltr" ? Direction.LTR :
          Direction.RTL
      }
      columns={columns}
      data={data}
      className="customTable"
      conditionalRowStyles={conditionalRowStyles}

    />
  );
};
export default Table;
