import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { memo } from "react";
import { TableHead } from "@/components/ui/table";

export interface ISortableHeader {
  label: string;
  column: "stars" | "updated" | "full_name";
  sort: string;
  order: string;
  onSort: (column: "stars" | "updated" | "full_name") => void;
  align?: "left" | "center" | "right";
}

const SortableHeader = ({
  label,
  column,
  sort,
  order,
  onSort,
  align = "center",
}: ISortableHeader) => {
  const Icon = () => {
    if (sort !== column)
      return (
        <ArrowUpDown
          data-testid="icon-default"
          className="inline w-4 h-4 text-black"
        />
      );
    return order === "asc" ? (
      <ArrowDown data-testid="icon-asc" className="inline w-4 h-4 text-black" />
    ) : (
      <ArrowUp data-testid="icon-desc" className="inline w-4 h-4 text-black" />
    );
  };

  return (
    <TableHead
      onClick={() => onSort(column)}
      className={`cursor-pointer select-none text-${align}`}
    >
      {label} <Icon />
    </TableHead>
  );
};

export default memo(SortableHeader);
