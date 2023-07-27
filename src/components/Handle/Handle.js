import PropTypes from "prop-types"

const Handle = ({handle = "", ...props}) => {
    const mention = `@${handle}`
    return (
        <div
            className="text-[3.6rem] bg-white py-[1.2rem] px-[2.4rem]"
            {...props}
        >
            {mention}
        </div>
    )
}

Handle.propTypes = {
    handle: PropTypes.string,
}

export default Handle
