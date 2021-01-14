import userEvent from "@testing-library/user-event"
import Admin from "components/Admin"
import {useStream} from "hooks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")

const mockStreamCtx = {
    stream: {id: "123", title: "testing", guest: "mrtest"},
    readStream: jest.fn(),
    updateStream: jest.fn(),
}

useStream.mockReturnValue(mockStreamCtx)

test("shows stream", () => {
    render(<Admin />)
    expect(screen.getByDisplayValue("testing"))
    expect(screen.getByDisplayValue("mrtest"))
})

test("updates stream", async () => {
    render(<Admin />)

    userEvent.type(screen.getByLabelText("title"), "new title")
    userEvent.type(screen.getByLabelText("guest"), "newguest")

    userEvent.click(screen.getByText("save"))

    expect(mockStreamCtx.updateStream).toHaveBeenCalledTimes(1)

    expect(mockStreamCtx.updateStream).toHaveBeenCalledWith("123", {
        id: "123",
        title: "new title",
        guest: "newguest",
    })
})
