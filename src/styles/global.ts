import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['yellow-dark']};
  }

body {
       background: ${props => props.theme['background']};
       color:${props => props.theme['gray-300']};
       -webkit-font-smoothing: antialiased;
     }

body, input, textarea, button {
  font-family: "Roboto", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  font-variation-settings:
    "wdth" 100;
}
`;