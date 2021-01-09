import SocialLink from "components/SocialLink"
import {render, screen} from "test-utils/render"

const platforms = ["github", "instagram", "twitter", "youtube"]

test("shows social links", () => {
    platforms.forEach(platform => {
        render(<SocialLink platform={platform} />)

        expect(screen.getByLabelText(platform).parentElement).toHaveAttribute(
            "href",
            `https://${platform}.com/bradgarropy`,
        )
    })
})
