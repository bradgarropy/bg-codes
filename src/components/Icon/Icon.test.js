import Icon from "components/Icon"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Icon />)
    expect(screen.getByText("Icon"))
})
