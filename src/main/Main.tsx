import React from "react";
import ReactDOM from "react-dom/client";
import { Application, ApplicationRoutes } from "@main";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Application>
      <ApplicationRoutes />
    </Application>
  </React.StrictMode>
);
