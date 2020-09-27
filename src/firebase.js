import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiX19p7tFAgs9bhYZPaNKoC4wXtS30leM",
    authDomain: "facebook-clone-7fa6d.firebaseapp.com",
    databaseURL: "https://facebook-clone-7fa6d.firebaseio.com",
    projectId: "facebook-clone-7fa6d",
    storageBucket: "facebook-clone-7fa6d.appspot.com",
    messagingSenderId: "182464156609",
    appId: "1:182464156609:web:928cd85fc4a001d6965540",
    measurementId: "G-4FZ31YW60N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {provider,auth};
export default db;