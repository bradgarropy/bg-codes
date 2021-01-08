import Icon from "components/Icon"
import styled from "styled-components"

const SocialsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 2.8rem;
    justify-content: start;
    align-items: center;
`

const SocialIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: start;
    align-items: center;
    column-gap: 1.4rem;
`

const Handle = styled.span`
    font-size: 3.2rem;
    font-family: Montserrat, sans-serif;
`

const Socials = () => {
    return (
        <SocialsWrapper>
            <SocialIcons>
                <Icon icon={"instagram"} />
                <Icon icon={"twitter"} />
                <Icon icon={"youtube"} />
                <Icon icon={"github"} />
            </SocialIcons>

            <Handle>@bradgarropy</Handle>
        </SocialsWrapper>
    )
}

export default Socials
