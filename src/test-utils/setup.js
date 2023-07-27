import "@testing-library/jest-dom"
import "regenerator-runtime/runtime"

process.env.GATSBY_FIREBASE_API_KEY = "testing"
process.env.GATSBY_FIREBASE_AUTH_DOMAIN = "testing"
process.env.GATSBY_FIREBASE_PROJECT_ID = "testing"
process.env.GATSBY_FIREBASE_STORAGE_BUCKET = "testing"
process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID = "testing"
process.env.GATSBY_FIREBASE_APP_ID = "testing"

jest.mock("gatsby", () => {
    const React = require("react")
    const gatsby = jest.requireActual("gatsby")

    return {
        ...gatsby,
        graphql: jest.fn(),
        Link: jest
            .fn()
            .mockImplementation(
                ({
                    activeClassName,
                    activeStyle,
                    getProps,
                    innerRef,
                    partiallyActive,
                    ref,
                    replace,
                    to,
                    ...rest
                }) =>
                    React.createElement("a", {
                        ...rest,
                        href: to,
                    }),
            ),
        StaticQuery: jest.fn(),
        useStaticQuery: jest.fn(),
    }
})
