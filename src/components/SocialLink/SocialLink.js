import Link from "@bradgarropy/gatsby-link"
import Icon from "components/Icon"
import PropTypes from "prop-types"
import styled from "styled-components"

const SocialLinkWrapper = styled(Link)`
    height: 40px;
    color: ${({theme}) => theme.colors.black};
    transition: all 300ms ease-out;

    &:hover {
        color: ${({theme}) => theme.colors.purple};
    }
`

const SocialLink = ({platform}) => {
    return (
        <SocialLinkWrapper to={`https://${platform}.com/bradgarropy`}>
            <Icon icon={platform} />
        </SocialLinkWrapper>
    )
}

SocialLink.propTypes = {
    platform: PropTypes.string.isRequired,
}

export default SocialLink
