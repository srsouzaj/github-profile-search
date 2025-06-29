import { memo } from "react";
import { Table } from "@/components/ui/table";
import Pagination from "./components/Pagination";
import { TableHeader } from "./components/TableHeader";
import TableBody from "./components/TableBody";

const DataTable = () => {
  return (
    <div className="w-full flex flex-col justify-between h-full space-y-4">
      <div className="border border-gray-200 rounded-md">
        <Table>
          <TableHeader />
          <TableBody />
        </Table>
      </div>
      <Pagination />
    </div>
  );
};

export default memo(DataTable);
