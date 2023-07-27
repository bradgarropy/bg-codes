import {render, screen} from "@testing-library/react"
import Background from "components/Background"

test("shows background", () => {
    render(<Background />)
    expect(screen.getByAltText("liquid"))
})
