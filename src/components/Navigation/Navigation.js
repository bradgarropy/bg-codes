import {Link} from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-auto-flow: column;
    column-gap: 2.5rem;
    padding: 5rem 10rem;
    transition: all 100ms ease-out;
    transform: translateY(-10rem);

    &:hover {
        transform: translateY(0rem);
    }
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
    return (
        <StyledNavigation role="navigation">
            <NavigationLink to="/brb">brb</NavigationLink>
            <NavigationLink to="/countdown">countdown</NavigationLink>
            <NavigationLink to="/talking">talking</NavigationLink>
            <NavigationLink to="/sharing">sharing</NavigationLink>
            <NavigationLink to="/coding">coding</NavigationLink>
            <NavigationLink to="/interview">interview</NavigationLink>
            <NavigationLink to="/pairing">pairing</NavigationLink>
        </StyledNavigation>
    )
}

export default Navigation
