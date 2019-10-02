import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZBYkFTdnMmGkivc6gE1ljIpDUNlkzoN0",
    authDomain: "lubna-dbd05.firebaseapp.com",
    databaseURL: "https://lubna-dbd05.firebaseio.com",
    projectId: "lubna-dbd05",
    storageBucket: "",
    messagingSenderId: "653101002387",
    appId: "1:653101002387:web:69629176e59f974622e766",
    measurementId: "G-MJS8061KP5"
  };
  const fire = firebase.initializeApp(config);
  export default fire;