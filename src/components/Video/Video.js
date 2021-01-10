import PropTypes from "prop-types"
import styled from "styled-components"

const VideoWrapper = styled.div`
    width: ${({width}) => width};
    background-color: ${({theme}) => theme.colors.purple};
    border: 1.8rem solid ${({theme}) => theme.colors.white};
    box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow};

    &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: 56.25%;
    }
`

const Frame = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Video = ({width = "68.75vw", ...props}) => {
    return (
        <VideoWrapper width={width} {...props}>
            <Frame />
        </VideoWrapper>
    )
}

Video.propTypes = {
    width: PropTypes.string,
}

export default Video
