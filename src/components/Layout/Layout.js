import "modern-normalize/modern-normalize.css"
import "regenerator-runtime/runtime"

import Navigation from "components/Navigation"
import {AuthProvider, StreamProvider} from "context"
import PropTypes from "prop-types"

const Layout = ({children}) => (
    <AuthProvider>
        <StreamProvider>
            <div className="h-screen w-screen">
                <Navigation />
                {children}
            </div>
        </StreamProvider>
    </AuthProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
