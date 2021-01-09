import Background from "components/Background"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Background />)
    expect(screen.getByText("Background"))
})
