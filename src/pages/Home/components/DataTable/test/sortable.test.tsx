import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SortableHeader, {
  type ISortableHeader,
} from "../components/TableHeader/SortableHeader";

describe("SortableHeader", () => {
  const baseProps: ISortableHeader = {
    label: "Name",
    column: "full_name",
    sort: "stars",
    order: "asc",
    onSort: vi.fn<(column: "stars" | "updated" | "full_name") => void>(),
  };

  it("should render default icon when not sorted", () => {
    render(
      <SortableHeader
        label="Name"
        column="full_name"
        sort="stars"
        order="asc"
        onSort={vi.fn()}
      />
    );

    expect(screen.getByTestId("icon-default")).toBeInTheDocument();
  });

  it("should render descending arrow when sorted and order is asc", () => {
    render(
      <SortableHeader
        label="Name"
        column="full_name"
        sort="full_name"
        order="asc"
        onSort={vi.fn()}
      />
    );

    expect(screen.getByTestId("icon-asc")).toBeInTheDocument();
  });

  it("should render ascending arrow when sorted and order is desc", () => {
    render(
      <SortableHeader
        label="Name"
        column="full_name"
        sort="full_name"
        order="desc"
        onSort={vi.fn()}
      />
    );

    expect(screen.getByTestId("icon-desc")).toBeInTheDocument();
  });

  it("should call onSort with the correct column when clicked", () => {
    const onSortMock = vi.fn();

    render(
      <SortableHeader
        {...baseProps}
        onSort={onSortMock}
        sort="full_name"
        order="asc"
      />
    );

    const header = screen.getByText(/Name/i);
    fireEvent.click(header);

    expect(onSortMock).toHaveBeenCalledWith("full_name");
  });
});
