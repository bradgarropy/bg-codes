import "firebaseui/dist/firebaseui.css"

import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import * as firebaseui from "firebaseui"
import styled from "styled-components"
import firebase from "utils/firebase"

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
    const uiConfig = {
        signInSuccessUrl: "/admin",
        signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    }

    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start("#firebaseui-auth-container", uiConfig)

    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <Background />
            <Login id="firebaseui-auth-container"></Login>
        </>
    )
}

export default LoginPage
