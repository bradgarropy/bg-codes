// eslint-disable-next-line simple-import-sort/imports
import firebase from "firebase/app"
import "firebase/firestore"

const config = {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
}

if (typeof window !== "undefined" && !firebase.apps.length) {
    firebase.initializeApp(config)
    firebase.firestore()
}

export default firebase
