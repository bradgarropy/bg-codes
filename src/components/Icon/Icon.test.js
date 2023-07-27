import Icon from "components/Icon"
import {render, screen} from "@testing-library/react"

const icons = ["github", "instagram", "twitter", "youtube"]

test("shows icons", () => {
    icons.forEach(icon => {
        render(<Icon icon={icon} />)
        expect(screen.getByLabelText(icon))
    })
})
