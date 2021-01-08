import BottomBar from "components/BottomBar"
import {render, screen} from "test-utils/render"

test("shows social links", () => {
    render(<BottomBar />)

    expect(screen.getByLabelText("instagram"))
    expect(screen.getByLabelText("twitter"))
    expect(screen.getByLabelText("youtube"))
    expect(screen.getByLabelText("github"))
})

test("shows handle", () => {
    render(<BottomBar />)

    expect(screen.getByText("@bradgarropy"))
})
