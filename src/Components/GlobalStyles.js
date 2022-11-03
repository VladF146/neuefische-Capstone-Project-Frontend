import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0
}

html {
    height: 100vh;
    height: -webkit-fill-available;
}

body {
    height: 100%;
    height: -webkit-fill-available;
    font-family: sans-serif;
}

#root, .App {
    height: 100%;
}`;

export default GlobalStyles;
