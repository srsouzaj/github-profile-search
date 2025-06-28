import {
  TableHeader as Header,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { useUsersContext } from "@/context/users.context";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

export function TableHeader() {
  const { handleSort, sort, order } = useUsersContext();
  return (
    <Header>
      <TableRow className="bg-gray-300 hover:bg-gray-300">
        <TableHead
          onClick={() => handleSort("full_name")}
          className="cursor-pointer select-none rounded-tl-md"
        >
          Nome{" "}
          {sort === "full_name" ? (
            order === "asc" ? (
              <ArrowDown
                className="inline w-4 h-4
                   text-black
                    "
              />
            ) : (
              <ArrowUp className="inline w-4 h-4 text-black" />
            )
          ) : (
            <ArrowUpDown
              className="inline w-4 h-4
             text-black
              "
            />
          )}
        </TableHead>

        <TableHead
          onClick={() => handleSort("stars")}
          className="cursor-pointer w-20 text-center select-none"
        >
          Estrelas{" "}
          {sort === "stars" ? (
            order === "asc" ? (
              <ArrowDown
                className="inline w-4 h-4
                   text-black
                    "
              />
            ) : (
              <ArrowUp className="inline w-4 h-4 text-black" />
            )
          ) : (
            <ArrowUpDown
              className="inline w-4 h-4
             text-black
              "
            />
          )}
        </TableHead>

        <TableHead
          onClick={() => handleSort("updated")}
          className="cursor-pointer text-right w-28 select-none rounded-tr-md"
        >
          Atualizado{" "}
          {sort === "updated" ? (
            order === "asc" ? (
              <ArrowDown
                className="inline w-4 h-4
                 text-black
                  "
              />
            ) : (
              <ArrowUp className="inline w-4 h-4 text-black" />
            )
          ) : (
            <ArrowUpDown
              className="inline w-4 h-4
             text-black
              "
            />
          )}
        </TableHead>
      </TableRow>
    </Header>
  );
}
