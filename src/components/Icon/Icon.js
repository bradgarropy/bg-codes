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
    let component

    switch (icon) {
        case "github":
            component = <Github />
            break

        case "instagram":
            component = <Instagram />
            break

        case "twitter":
            component = <Twitter />
            break

        case "youtube":
            component = <Youtube />
            break
    }

    return <IconWrapper aria-label={icon}>{component}</IconWrapper>
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default Icon
