import DataTable, { Direction } from "react-data-table-component";

type TableProps = {
    columns: any;
    data: any;
}
const Table = ({columns , data}:TableProps) => {
  const conditionalRowStyles = [
    {
      when: (row:any) => row.id === "footer",
      style: {
        backgroundColor: "rgba(247, 247, 247, 1)",
        borderTop:"2px solid #EDEDED",
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
 
  ];
  return (
    <DataTable
      direction={Direction.RTL}
      columns={columns}
      data={data}
      className="customTable"
      conditionalRowStyles={conditionalRowStyles}

    />
  );
};
export default Table;
