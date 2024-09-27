import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";

import "./styles/styles.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);