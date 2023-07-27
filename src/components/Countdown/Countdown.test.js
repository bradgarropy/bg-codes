import Countdown from "components/Countdown"
import {render, screen} from "@testing-library/react"

test("shows countdown", () => {
    render(<Countdown />)

    expect(screen.getByText("05:00"))
    expect(screen.findByText("04:59"))
})
