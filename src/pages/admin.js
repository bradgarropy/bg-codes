import "firebaseui/dist/firebaseui.css"

import SEO from "@bradgarropy/gatsby-plugin-seo"
import Admin from "components/Admin"
import Background from "components/Background"
import Login from "components/Login"
import {useAuth} from "hooks"

const AdminPage = () => {
    const authCtx = useAuth()

    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <Background />

            {authCtx.user?.email === undefined && <Login />}

            {authCtx.user?.email !== undefined &&
                authCtx.user.email !== "bradgarropy@gmail.com" && <Login />}

            {authCtx.user?.email !== undefined &&
                authCtx.user.email === "bradgarropy@gmail.com" && <Admin />}
        </>
    )
}

export default AdminPage
