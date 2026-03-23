import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";

export default function DataTable<T>({
  columns,
  data,
  rowKey,
  tableClassName,
  headerRowClassName,
  headerCellClassName,
  bodyRowClassName,
  bodyCellClassName,
  headerClassName,
}: DataTableProps<T>) {
  return (
    <Table className={clsx("custom-scrollbar", tableClassName)}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader className={headerClassName}>
        <TableRow className={clsx("hover:bg-transparent!", headerRowClassName)}>
          {columns.map((column, i) => (
            <TableHead
              key={i}
              className={clsx(
                "bg-dark-400 text-purple-100 py-4 first:pl-5 last:pr-5",
              )}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            key={index}
            className={clsx(
              "overflow-hidden rounded-lg border-b border-purple-100/5 hover:bg-dark-400/30! relative",
              bodyRowClassName,
            )}
          >
            {columns.map((column, columnIndex) => (
              <TableCell
                key={columnIndex}
                className={clsx("py-4 first:pl-5 last:pr-5")}
              >
                {column.cell(row, index)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
