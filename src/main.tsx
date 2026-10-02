import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore: CSS module declarations may be missing in this project setup
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
