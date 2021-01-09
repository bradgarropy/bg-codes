import Layout from "components/Layout"
import {render, screen} from "test-utils/render"

test("shows layout", () => {
    render(
        <Layout>
            <p>test</p>
        </Layout>,
    )

    expect(screen.getByText("test"))
})
