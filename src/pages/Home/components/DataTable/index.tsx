import { memo } from "react";
import { Table } from "@/components/ui/table";
import Pagination from "./components/Pagination";
import { TableHeader } from "./components/TableHeader";
import TableBody from "./components/TableBody";
import { useUsersContext } from "@/context/users.context";

const DataTable = () => {
  const { isLoadingRepositories } = useUsersContext();
  return (
    <div className="w-full flex flex-col justify-between h-full space-y-4">
      <div className="border border-gray-200 rounded-md">
        <Table>
          <TableHeader />
          <TableBody />
        </Table>
      </div>
      {!isLoadingRepositories && <Pagination />}
    </div>
  );
};

export default memo(DataTable);
