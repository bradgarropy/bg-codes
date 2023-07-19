import useCountdown from "@bradgarropy/use-countdown"
import styled from "styled-components"

const Timer = styled.span`
    display: inline-block;
    font-size: 12.5rem;
    background-color: ${({theme}) => theme.colors.white};
    padding: 0 4rem;
    font-variant-numeric: tabular-nums;
`

const Countdown = props => {
    const countdown = useCountdown({minutes: 5, autoStart: true})
    return <Timer {...props}>{countdown.formatted}</Timer>
}

export default Countdown
