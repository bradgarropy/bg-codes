import Background from "components/Background"
import styled from "styled-components"

const Hero = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

const BRBPage = () => {
    return (
        <>
            <Background />

            <Hero>
                <img src="/bg.png" alt="bg" />
                <Tagline>codes</Tagline>
            </Hero>
        </>
    )
}

export default BRBPage
