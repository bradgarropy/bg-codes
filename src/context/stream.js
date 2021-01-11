import firebase from "gatsby-plugin-firebase"
import PropTypes from "prop-types"
import {createContext, useEffect, useState} from "react"

const StreamContext = createContext()

const StreamProvider = ({children}) => {
    const [stream, setStream] = useState()

    useEffect(() => {
        readStream()
    }, [])

    const readStream = async () => {
        const snapshot = await firebase.firestore().collection("streams").get()
        const stream = snapshot.docs[0].data()

        setStream(stream)
    }

    const context = {
        stream,
    }

    return (
        <StreamContext.Provider value={context}>
            {children}
        </StreamContext.Provider>
    )
}

StreamProvider.propTypes = {
    children: PropTypes.node,
}

export {StreamContext, StreamProvider}
