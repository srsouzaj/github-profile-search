import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tags from "..";

describe("Tags Component", () => {
  it("should render the description text correctly", () => {
    const description = "React";
    render(<Tags description={description} />);
    expect(screen.getByText(description)).toBeDefined();
  });

  it("should render the Code icon", () => {
    render(<Tags description="Test" />);
    const svgElement = document.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
  });
});
