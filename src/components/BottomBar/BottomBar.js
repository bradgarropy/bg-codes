import Icon from "components/Icon"
import styled from "styled-components"

const BottomBarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: start;
    align-items: center;
    column-gap: 2.8rem;
    padding-inline-start: 2.8rem;
    background-color: white;
    box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow};
`

const SocialIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: start;
    align-items: center;
    column-gap: 1.4rem;
    height: 5rem;
`

const Handle = styled.span`
    font-size: 3.2rem;
    font-family: Montserrat, sans-serif;
`

const BottomBar = () => {
    return (
        <BottomBarWrapper>
            <SocialIcons>
                <Icon icon={"instagram"} />
                <Icon icon={"twitter"} />
                <Icon icon={"youtube"} />
                <Icon icon={"github"} />
            </SocialIcons>

            <Handle>@bradgarropy</Handle>
        </BottomBarWrapper>
    )
}

export default BottomBar
