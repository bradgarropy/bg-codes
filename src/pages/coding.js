import BottomBar from "components/BottomBar"
import Video from "components/Video"
import styled from "styled-components"

const StyledVideo = styled(Video)`
    position: absolute;
    right: 0;
    bottom: 5rem;
    border-right: none;
    border-bottom: none;
    clip-path: inset(-20px 0px 0px -20px);
    border-top-left-radius: 10rem;
    z-index: 1;
`

const coding = () => {
    return (
        <>
            <StyledVideo width="31.25vw" />
            <BottomBar />
        </>
    )
}

export default coding
