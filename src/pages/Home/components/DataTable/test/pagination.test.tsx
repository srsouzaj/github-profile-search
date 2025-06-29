import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, beforeEach, expect, type Mock } from "vitest";

import { useUsersContext } from "@/context/users.context";
import Pagination from "../components/Pagination";

vi.mock("@/context/users.context");

const mockedUseUsersContext = useUsersContext as unknown as Mock;

describe("Pagination component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render texts based on context data", () => {
    mockedUseUsersContext.mockReturnValue({
      user: { public_repos: 42 },
      page: 2,
      totalPages: 5,
      hasNextPage: true,
      hasPrevPage: true,
      changePage: vi.fn(),
    });

    render(<Pagination />);

    expect(screen.getByText(/Total de repositórios: 42/i)).toBeInTheDocument();
    expect(screen.getByText(/Total de páginas: 2\/5/i)).toBeInTheDocument();
  });

  it('should disable "Previous" button when hasPrevPage is false', () => {
    mockedUseUsersContext.mockReturnValue({
      user: { public_repos: 10 },
      page: 1,
      totalPages: 3,
      hasNextPage: true,
      hasPrevPage: false,
      changePage: vi.fn(),
    });

    render(<Pagination />);
    expect(screen.getByRole("button", { name: /anterior/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /próximo/i })).toBeEnabled();
  });

  it('should call changePage("next") when "Next" button is clicked', () => {
    const mockChangePage = vi.fn();

    mockedUseUsersContext.mockReturnValue({
      user: { public_repos: 100 },
      page: 3,
      totalPages: 10,
      hasNextPage: true,
      hasPrevPage: true,
      changePage: mockChangePage,
    });

    render(<Pagination />);
    const nextButton = screen.getByRole("button", { name: /próximo/i });

    fireEvent.click(nextButton);
    expect(mockChangePage).toHaveBeenCalledWith("next");
  });

  it('should call changePage("prev") when "Previous" button is clicked', () => {
    const mockChangePage = vi.fn();

    mockedUseUsersContext.mockReturnValue({
      user: { public_repos: 100 },
      page: 3,
      totalPages: 10,
      hasNextPage: true,
      hasPrevPage: true,
      changePage: mockChangePage,
    });

    render(<Pagination />);
    const prevButton = screen.getByRole("button", { name: /anterior/i });

    fireEvent.click(prevButton);
    expect(mockChangePage).toHaveBeenCalledWith("prev");
  });
});
