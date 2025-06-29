import { TableHeader as Header, TableRow } from "@/components/ui/table";
import { useUsersContext } from "@/context/users.context";
import SortableHeader from "./SortableHeader";

export function TableHeader() {
  const { handleSort, sort, order } = useUsersContext();

  return (
    <Header>
      <TableRow className="bg-gray-300 hover:bg-gray-300">
        <SortableHeader
          label="Nome"
          column="full_name"
          sort={sort}
          order={order}
          onSort={handleSort}
          align="left"
        />
        <SortableHeader
          label="Estrelas"
          column="stars"
          sort={sort}
          order={order}
          onSort={handleSort}
          align="center"
        />
        <SortableHeader
          label="Atualizado"
          column="updated"
          sort={sort}
          order={order}
          onSort={handleSort}
          align="right"
        />
      </TableRow>
    </Header>
  );
}
