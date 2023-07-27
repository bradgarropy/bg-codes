import Layout from "components/Layout"
import {render, screen} from "@testing-library/react"

test("shows layout", () => {
    render(
        <Layout>
            <p>test</p>
        </Layout>,
    )

    expect(screen.getByText("test"))
})
