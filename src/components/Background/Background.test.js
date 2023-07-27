import Background from "components/Background"
import {render, screen} from "@testing-library/react"

test("shows background", () => {
    render(<Background />)
    expect(screen.getByAltText("liquid"))
})
