import Video from "components/Video"
import {render, screen} from "test-utils/render"

test("shows video", () => {
    render(<Video>testing</Video>)
    expect(screen.getByText("testing"))
})
