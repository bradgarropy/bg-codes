import PropTypes from "prop-types"
import {createContext, useState} from "react"
import firebase from "utils/firebase"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    firebase.auth().onAuthStateChanged(user => {
        setUser(user)
    })

    const context = {
        user,
    }

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export {AuthContext, AuthProvider}
