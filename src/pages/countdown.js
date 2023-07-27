import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import Countdown from "components/Countdown"
import styled from "styled-components"

const ContentWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: grid;
    grid-template-columns: 40fr 60fr;
    align-items: center;
`

const Hero = styled.div`
    display: grid;
    justify-items: center;
`

const Tagline = styled.span`
    text-transform: uppercase;
    font-size: 12.5rem;
    background-color: ${({theme}) => theme.colors.white};
    padding: 0 4rem;
    transform: skew(-3deg, -3deg);
`

const StartingSoon = styled.div`
    h1 {
        margin: 0rem 0rem 2rem 0rem;
        color: ${({theme}) => theme.colors.white};
        text-shadow: rgb(0, 0, 0) 0.75rem 0.75rem 0rem;
        font-size: 14rem;
        text-transform: uppercase;
    }
`

const CountdownPage = () => {
    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <Background />

            <ContentWrapper>
                <Hero>
                    <img src="/bg.png" alt="bg" />
                    <Tagline>codes</Tagline>
                </Hero>

                <StartingSoon>
                    <h1>starting soon</h1>
                    <Countdown className="ml-44 w-[calc(100%-11rem)]" />
                </StartingSoon>
            </ContentWrapper>
        </>
    )
}

export default CountdownPage
