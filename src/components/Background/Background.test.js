import Background from "components/Background"
import {render, screen} from "test-utils/render"

test("shows background", () => {
    render(<Background />)
    expect(screen.getByAltText("liquid"))
})
