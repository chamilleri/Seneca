import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Quiz } from "./Quiz";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Quiz />
  </StrictMode>
);
