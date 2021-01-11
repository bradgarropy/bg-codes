import Navigation from "components/Navigation"
import {fireEvent, render, screen, waitFor} from "test-utils/render"

const links = ["brb", "talking", "sharing", "coding", "interview", "pairing"]

test("toggles navigation", async () => {
    render(<Navigation />)

    const navigation = screen.getByRole("navigation", {hidden: true})
    const control = {key: "Control", code: "ControlLeft"}

    expect(navigation).not.toBeVisible()
    fireEvent.keyDown(navigation, control)

    await waitFor(() => {
        expect(navigation).toBeVisible()
    })

    fireEvent.keyDown(navigation, control)

    await waitFor(() => {
        expect(navigation).not.toBeVisible()
    })
})

test("shows navigation", () => {
    render(<Navigation />)

    links.forEach(link => {
        expect(screen.getByText(link)).toHaveAttribute("href", `/${link}`)
    })
})
