import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import UserDetail from "..";

vi.mock("@/context/users.context", () => ({
  useUsersContext: () => ({
    user: {
      avatar_url: "https://example.com/avatar.jpg",
      name: "Jorge Souza",
      login: "jorgesouza",
      html_url: "https://github.com/jorgesouza",
      email: "jorge@example.com",
      followers: 100,
      following: 50,
      bio: "Fullstack developer & React lover",
    },
  }),
}));

describe("UserDetail", () => {
  it("should render user details correctly", () => {
    render(
      <MemoryRouter>
        <UserDetail />
      </MemoryRouter>
    );

    expect(screen.getByText("Jorge Souza")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /@jorgesouza/i })).toHaveAttribute(
      "href",
      "https://github.com/jorgesouza"
    );
    expect(screen.getByText(/jorge@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/100/)).toBeInTheDocument();
    expect(screen.getByText(/50/)).toBeInTheDocument();
    expect(
      screen.getByText(/Fullstack developer & React lover/i)
    ).toBeInTheDocument();
  });
});
