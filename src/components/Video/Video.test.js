import {render, screen} from "@testing-library/react"
import Video from "components/Video"

test("shows video", () => {
    render(<Video>testing</Video>)
    expect(screen.getByText("testing"))
})
