import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import * as hookModule from "../../../hooks/useConsultarUsuario";
import FormLogin from "..";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const renderWithClient = (ui: React.ReactElement) => {
  const queryClient = createQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

const mockConsultarUsuario = vi.fn();

describe("FormLogin", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(hookModule, "useGithubUser").mockReturnValue({
      consultarUsuario: mockConsultarUsuario,
      isLoadingUsuario: false,
      isErrorusuario: false,
    });
  });

  it("should render the input and the submit button disabled initially", () => {
    renderWithClient(<FormLogin />);
    const input = screen.getByPlaceholderText(/digite o nome do usuário/i);
    const button = screen.getByRole("button", { name: /pesquisar/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should enable the submit button when the input is valid", async () => {
    renderWithClient(<FormLogin />);
    const input = screen.getByPlaceholderText(/digite o nome do usuário/i);
    const button = screen.getByRole("button", { name: /pesquisar/i });

    await userEvent.type(input, "jorgesouza");
    expect(button).toBeEnabled();
  });

  it("should display an error message when submitting with an empty input", async () => {
    const { container } = renderWithClient(<FormLogin />);

    const form = container.querySelector("form");
    fireEvent.submit(form!);

    const errorMessage = await screen.findByTestId("error-message");
    expect(errorMessage).toHaveTextContent(/digite um nome de usuário/i);
  });

  it("should call consultarUsuario with the correct username on submit", async () => {
    renderWithClient(<FormLogin />);
    const input = screen.getByPlaceholderText(/digite o nome do usuário/i);
    const button = screen.getByRole("button", { name: /pesquisar/i });

    await userEvent.type(input, "jorgesouza");
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockConsultarUsuario).toHaveBeenCalledWith("jorgesouza");
      expect(mockConsultarUsuario).toHaveBeenCalledTimes(1);
    });
  });

  it("should show 'Pesquisando' text on the button when isLoadingUsuario is true", () => {
    vi.spyOn(hookModule, "useGithubUser").mockReturnValueOnce({
      consultarUsuario: vi.fn(),
      isLoadingUsuario: true,
      isErrorusuario: false,
    });

    renderWithClient(<FormLogin />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/pesquis/i);
    expect(button).toBeDisabled();
  });
});
