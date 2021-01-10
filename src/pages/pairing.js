import BottomBar from "components/BottomBar"
import Video from "components/Video"
import {useGuest} from "hooks"
import PropTypes from "prop-types"
import styled from "styled-components"

const GuestVideo = styled(Video)`
    position: absolute;
    right: 0;
    bottom: 5rem;
    transform: translateY(-100%);
    border-right: none;
    border-bottom: none;
    clip-path: inset(-20px 0px 0px -20px);
    border-top-left-radius: 10rem;
    z-index: 1;
`

const HostVideo = styled(Video)`
    position: absolute;
    right: 0;
    bottom: 5rem;
    border-right: none;
    border-bottom: none;
    clip-path: inset(0px 0px 0px -20px);
    z-index: 1;
`

const Handle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3.6rem;
    background-color: ${({theme}) => theme.colors.white};
    padding: 1.2rem 2.4rem;
`

const PairingPage = () => {
    const guest = useGuest()
    const handle = `@${guest}`

    return (
        <>
            <GuestVideo width="31.25vw">
                <Handle>{handle}</Handle>
            </GuestVideo>

            <HostVideo width="31.25vw">
                <Handle>@bradgarropy</Handle>
            </HostVideo>

            <BottomBar />
        </>
    )
}

PairingPage.propTypes = {
    location: PropTypes.object,
}

export default PairingPage
