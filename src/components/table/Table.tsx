import DataTable, { Direction } from "react-data-table-component";

type TableProps = {
    columns: any;
    data: any;
}
const Table = ({columns , data}:TableProps) => {
  return (
    <DataTable
      direction={Direction.RTL}
      columns={columns}
      data={data}
      className="customTable"
    />
  );
};
export default Table;
