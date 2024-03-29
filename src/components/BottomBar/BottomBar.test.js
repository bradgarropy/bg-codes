import {render, screen} from "@testing-library/react"
import BottomBar from "components/BottomBar"

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

// test("shows command", () => {
//     render(<BottomBar />)

//     expect(screen.getByText("!extralife"))
// })
