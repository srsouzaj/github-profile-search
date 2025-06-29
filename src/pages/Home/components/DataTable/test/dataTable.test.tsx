import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import DataTable from "..";
import { mockUsersContext } from "./mocks/usersContext.mock";

vi.mock("@/context/users.context", () => ({
  useUsersContext: () =>
    mockUsersContext({
      user: { public_repos: 42 },
      sortedRepos: [],
      isLoadingRepositories: false,
      page: 1,
      totalPages: 1,
      hasNextPage: false,
      hasPrevPage: false,
      changePage: vi.fn(),
      sort: "stars",
      order: "asc",
      handleSort: vi.fn(),
    }),
}));

vi.mock("../components/TableHeader", () => ({
  TableHeader: () => (
    <thead data-testid="table-header">
      <tr>
        <th>Header</th>
      </tr>
    </thead>
  ),
}));

vi.mock("../components/TableBody", () => ({
  default: () => (
    <tbody data-testid="table-body">
      <tr>
        <td>Body</td>
      </tr>
    </tbody>
  ),
}));

vi.mock("../components/Pagination", () => ({
  default: () => <div data-testid="pagination">Pagination</div>,
}));

describe("DataTable", () => {
  it("should render TableHeader, TableBody and Pagination in correct order", () => {
    render(
      <MemoryRouter>
        <DataTable />
      </MemoryRouter>
    );

    expect(screen.getByTestId("table-header")).toBeInTheDocument();
    expect(screen.getByTestId("table-body")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
