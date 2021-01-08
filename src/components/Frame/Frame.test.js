import Frame from "components/Frame"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Frame />)
    expect(screen.getByText("Frame"))
})
