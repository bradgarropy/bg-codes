import {render, screen} from "@testing-library/react"
import SocialLink from "components/SocialLink"

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
