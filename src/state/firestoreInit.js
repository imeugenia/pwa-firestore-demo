import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyD_HdY-DoyDeJiJaoRhu6yqgSSbuKrqx50',
  authDomain: 'tyto-alba.firebaseapp.com',
  projectId: 'tyto-alba'
})

let db = firebase.firestore()

firebase
  .firestore()
  .enablePersistence()
  .then(() => {
    db = firebase.firestore()
  })


export default db
