import {render, screen} from "@testing-library/react"
import Icon from "components/Icon"

const icons = ["github", "instagram", "twitter", "youtube"]

test("shows icons", () => {
    icons.forEach(icon => {
        render(<Icon icon={icon} />)
        expect(screen.getByLabelText(icon))
    })
})
