import BottomBar from "components/BottomBar"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<BottomBar />)
    expect(screen.getByText("BottomBar"))
})
