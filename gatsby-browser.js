import "firebase/firestore"
import "regenerator-runtime/runtime"

import {StreamProvider} from "context"

export const wrapRootElement = ({element}) => (
    <StreamProvider>{element}</StreamProvider>
)
