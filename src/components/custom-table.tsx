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
    <Table className="table-fixed w-full">
      <TableHeader className="bg-background-tertiary h-[60px]">
        <TableRow className="border-none text-white hover:bg-transparent">
          {header.map((cell, index) => (
            <TableHead
              key={cell.toString()}
              className={cn(
                "px-7 text-white text-sm font-extrabold uppercase w-1/3",
                {
                  "text-left": index === 0,
                }
              )}
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
                  "px-7 text-white text-[13px] font-medium font-manrope tracking-[0em] border-none w-1/3",
                  {
                    "text-left": cellIndex === 0,
                  }
                )}
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
