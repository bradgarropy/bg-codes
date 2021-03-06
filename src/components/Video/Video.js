import PropTypes from "prop-types"
import styled from "styled-components"

const VideoWrapper = styled.div`
    width: ${({width}) => width};
    box-sizing: content-box;
    border: 1.8rem solid ${({theme}) => theme.colors.white};
    box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow};

    &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: 56.25%;
    }
`

const Video = ({width = "68.75vw", children, ...props}) => {
    return (
        <VideoWrapper width={width} {...props}>
            {children}
        </VideoWrapper>
    )
}

Video.propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
}

export default Video
