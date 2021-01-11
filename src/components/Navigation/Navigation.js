import {Link} from "gatsby"
import {useEffect, useState} from "react"
import styled from "styled-components"

const StyledNavigation = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-auto-flow: column;
    column-gap: 2.5rem;
    padding: 1rem 2rem;
    transition: all 300ms ease-out;
    visibility: ${({show}) => (show ? "visible" : "hidden")};
`

const NavigationLink = styled(Link)`
    font-size: 4rem;
    text-decoration: none;
    color: ${({theme}) => theme.colors.black};

    &:hover {
        text-decoration: underline;
    }
`

const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false)

    const onKeyDown = event => {
        if (event.code === "ControlLeft") {
            setIsVisible(isVisible => !isVisible)
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [])

    return (
        <StyledNavigation role="navigation" show={isVisible}>
            <NavigationLink to="/brb">brb</NavigationLink>
            <NavigationLink to="/talking">talking</NavigationLink>
            <NavigationLink to="/sharing">sharing</NavigationLink>
            <NavigationLink to="/coding">coding</NavigationLink>
            <NavigationLink to="/interview">interview</NavigationLink>
            <NavigationLink to="/pairing">pairing</NavigationLink>
        </StyledNavigation>
    )
}

export default Navigation
