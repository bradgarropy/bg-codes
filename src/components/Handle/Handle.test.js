import Handle from "components/Handle"
import {render, screen} from "test-utils/render"

test("shows host", () => {
    render(<Handle />)
    expect(screen.getByText("@bradgarropy"))
})

test("shows guest", () => {
    render(<Handle handle="jamesqquick" />)
    expect(screen.getByText("@jamesqquick"))
})
