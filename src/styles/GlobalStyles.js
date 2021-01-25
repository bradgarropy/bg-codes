import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 800;
        src: url("/montserrat-black.otf") format("opentype")
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: Montserrat, sans-serif;
    }
`

export default GlobalStyles
