import SocialBar from "components/SocialBar"
import styled from "styled-components"

const Talking = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
`

const TalkingPage = () => {
    return (
        <Talking>
            <div></div>
            <SocialBar />
        </Talking>
    )
}

export default TalkingPage
