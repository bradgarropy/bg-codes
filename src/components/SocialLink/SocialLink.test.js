import SocialLink from "components/SocialLink"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<SocialLink />)
    expect(screen.getByText("SocialLink"))
})
