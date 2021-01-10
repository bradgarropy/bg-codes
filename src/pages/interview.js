import Background from "components/Background"
import Handle from "components/Handle"
import SocialBar from "components/SocialBar"
import Video from "components/Video"
import {useGuest} from "hooks"
import styled from "styled-components"

const HostVideo = styled(Video)`
    /* position: absolute;
    top: 50%;
    right: 50%;
    transform: translateY(-50%); */
    border-right: 0.9rem solid ${({theme}) => theme.colors.white};
    clip-path: inset(-20px 0px -20px -20px);
`

const GuestVideo = styled(Video)`
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%); */
    border-left: 0.9rem solid ${({theme}) => theme.colors.white};
    clip-path: inset(-20px -20px -20px 0px);
`

const Videos = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
`

const InterviewPage = () => {
    const guest = useGuest()

    return (
        <>
            <Background />

            <Videos>
                <HostVideo width="42.1875vw" />
                <Handle />

                <GuestVideo width="42.1875vw" />
                <Handle handle={guest} />
            </Videos>

            <SocialBar />
        </>
    )
}

export default InterviewPage
