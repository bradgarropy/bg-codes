import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import Countdown from "components/Countdown"

const CountdownPage = () => {
    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />
            <Background />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full grid grid-cols-[40fr_60fr] items-center">
                <div className="grid justify-items-center">
                    <img src="/bg.png" alt="bg" />
                    <span className="uppercase text-[12.5rem] bg-white py-0 px-16 -skew-x-3 -skew-y-3 leading-tight">
                        codes
                    </span>
                </div>

                <div>
                    <h1 className="mb-8 text-[14rem] text-white leading-tight drop-shadow-[black_0.75rem_0.75rem_0rem] uppercase">
                        starting soon
                    </h1>
                    <Countdown className="ml-44 w-[calc(100%-11rem)]" />
                </div>
            </div>
        </>
    )
}

export default CountdownPage
