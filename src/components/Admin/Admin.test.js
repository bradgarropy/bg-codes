import Admin from "components/Admin"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Admin />)
    expect(screen.getByText("Admin"))
})
