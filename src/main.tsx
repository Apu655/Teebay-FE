import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { customThemeConfig } from "@/Config";
import { UserProvider } from "./Context/UserContext.tsx";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={customThemeConfig}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <ApolloProvider client={client}>
          <UserProvider>
            <App />
          </UserProvider>
        </ApolloProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
