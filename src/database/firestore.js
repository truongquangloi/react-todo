import * as firebase from "firebase";
 
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjl8LIkjHOo0CS39mOSq1fIWDsuJOvYgY",
    authDomain: "fir-a4bff.firebaseapp.com",
    databaseURL: "https://fir-a4bff.firebaseio.com",
    projectId: "fir-a4bff",
    storageBucket: "fir-a4bff.appspot.com",
    messagingSenderId: "851491595278"
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.collection("users").get().then((querySnapshot) => {                
    querySnapshot.forEach((doc) => {      
        var data = doc.data();
        console.log(data);      
    });                 
});    