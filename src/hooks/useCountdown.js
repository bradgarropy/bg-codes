import PropTypes from "prop-types"
import {useEffect, useRef, useState} from "react"

const calculateInitialTime = ({minutes, seconds}) => {
    const initialMinutes = minutes * 60 * 1000
    const initialSeconds = seconds * 1000
    const initialTime = initialMinutes + initialSeconds

    return initialTime
}

const calculateRemainingMinutes = remainingTime =>
    Math.floor(remainingTime / (60 * 1000))

const calculateRemainingSeconds = remainingTime =>
    Math.floor((remainingTime / 1000) % 60)

const useCountdown = ({minutes = 0, seconds = 0}) => {
    const id = useRef()

    const [remainingTime, setRemainingTime] = useState(
        calculateInitialTime({minutes, seconds}),
    )

    useEffect(() => {
        id.current = setInterval(calculateRemainingTime, 1000)
        return () => clearInterval(id.current)
    }, [])

    const calculateRemainingTime = () => {
        setRemainingTime(time => {
            if (time - 1000 <= 0) {
                clearInterval(id.current)
                return 0
            }

            return time - 1000
        })
    }

    const countdown = {
        minutes: calculateRemainingMinutes(remainingTime),
        seconds: calculateRemainingSeconds(remainingTime),
    }

    return countdown
}

useCountdown.propTypes = {
    minutes: PropTypes.number,
    seconds: PropTypes.number,
}

export default useCountdown
