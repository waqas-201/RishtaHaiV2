"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LenisProvider } from "./LenisProvider";

const queryClient = new QueryClient();
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LenisProvider />

      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

    </>
  );
};

export default Providers;
