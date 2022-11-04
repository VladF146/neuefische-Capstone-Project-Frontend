import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthenticationContextProvider from "./Contexts/AuthenticationContenxt";
import { NotesContextProvider } from "./Contexts/NotesContext";
import GlobalStyles from "./Components/GlobalStyles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <NotesContextProvider>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </NotesContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);
