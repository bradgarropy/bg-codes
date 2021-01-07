import PropTypes from "prop-types"
import styled from "styled-components"
import Github from "svg/github.svg"
import Instagram from "svg/instagram.svg"
import Twitter from "svg/twitter.svg"
import Youtube from "svg/youtube.svg"

const IconWrapper = styled.span`
    height: 40px;
`

const Icon = ({icon}) => {
    switch (icon) {
        case "github":
            return (
                <IconWrapper>
                    <Github />
                </IconWrapper>
            )

        case "instagram":
            return (
                <IconWrapper>
                    <Instagram />
                </IconWrapper>
            )

        case "twitter":
            return (
                <IconWrapper>
                    <Twitter />
                </IconWrapper>
            )

        case "youtube":
            return (
                <IconWrapper>
                    <Youtube />
                </IconWrapper>
            )

        default:
            return null
    }
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default Icon
