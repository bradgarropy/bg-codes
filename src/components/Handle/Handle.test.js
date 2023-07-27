import Handle from "components/Handle"
import {render, screen} from "@testing-library/react"

test("shows host", () => {
    render(<Handle handle="bradgarropy" />)
    expect(screen.getByText("@bradgarropy"))
})

test("shows guest", () => {
    render(<Handle handle="jamesqquick" />)
    expect(screen.getByText("@jamesqquick"))
})
