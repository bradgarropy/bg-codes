import Login from "components/Login"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Login />)
    expect(screen.getByText("Login"))
})
