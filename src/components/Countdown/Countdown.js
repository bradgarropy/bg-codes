import useCountdown from "@bradgarropy/use-countdown"
import PropTypes from "prop-types"

const Countdown = props => {
    const countdown = useCountdown({minutes: 5, autoStart: true})
    return (
        <span
            className={`inline-block text-[12.5rem] bg-white py-0 px-16 tabular-nums ${props.className}`}
        >
            {countdown.formatted}
        </span>
    )
}

Countdown.propTypes = {
    className: PropTypes.string,
}

export default Countdown
