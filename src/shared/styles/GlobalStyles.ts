import '@fontsource/manrope';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Monument Bold";
  src: url("./public/fonts/MonumentExtendedBold.otf");
}

@font-face {
  font-family: "Monument Regular";
  src: url("./public/fonts/MonumentExtendedRegular.otf");
}

*,*::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62,5%;
}

body {
  font-family: "Manrope", sans-serif;
  /* font-family: "Monument Bold", sans-serif; */
  overflow-x: hidden;
  background: ${(props) => props.theme.body};
  
}

h1,h2,h3,h4,h5 {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}


* {
  scrollbar-width: thin;
  scrollbar-color: #ddd  ${(props) => props.theme.body};;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: ${(props) => props.theme.body};
}

*::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.body};
}

`;
