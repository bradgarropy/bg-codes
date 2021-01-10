import Navigation from "components/Navigation"
import {render, screen} from "test-utils/render"

const links = ["brb", "talking", "sharing", "coding", "interview", "pairing"]

test("shows navigation", () => {
    render(<Navigation />)

    links.forEach(link => {
        expect(screen.getByText(link)).toHaveAttribute("href", `/${link}`)
    })
})
