import "modern-normalize/modern-normalize.css"
import "regenerator-runtime/runtime"

import Navigation from "components/Navigation"
import {AuthProvider, StreamProvider} from "context"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import GlobalStyles from "styles/GlobalStyles"
import theme from "styles/theme"

const LayoutWrapper = styled.div`
    height: 100vh;
    width: 100vw;
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <AuthProvider>
            <StreamProvider>
                <LayoutWrapper>
                    <GlobalStyles />
                    <Navigation />
                    {children}
                </LayoutWrapper>
            </StreamProvider>
        </AuthProvider>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
