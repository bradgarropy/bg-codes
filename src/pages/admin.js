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

            {authCtx.user !== undefined &&
            authCtx.user?.email !== "bradgarropy@gmail.com" ? (
                <Login />
            ) : (
                <Admin />
            )}
        </>
    )
}

export default AdminPage
