const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
apiKey: "AIzaSyBKQPvgAk1jiD-IJsKOG5QMaSc7SBOKsRc",
authDomain: "kiei-451-hw7-f7299.firebaseapp.com",
projectId: "kiei-451-hw7-f7299",
storageBucket: "kiei-451-hw7-f7299.appspot.com",
messagingSenderId: "792201063148",
appId: "1:792201063148:web:8e9f3408206db09c8013c9"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase