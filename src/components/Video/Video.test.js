import Video from "components/Video"
import {render, screen} from "@testing-library/react"

test("shows video", () => {
    render(<Video>testing</Video>)
    expect(screen.getByText("testing"))
})
