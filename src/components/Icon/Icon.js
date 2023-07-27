import PropTypes from "prop-types"
import Github from "svg/github.svg"
import Instagram from "svg/instagram.svg"
import Twitter from "svg/twitter.svg"
import Youtube from "svg/youtube.svg"

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

    return (
        <span className="h-10" aria-label={icon}>
            {component}
        </span>
    )
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default Icon
