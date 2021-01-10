import Background from "components/Background"
import Handle from "components/Handle"
import SocialBar from "components/SocialBar"
import Video from "components/Video"
import {useGuest} from "hooks"
import styled from "styled-components"

const Videos = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
`

const HostVideo = styled(Video)`
    border-right: 0.9rem solid ${({theme}) => theme.colors.white};
    clip-path: inset(-20px 0px -20px -20px);
`

const HostHandle = styled(Handle)`
    justify-self: start;
    z-index: 1;
    box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow};
    clip-path: inset(0px -20px -20px -20px);
`

const GuestVideo = styled(Video)`
    border-left: 0.9rem solid ${({theme}) => theme.colors.white};
    clip-path: inset(-20px -20px -20px 0px);
`

const GuestHandle = styled(Handle)`
    justify-self: end;
    z-index: 1;
    box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow};
    clip-path: inset(0px -20px -20px -20px);
`

const InterviewPage = () => {
    const guest = useGuest()

    return (
        <>
            <Background />

            <Videos>
                <HostVideo width="42.1875vw" />
                <HostHandle />

                <GuestVideo width="42.1875vw" />
                <GuestHandle handle={guest} />
            </Videos>

            <SocialBar />
        </>
    )
}

export default InterviewPage
