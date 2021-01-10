import Icon from "components/Icon"
import PropTypes from "prop-types"
import styled from "styled-components"

const SocialLinkWrapper = styled.a`
    height: 40px;
    color: ${({theme}) => theme.colors.black};
    transition: all 300ms ease-out;

    &:hover {
        color: ${({theme}) => theme.colors.purple};
    }
`

const SocialLink = ({platform}) => {
    return (
        <SocialLinkWrapper
            href={`https://${platform}.com/bradgarropy`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon icon={platform} />
        </SocialLinkWrapper>
    )
}

SocialLink.propTypes = {
    platform: PropTypes.string.isRequired,
}

export default SocialLink
