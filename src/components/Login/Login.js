import {useFirebaseUI} from "hooks"

const Login = () => {
    useFirebaseUI()

    return (
        <form
            className="w-full h-full grid justify-center content-center gap-y-12 text-5xl"
            id="firebaseui"
            data-testid="firebaseui"
        ></form>
    )
}

export default Login
