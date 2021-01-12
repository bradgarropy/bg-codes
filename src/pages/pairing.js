import SEO from "@bradgarropy/gatsby-plugin-seo"
import BottomBar from "components/BottomBar"
import Handle from "components/Handle"
import Video from "components/Video"
import {useStream} from "hooks"
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

const StyledHandle = styled(Handle)`
    position: absolute;
    top: 0;
    right: 0;
`

const PairingPage = () => {
    const {stream} = useStream()

    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <GuestVideo width="31.25vw">
                <StyledHandle handle={stream?.guest} />
            </GuestVideo>

            <HostVideo width="31.25vw">
                <StyledHandle />
            </HostVideo>

            <BottomBar />
        </>
    )
}

PairingPage.propTypes = {
    location: PropTypes.object,
}

export default PairingPage
