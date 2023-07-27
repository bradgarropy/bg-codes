import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"

const BRBPage = () => {
    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <Background />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid justify-items-center">
                <img src="/bg.png" alt="bg" />
                <span className="uppercase text-[12.5rem] bg-white px-16 -skew-x-3 -skew-y-3">
                    codes
                </span>
            </div>
        </>
    )
}

export default BRBPage
