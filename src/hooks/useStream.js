import {StreamContext} from "context"
import {useContext} from "react"

const useStream = () => {
    const streamCtx = useContext(StreamContext)
    return streamCtx
}

export default useStream
