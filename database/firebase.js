import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCMXk59LYJjxX-qou395zjG3mZQApnfrQw",
    authDomain: "react-firebase-fd155.firebaseapp.com",
    projectId: "react-firebase-fd155",
    storageBucket: "react-firebase-fd155.appspot.com",
    messagingSenderId: "341555647851",
    appId: "1:341555647851:web:5aa5e1f9a83aaac9bee82e"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app)

  export default {
    app, 
    db
  }