import {render, screen} from "@testing-library/react"
import Layout from "components/Layout"

test("shows layout", () => {
    render(
        <Layout>
            <p>test</p>
        </Layout>,
    )

    expect(screen.getByText("test"))
})
