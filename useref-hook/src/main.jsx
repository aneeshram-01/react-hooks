import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import App1 from "./App1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <App />
      <div style={{ marginTop: "20px" }}>
        <App1 />
      </div>
    </div>
  </StrictMode>
);
