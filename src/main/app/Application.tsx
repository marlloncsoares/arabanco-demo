import { Env } from "@core/config";
import { SecurityContextProvider } from "@presentation/contexts";
import { DefaultChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const client = new QueryClient();

function Application({ children }: DefaultChildren) {
  return (
    <QueryClientProvider client={client}>
      <SecurityContextProvider>{children}</SecurityContextProvider>
      <ReactQueryDevtools
        initialIsOpen={Env.DEVELOPMENT_MODE === "production" ? true : false}
      />
    </QueryClientProvider>
  );
}

export default Application;
