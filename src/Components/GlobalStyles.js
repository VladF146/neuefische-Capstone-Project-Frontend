import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0
}

html {
    height: 100vh;
}

body {
    height: 100%;
    font-family: sans-serif;
}

#root, .App {
    height: 100%;
}`;

export default GlobalStyles;
