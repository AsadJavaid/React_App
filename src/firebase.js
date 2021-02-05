import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDtm2ao6LweuwNM0eA7yeRuPmQ9SEkyGe0",
    authDomain: "react-project-8ab28.firebaseapp.com",
    databaseURL: "https://react-project-8ab28-default-rtdb.firebaseio.com",
    projectId: "react-project-8ab28",
    storageBucket: "react-project-8ab28.appspot.com",
    messagingSenderId: "251567483615",
    appId: "1:251567483615:web:f00b6c67297db24630576a",
    measurementId: "G-40Y946ECVC"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;