import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import SocialBar from "components/SocialBar"
import Video from "components/Video"
import styled from "styled-components"

const HostVideo = styled(Video)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const TalkingPage = () => {
    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <Background />
            <HostVideo width="68.75vw" />
            <SocialBar />
        </>
    )
}

export default TalkingPage
