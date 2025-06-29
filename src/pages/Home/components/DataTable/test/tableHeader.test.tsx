import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, type Mock } from "vitest";
import { TableHeader } from "../components/TableHeader";
import { useUsersContext } from "@/context/users.context";

vi.mock("@/context/users.context");

const mockedUseUsersContext = useUsersContext as Mock;

describe("TableHeader", () => {
  const mockHandleSort = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    mockedUseUsersContext.mockReturnValue({
      sort: "stars",
      order: "asc",
      handleSort: mockHandleSort,
    });
  });

  it("should render all sortable headers with correct labels", () => {
    render(<TableHeader />);

    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("Estrelas")).toBeInTheDocument();
    expect(screen.getByText("Atualizado")).toBeInTheDocument();
  });

  it("should call handleSort with the correct column when headers are clicked", () => {
    render(<TableHeader />);

    fireEvent.click(screen.getByText("Nome"));
    expect(mockHandleSort).toHaveBeenCalledWith("full_name");

    fireEvent.click(screen.getByText("Estrelas"));
    expect(mockHandleSort).toHaveBeenCalledWith("stars");

    fireEvent.click(screen.getByText("Atualizado"));
    expect(mockHandleSort).toHaveBeenCalledWith("updated");
  });
});
