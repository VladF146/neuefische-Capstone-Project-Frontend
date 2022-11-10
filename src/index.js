import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthenticationContextProvider from "./Contexts/AuthenticationContext";
import NotesContextProvider from "./Contexts/NotesContext";
import GlobalStyles from "./Components/GlobalStyles";
import App from "./App";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <NotesContextProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <App />
            {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
          </QueryClientProvider>
        </BrowserRouter>
      </NotesContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);
