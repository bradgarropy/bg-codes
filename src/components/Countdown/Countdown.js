import useCountdown from "@bradgarropy/use-countdown"

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

export default Countdown
