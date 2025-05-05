import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </CartProvider>
  </BrowserRouter>
);
