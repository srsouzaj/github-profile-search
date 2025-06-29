import { render, screen } from "@testing-library/react";
import DetailRepository from "../components/DetailRepository";
import type { OutRepos } from "@/services/Repos/Models";
import { mockRepo } from "./mocks/test";

describe("DetailRepository", () => {
  it("should render all repository details correctly", () => {
    render(<DetailRepository repo={mockRepo} />);

    expect(
      screen.getByText((content) => content.includes("42 estrela"))
    ).toBeInTheDocument();

    const forkLabel = screen.getByText("Fork(s):");
    expect(forkLabel.parentElement).toHaveTextContent("10");

    const watchLabel = screen.getByText((content) => content.includes("watch"));
    expect(watchLabel.parentElement).toHaveTextContent("42");

    const createdParagraph = screen.getByText(/Criado em:/i).closest("p");
    expect(createdParagraph).toBeInTheDocument();
    expect(createdParagraph).toHaveTextContent(/\d{4}/);

    const languageLabel = screen.getByText("Linguagem(ns) principal(is):");
    expect(languageLabel.parentElement).toHaveTextContent("TypeScript");

    mockRepo.topics.forEach((topic) => {
      expect(screen.getByText(topic)).toBeInTheDocument();
    });
  });

  it("should render fallback values when fields are missing", () => {
    const fallbackRepo: OutRepos = {
      ...mockRepo,
      stargazers_count: 0,
      watchers_count: 0,
      forks_count: 0,
      created_at: "",
      language: "",
      topics: [],
    };

    render(<DetailRepository repo={fallbackRepo} />);

    expect(
      screen.getByText((content) => content.includes("0 estrela"))
    ).toBeInTheDocument();

    const forkLabel = screen.getByText("Fork(s):");
    expect(forkLabel.parentElement).toHaveTextContent("0");

    const watchLabel = screen.getByText((content) => content.includes("watch"));
    expect(watchLabel.parentElement).toHaveTextContent("0");

    const createdParagraph = screen
      .getByText((content) => content.includes("Criado em:"))
      .closest("p");
    expect(createdParagraph).toHaveTextContent("Não informado");

    const languageParagraph = screen
      .getByText((content) => content.includes("Linguagem"))
      .closest("p");
    expect(languageParagraph).toHaveTextContent("Não informado");
  });

  it("should not render topics section if topics is empty or undefined", () => {
    const repoWithoutTopics = {
      ...mockRepo,
      topics: [],
    };

    const { container } = render(<DetailRepository repo={repoWithoutTopics} />);
    expect(container.querySelector("span.flex")).toBeNull();
  });
});
