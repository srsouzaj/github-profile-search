import type { OutUsers } from "@/services/Users/Models";
import type { OutRepos } from "@/services/Repos/Models";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useConsultarRepositorio } from "@/pages/Home/hooks/useConsultarRepos";

interface UserContextData {
  user: OutUsers;
  handleLoggerUser: (value: OutUsers) => void;
  sort: "stars" | "updated" | "full_name";
  order: "asc" | "desc";
  page: number;
  per_page: number;
  totalPages: number;
  changePage: (direction: "next" | "prev") => void;
  handleSort: (column: "stars" | "updated" | "full_name") => void;
  sortedRepos: OutRepos[];
  isLoadingRepositories: boolean;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<OutUsers>({} as OutUsers);
  const [sort, setSort] = useState<"stars" | "updated" | "full_name">("stars");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const per_page = 10;

  const handleLoggerUser = useCallback((value: OutUsers) => {
    setUser(value);
    setPage(1);
  }, []);

  const totalPages = Math.ceil(user.public_repos / per_page);

  const changePage = useCallback((direction: "next" | "prev") => {
    setPage((prev) => {
      if (direction === "next") return prev + 1;
      if (direction === "prev" && prev > 1) return prev - 1;
      return prev;
    });
  }, []);

  const { repositories: repos, isLoadingRepositories } =
    useConsultarRepositorio(user.login, sort, order, page, per_page);

  const sortedRepos = useMemo(() => {
    if (sort === "stars") {
      return [...repos].sort((a, b) =>
        order === "asc"
          ? a.stargazers_count - b.stargazers_count
          : b.stargazers_count - a.stargazers_count
      );
    }
    return repos;
  }, [repos, sort, order]);

  const handleSort = useCallback(
    (column: typeof sort) => {
      if (sort === column) {
        setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
      } else {
        setSort(column);
        setOrder("desc");
        setPage(1);
      }
    },
    [sort]
  );

  const hasNextPage = useMemo(() => {
    return repos.length === per_page;
  }, [repos.length, per_page]);

  const hasPrevPage = useMemo(() => {
    return page > 1;
  }, [page]);

  const value: UserContextData = useMemo(
    () => ({
      user,
      handleLoggerUser,
      sort,
      order,
      page,
      per_page,
      totalPages,
      changePage,
      handleSort,
      sortedRepos,
      isLoadingRepositories,
      hasNextPage,
      hasPrevPage,
    }),
    [
      user,
      handleLoggerUser,
      sort,
      order,
      page,
      per_page,
      totalPages,
      changePage,
      handleSort,
      sortedRepos,
      isLoadingRepositories,
      hasNextPage,
      hasPrevPage,
    ]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUsersContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsersContext must be used within a UserProvider");
  }
  return context;
};
