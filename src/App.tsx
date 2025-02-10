import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { Product } from "./components/Product/Product";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <Product />
      
      <GlobalStyle />

    </ThemeProvider>
  )
}

