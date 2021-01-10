import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;
        background-color: ${({theme}) => theme.colors.purple}
    }

    body {
        font-family: Montserrat, sans-serif;
    }
`

export default GlobalStyles
