import styled from "styled-components"

const FrameWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 68.75vw;
    background-color: ${({theme}) => theme.colors.white};
    border: 1.8rem solid ${({theme}) => theme.colors.white};
    box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow};

    &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: 56.25%;
    }
`

const Video = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Frame = () => {
    return (
        <FrameWrapper>
            <Video />
        </FrameWrapper>
    )
}

export default Frame
