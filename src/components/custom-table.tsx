import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  header: Array<string>;
  body: Array<Array<string | ReactNode>>;
  tableRowClassName?: string;
};

export const CustomTable = ({ header, body, tableRowClassName }: Props) => {
  return (
    <Table className="table-fixed">
      <TableHeader className="bg-background-tertiary h-[60px]">
        <TableRow className="border-none text-white hover:bg-transparent">
          {header.map((cell, index) => (
            <TableHead
              key={cell.toString()}
              className={cn(
                "md:px-7 px-2 text-white text-sm font-extrabold uppercase min-w-[120px] md:min-w-[200px] wrap",
                {
                  "text-left": index === 0,
                }
              )}
              style={{
                minWidth: "230px",
                width: "230px",
              }}
            >
              {cell.toString()}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {body.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            className={cn(
              "h-[60px] hover:bg-transparent border-none",
              tableRowClassName
            )}
          >
            {row.map((cell, cellIndex) => (
              <TableCell
                key={cellIndex}
                className={cn(
                  "md:px-7 px-2 text-white text-[13px] font-medium font-manrope tracking-[0em] border-none min-w-[120px] md:min-w-[200px]",
                  {
                    "text-left": cellIndex === 0,
                  }
                )}
                style={{
                  minWidth: "230px",
                  width: "230px",
                }}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
