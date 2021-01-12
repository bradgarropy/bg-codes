import "firebaseui/dist/firebaseui.css"

import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import {useFirebaseUI} from "hooks"
import styled from "styled-components"

const Login = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    row-gap: 3rem;
    font-size: 3rem;
`

const LoginPage = () => {
    useFirebaseUI()

    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <Background />
            <Login id="firebaseui-auth-container"></Login>
        </>
    )
}

export default LoginPage
