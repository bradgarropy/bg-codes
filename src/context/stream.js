import PropTypes from "prop-types"
import {createContext, useEffect, useState} from "react"
import firebase from "utils/firebase"

const StreamContext = createContext()

const StreamProvider = ({children}) => {
    const [stream, setStream] = useState()

    useEffect(() => {
        readStream()
    }, [])

    const readStream = async () => {
        const snapshot = await firebase.firestore().collection("streams").get()
        const doc = snapshot.docs[0]

        const stream = {
            id: doc.id,
            ...doc.data(),
        }

        setStream(stream)
        return stream
    }

    const updateStream = async (id, updates) => {
        delete updates.id

        const promise = await firebase
            .firestore()
            .collection("streams")
            .doc(id)
            .update(updates)

        return promise
    }

    const context = {
        stream,
        readStream,
        updateStream,
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
