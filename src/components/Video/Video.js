import PropTypes from "prop-types"

const Video = ({size = "big", className, children}) => {
    return (
        <div
            className={`box-content border-[1.8rem] border-white shadow aspect-video ${
                size === "big" ? "w-[68.75vw]" : "w-[31.25vw]"
            } ${className}`}
        >
            {children}
        </div>
    )
}

Video.propTypes = {
    size: PropTypes.oneOf(["big", "small"]),
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Video
