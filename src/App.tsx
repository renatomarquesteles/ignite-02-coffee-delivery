import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { CartContextProvider } from "./contexts/CartContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <Toaster
        position="bottom-right"
        toastOptions={{ success: { duration: 5000 } }}
      />
    </ThemeProvider>
  );
};
