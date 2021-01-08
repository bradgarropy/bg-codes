import styled from "styled-components"

const FrameWrapper = styled.div`
    height: 99rem;
    width: 176rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.colors.purple};
    border: 1.8rem solid ${({theme}) => theme.colors.white};
    box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow};
`

const Frame = () => {
    return <FrameWrapper></FrameWrapper>
}

export default Frame
