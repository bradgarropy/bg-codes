import Link from "@bradgarropy/gatsby-link"
import Icon from "components/Icon"
import PropTypes from "prop-types"

const SocialLink = ({platform}) => {
    return (
        <Link
            className="h-[40px] text-black transition-colors duration-300 ease-out hover:text-purple-400"
            to={`https://${platform}.com/bradgarropy`}
        >
            <Icon icon={platform} />
        </Link>
    )
}

SocialLink.propTypes = {
    platform: PropTypes.string.isRequired,
}

export default SocialLink
