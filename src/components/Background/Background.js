import styled from "styled-components"

const BackgroundWrapper = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Background = () => {
    return <BackgroundWrapper src="/liquid.svg" alt="liquid" />
}

export default Background
