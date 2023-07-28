import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { quoteApi } from "./services/quotes.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={quoteApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
