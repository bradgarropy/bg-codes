import Socials from "components/Socials"
import styled from "styled-components"

const SocialBarWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 5rem;
    padding: 0 2rem;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow};
    display: grid;
`

const SocialBar = () => {
    return (
        <SocialBarWrapper>
            <Socials />
        </SocialBarWrapper>
    )
}

export default SocialBar
