import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;
        background-color: ${({theme}) => theme.colors.purple}
    }
`

export default GlobalStyles
