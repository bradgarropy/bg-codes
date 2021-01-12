import {AuthContext} from "context"
import {useContext} from "react"

const useAuth = () => {
    const authCtx = useContext(AuthContext)
    return authCtx
}

export default useAuth
