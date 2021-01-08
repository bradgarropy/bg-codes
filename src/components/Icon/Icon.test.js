import Icon from "components/Icon"
import {render, screen} from "test-utils/render"

const icons = ["github", "instagram", "twitter", "youtube"]

test("shows icons", () => {
    icons.forEach(icon => {
        render(<Icon icon={icon} />)
        expect(screen.getByLabelText(icon))
    })
})
