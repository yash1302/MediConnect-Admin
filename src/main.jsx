import { createRoot } from "react-dom/client";
import "./index.css";
import UserContextProvider from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </>
);
