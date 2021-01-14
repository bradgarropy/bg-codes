import {useFirebaseUI} from "hooks"
import styled from "styled-components"

const StyledLogin = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    row-gap: 3rem;
    font-size: 3rem;
`

const Login = () => {
    useFirebaseUI()

    return <StyledLogin id="firebaseui" data-testid="firebaseui"></StyledLogin>
}

export default Login
