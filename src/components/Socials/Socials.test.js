import {render, screen} from "@testing-library/react"
import Socials from "components/Socials"

const socials = ["github", "instagram", "twitter", "youtube"]

test("shows social links", () => {
    render(<Socials />)

    socials.forEach(social => {
        expect(screen.getByLabelText(social))
    })
})

test("shows handle", () => {
    render(<Socials />)
    expect(screen.getByText("@bradgarropy"))
})
