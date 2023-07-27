import "modern-normalize/modern-normalize.css"
import "regenerator-runtime/runtime"

import Navigation from "components/Navigation"
import {AuthProvider, StreamProvider} from "context"
import PropTypes from "prop-types"
import {ThemeProvider} from "styled-components"
import theme from "styles/theme"

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <AuthProvider>
            <StreamProvider>
                <div className="h-screen w-screen">
                    <Navigation />
                    {children}
                </div>
            </StreamProvider>
        </AuthProvider>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
