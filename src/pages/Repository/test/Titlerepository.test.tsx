import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TitleRepository from "../components/titleRepository";
import { mockRepo as baseMockRepo } from "./mocks/test";

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe("TitleRepository", () => {
  it("should render repo name, description and homepage link correctly", () => {
    const mockRepo = {
      ...baseMockRepo,
      homepage: "https://meusite.com",
    };

    renderWithRouter(<TitleRepository repo={mockRepo} />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("repo-teste");

    expect(
      screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === "p" &&
          content.includes("Descrição do repositório")
        );
      })
    ).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("https://meusite.com");
    expect(link).toHaveAttribute("href", "https://meusite.com");
  });

  it("should render fallback texts when fields are missing", () => {
    const emptyRepo = {
      ...baseMockRepo,
      name: "",
      description: "  ",
      homepage: "",
    };

    renderWithRouter(<TitleRepository repo={emptyRepo} />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("Não informado");

    const descricao = screen.getByTestId("repo-description");
    expect(descricao).toHaveTextContent("Descrição do projeto: Não informado");

    const homepage = screen.getByTestId("repo-homepage");
    expect(homepage).toHaveTextContent("Página do projeto: Não informado");

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
