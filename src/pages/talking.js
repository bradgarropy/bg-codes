import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import SocialBar from "components/SocialBar"
import Video from "components/Video"

const TalkingPage = () => {
    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <Background />

            <Video
                size="big"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <SocialBar />
        </>
    )
}

export default TalkingPage
