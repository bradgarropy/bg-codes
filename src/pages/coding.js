import SEO from "@bradgarropy/gatsby-plugin-seo"
import BottomBar from "components/BottomBar"
import Video from "components/Video"

const CodingPage = () => {
    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <Video
                size="small"
                className="absolute right-0 bottom-24 border-r-0 border-b-0 rounded-tl-[10rem] z-10 [clip-path:inset(-20px_0px_0px_-20px)]"
            />
            <BottomBar />
        </>
    )
}

export default CodingPage
