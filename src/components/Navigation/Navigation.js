import {Link} from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-auto-flow: column;
    column-gap: 2.5rem;
    padding: 1rem 2rem;
    opacity: 0%;

    &:hover {
        opacity: 100%;
    }
`

const NavigationLink = styled(Link)`
    font-size: 4rem;
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};

    &:hover {
        text-decoration: underline;
    }
`

const Navigation = () => {
    return (
        <StyledNavigation>
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
