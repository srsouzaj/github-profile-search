import {
  TableHeader as Header,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { useUsersContext } from "@/context/users.context";
import { ArrowUpDown } from "lucide-react";

export function TableHeader() {
  const { handleSort, sort } = useUsersContext();
  return (
    <Header>
      <TableRow className="bg-gray-300">
        <TableHead
          onClick={() => handleSort("full_name")}
          className="cursor-pointer select-none rounded-tl-md"
        >
          Nome{" "}
          <ArrowUpDown
            className={`inline w-4 h-4 ${
              sort === "full_name" ? "text-red-500" : "text-black"
            }`}
          />
        </TableHead>

        <TableHead
          onClick={() => handleSort("stars")}
          className="cursor-pointer w-20 text-center select-none"
        >
          Estrelas{" "}
          <ArrowUpDown
            className={`inline w-4 h-4 ${
              sort === "stars" ? "text-red-500" : "text-black"
            }`}
          />
        </TableHead>

        <TableHead
          onClick={() => handleSort("updated")}
          className="cursor-pointer text-right w-28 select-none rounded-tr-md"
        >
          Atualizado{" "}
          <ArrowUpDown
            className={`inline w-4 h-4 ${
              sort === "updated" ? "text-red-500" : "text-black"
            }`}
          />
        </TableHead>
      </TableRow>
    </Header>
  );
}
