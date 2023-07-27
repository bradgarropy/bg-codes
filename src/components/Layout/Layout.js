import "modern-normalize/modern-normalize.css"
import "regenerator-runtime/runtime"

import Navigation from "components/Navigation"
import PropTypes from "prop-types"

const Layout = ({children}) => (
    <div className="h-screen w-screen">
        <Navigation />
        {children}
    </div>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
