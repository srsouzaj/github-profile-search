type SortOption = "stars" | "updated" | "full_name";
type OrderOption = "asc" | "desc";

export interface InRepo {
  username: string;
  sort?: SortOption;
  order?: OrderOption;
  page?: number;
  per_page?: number;
}
