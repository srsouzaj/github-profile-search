import { vi } from "vitest";

export const mockUsersContext = ({
  user = { public_repos: 0 },
  page = 1,
  totalPages = 1,
  sortedRepos = [],
  isLoadingRepositories = false,
  hasNextPage = false,
  hasPrevPage = false,
  changePage = vi.fn(),
  sort = "full_name",
  order = "asc",
  handleSort = vi.fn(),
} = {}) => ({
  user,
  page,
  totalPages,
  sortedRepos,
  isLoadingRepositories,
  hasNextPage,
  hasPrevPage,
  changePage,
  sort,
  order,
  handleSort,
});
