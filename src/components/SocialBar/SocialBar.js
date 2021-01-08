import Socials from "components/Socials"
import styled from "styled-components"

const SocialBarWrapper = styled.div`
    height: 5rem;
    padding-inline: 2rem;
    background-color: ${({theme}) => theme.colors.white};
    justify-self: center;
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
