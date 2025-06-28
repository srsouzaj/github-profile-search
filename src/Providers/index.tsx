import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import queryClient from "./clientProviders";
import { Toaster } from "sonner";
import { UserProvider } from "@/context/users.context";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>{children}</UserProvider>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Providers;
