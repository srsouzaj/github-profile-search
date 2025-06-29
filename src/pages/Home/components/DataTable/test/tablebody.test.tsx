import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, type Mock } from "vitest";
import TableBody from "../components/TableBody";

import { useUsersContext } from "@/context/users.context";
import { useNavigate } from "react-router-dom";

vi.mock("@/context/users.context");
vi.mock("react-router-dom");

const mockedUseUsersContext = useUsersContext as Mock;
const mockedUseNavigate = useNavigate as Mock;

describe("TableBody", () => {
  const navigateMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseNavigate.mockReturnValue(navigateMock);
  });

  it("renders loading state when isLoadingRepositories is true", () => {
    mockedUseUsersContext.mockReturnValue({
      isLoadingRepositories: true,
      sortedRepos: [],
    });

    render(<TableBody />);

    expect(screen.getByText(/Carregando/i)).toBeInTheDocument();
    expect(screen.getByRole("row")).toBeInTheDocument();
  });

  it("renders list of repositories when sortedRepos has items", () => {
    const repos = [
      {
        id: 1,
        name: "repo1",
        stargazers_count: 10,
        updated_at: "2023-01-01T00:00:00Z",
        owner: { login: "user1" },
      },
      {
        id: 2,
        name: "repo2",
        stargazers_count: 20,
        updated_at: "2023-02-01T00:00:00Z",
        owner: { login: "user2" },
      },
    ];

    mockedUseUsersContext.mockReturnValue({
      isLoadingRepositories: false,
      sortedRepos: repos,
    });

    render(<TableBody />);

    expect(screen.getByText("repo1")).toBeInTheDocument();
    expect(screen.getByText("repo2")).toBeInTheDocument();

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();

    const date1 = new Date("2023-01-01T00:00:00Z").toLocaleDateString("pt-BR");
    const date2 = new Date("2023-02-01T00:00:00Z").toLocaleDateString("pt-BR");

    expect(screen.getByText(date1)).toBeInTheDocument();
    expect(screen.getByText(date2)).toBeInTheDocument();
  });

  it("renders empty state message when sortedRepos is empty and not loading", () => {
    mockedUseUsersContext.mockReturnValue({
      isLoadingRepositories: false,
      sortedRepos: [],
    });

    render(<TableBody />);

    expect(
      screen.getByText(/Nenhum repositório encontrado/i)
    ).toBeInTheDocument();
  });

  it("calls navigate with correct URL when clicking a row", () => {
    const repos = [
      {
        id: 1,
        name: "repo1",
        stargazers_count: 10,
        updated_at: "2023-01-01T00:00:00Z",
        owner: { login: "user1" },
      },
    ];

    mockedUseUsersContext.mockReturnValue({
      isLoadingRepositories: false,
      sortedRepos: repos,
    });

    render(<TableBody />);

    const row = screen.getByText("repo1").closest("tr");
    expect(row).toBeTruthy();

    if (row) {
      fireEvent.click(row);
    }

    expect(navigateMock).toHaveBeenCalledWith("/repository/user1/repo1");
  });
});
