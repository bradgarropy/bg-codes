import "modern-normalize/modern-normalize.css"

import BottomBar from "components/BottomBar"
import Header from "components/Header"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Container from "styles/Container"
import GlobalStyles from "styles/GlobalStyles"
import theme from "styles/theme"

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-family: Montserrat, sans-serif;
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />

            <StyledLayout>
                <Header />
                <Container>{children}</Container>
                <BottomBar />
            </StyledLayout>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
