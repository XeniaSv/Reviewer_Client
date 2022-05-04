import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBa9lgRAXhafQqxo2FSa9CGIScrVcASJgU",
    authDomain: "projectitransition-6eb3d.firebaseapp.com",
    projectId: "projectitransition-6eb3d",
    storageBucket: "projectitransition-6eb3d.appspot.com",
    messagingSenderId: "683867165858",
    appId: "1:683867165858:web:29fa1ea5dd0f1e9bdf73fb",
    measurementId: "G-CZ221Q7XF4"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;