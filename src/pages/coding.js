import SEO from "@bradgarropy/gatsby-plugin-seo"
import BottomBar from "components/BottomBar"
import Video from "components/Video"
import styled from "styled-components"

const HostVideo = styled(Video)`
    position: absolute;
    right: 0;
    bottom: 6rem;
    border-right: none;
    border-bottom: none;
    clip-path: inset(-20px 0px 0px -20px);
    border-top-left-radius: 10rem;
    z-index: 1;
`

const CodingPage = () => {
    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <HostVideo width="31.25vw" />
            <BottomBar />
        </>
    )
}

export default CodingPage
