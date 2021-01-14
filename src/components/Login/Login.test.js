import Login from "components/Login"
import {useFirebaseUI} from "hooks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
useFirebaseUI.mockReturnValue(null)

test("shows login container", () => {
    render(<Login />)
    expect(screen.getByTestId("firebaseui"))
})
