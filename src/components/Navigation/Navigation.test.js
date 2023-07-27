import Navigation from "components/Navigation"
import {render, screen} from "@testing-library/react"

const links = ["brb", "talking", "sharing", "coding"]

test("shows navigation", () => {
    render(<Navigation />)

    links.forEach(link => {
        expect(screen.getByText(link)).toHaveAttribute("href", `/${link}`)
    })
})
