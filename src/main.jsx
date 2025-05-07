import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <AuthContextProvider>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AcjIDSmwWvBGRAy78gi9bPFdP5-ACLNBT5JGRNdxn7rUtjd3JrOoRdDzWmZSQsaMnnsv0TKrXiY_1RVV",
          }}
        >
          <App />
        </PayPalScriptProvider>
      </AuthContextProvider>
    </CartProvider>
  </BrowserRouter>
);
