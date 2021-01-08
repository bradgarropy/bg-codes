import Socials from "components/Socials"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Socials />)
    expect(screen.getByText("Socials"))
})
