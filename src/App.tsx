import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {

  return (
    // Não foi criado arquivos de tipagens @types -> styled.d.ts
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

