import {useEffect} from "react"
import firebase from "utils/firebase"

const useFirebaseUI = () => {
    useEffect(() => {
        const run = async () => {
            const firebaseui = await import("firebaseui")

            const uiConfig = {
                signInSuccessUrl: "/admin",
                signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
            }

            const ui = new firebaseui.auth.AuthUI(firebase.auth())
            ui.start("#firebaseui", uiConfig)
        }

        run()
    }, [])
}

export default useFirebaseUI
