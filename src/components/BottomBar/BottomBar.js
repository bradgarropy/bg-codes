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
    grid-auto-flow: column;
    justify-content: space-between;
`

// const Donate = styled.span`
//     font-size: 3.2rem;
// `

const BottomBar = () => {
    return (
        <BottomBarWrapper>
            <Socials />
            {/* <Donate>!extralife</Donate> */}
        </BottomBarWrapper>
    )
}

export default BottomBar
