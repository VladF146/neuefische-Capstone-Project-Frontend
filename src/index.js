import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthenticationContextProvider from './Contexts/AuthenticationContenxt';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthenticationContextProvider>
  </React.StrictMode>,
);
