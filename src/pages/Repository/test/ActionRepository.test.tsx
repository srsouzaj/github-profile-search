import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import ActionRepository from "../components/ActionRepository";
import * as hookModule from "../hooks/useCopyToClipboard";
import { mockRepo } from "./mocks/test";

vi.mock("../hooks/useCopyToClipboard", () => ({
  useCopyToClipboard: vi.fn(),
}));

describe("ActionRepository", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render GitHub link with correct URL", () => {
    vi.spyOn(hookModule, "useCopyToClipboard").mockReturnValue({
      handleCopy: vi.fn(),
      isCopied: false,
    });

    render(
      <MemoryRouter>
        render(
        <ActionRepository repo={mockRepo} />
        );
      </MemoryRouter>
    );

    const githubLink = screen.getByRole("link", { name: /ver no github/i });
    expect(githubLink).toHaveAttribute("href", mockRepo.html_url);
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("should call handleCopy when 'Copiar' button is clicked", () => {
    const handleCopyMock = vi.fn();
    vi.spyOn(hookModule, "useCopyToClipboard").mockReturnValue({
      handleCopy: handleCopyMock,
      isCopied: false,
    });

    render(
      <MemoryRouter>
        render(
        <ActionRepository repo={mockRepo} />
        );
      </MemoryRouter>
    );

    const copyButton = screen.getByRole("button", {
      name: /copiar link para clonar/i,
    });
    fireEvent.click(copyButton);

    expect(handleCopyMock).toHaveBeenCalledWith(mockRepo.clone_url);
  });

  it("should display 'Copiado' when isCopied is true", () => {
    vi.spyOn(hookModule, "useCopyToClipboard").mockReturnValue({
      handleCopy: vi.fn(),
      isCopied: true,
    });

    render(
      <MemoryRouter>
        <ActionRepository repo={mockRepo} />
      </MemoryRouter>
    );

    expect(screen.getByText(/copiado/i)).toBeInTheDocument();
  });
});
