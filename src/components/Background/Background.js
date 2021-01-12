import styled from "styled-components"

const BackgroundWrapper = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`

const Background = () => {
    return <BackgroundWrapper src="/liquid.svg" alt="liquid" />
}

export default Background
