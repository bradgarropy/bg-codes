import {useCountdown} from "hooks"
import styled from "styled-components"

const Timer = styled.span`
    display: inline-block;
    font-size: 12.5rem;
    background-color: ${({theme}) => theme.colors.white};
    padding: 0 4rem;
    font-variant-numeric: tabular-nums;
`

const Countdown = props => {
    const countdown = useCountdown({minutes: 5})
    const minutes = countdown.minutes.toString().padStart(2, 0)
    const seconds = countdown.seconds.toString().padStart(2, 0)
    const timer = `${minutes}:${seconds}`

    return <Timer {...props}>{timer}</Timer>
}

export default Countdown
