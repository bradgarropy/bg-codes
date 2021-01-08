import SocialBar from "components/SocialBar"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<SocialBar />)
    expect(screen.getByText("SocialBar"))
})
