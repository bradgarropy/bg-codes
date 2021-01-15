import userEvent from "@testing-library/user-event"
import Admin from "components/Admin"
import {useStream} from "hooks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")

const mockStreamCtx = {
    stream: {id: "123", title: "title", guest: "guest"},
    readStream: jest.fn(),
    updateStream: jest.fn(),
}

useStream.mockReturnValue(mockStreamCtx)

test("shows stream", () => {
    render(<Admin />)

    const titleInput = screen.getByLabelText("title")
    const guestInput = screen.getByLabelText("guest")

    expect(titleInput).toHaveDisplayValue(mockStreamCtx.stream.title)
    expect(guestInput).toHaveDisplayValue(mockStreamCtx.stream.guest)
})

test("updates stream", () => {
    render(<Admin />)

    const newStream = {title: "newTitle", guest: "newGuest"}

    const titleInput = screen.getByLabelText("title")
    const guestInput = screen.getByLabelText("guest")

    expect(titleInput).toHaveDisplayValue(mockStreamCtx.stream.title)
    expect(guestInput).toHaveDisplayValue(mockStreamCtx.stream.guest)

    userEvent.clear(titleInput)
    userEvent.clear(guestInput)

    userEvent.type(titleInput, newStream.title)
    userEvent.type(guestInput, newStream.guest)

    expect(titleInput).toHaveDisplayValue(newStream.title)
    expect(guestInput).toHaveDisplayValue(newStream.guest)

    userEvent.click(screen.getByText("save"))

    expect(mockStreamCtx.updateStream).toHaveBeenCalledTimes(1)

    expect(mockStreamCtx.updateStream).toHaveBeenCalledWith(
        mockStreamCtx.stream.id,
        {
            id: mockStreamCtx.stream.id,
            title: newStream.title,
            guest: newStream.guest,
        },
    )
})
