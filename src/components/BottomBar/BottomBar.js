import Socials from "components/Socials"
import styled from "styled-components"

const BottomBarWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    padding: 0 2.8rem;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow};
    display: grid;
    align-content: center;
`

const BottomBar = () => {
    return (
        <BottomBarWrapper>
            <Socials />
        </BottomBarWrapper>
    )
}

export default BottomBar
