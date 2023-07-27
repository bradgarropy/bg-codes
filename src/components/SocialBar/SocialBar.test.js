import {render, screen} from "@testing-library/react"
import SocialBar from "components/SocialBar"

const socials = ["github", "instagram", "twitter", "youtube"]

test("shows social links", () => {
    render(<SocialBar />)

    socials.forEach(social => {
        expect(screen.getByLabelText(social))
    })
})

test("shows handle", () => {
    render(<SocialBar />)
    expect(screen.getByText("@bradgarropy"))
})
