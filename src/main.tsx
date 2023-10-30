import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./router/router.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
)
