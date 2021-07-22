import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQ8S6U2TD7H1Q3jHMhNFQs76nB0uKOVWQ",
    authDomain: "react-video-auth-8d1d7.firebaseapp.com",
    
    // projectId: "react-video-auth-8d1d7",
    // storageBucket: "react-video-auth-8d1d7.appspot.com",
    // messagingSenderId: "203592570318",
    // appId: "1:203592570318:web:44f328002c9e384b97079f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;