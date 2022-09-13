import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmERm7fI6ZYx3sTZ7IbeHTwLTLYFO8X3k",
    authDomain: "messanger-app-ts.firebaseapp.com",
    databaseURL: "https://messanger-app-ts-default-rtdb.firebaseio.com",
    projectId: "messanger-app-ts",
    storageBucket: "messanger-app-ts.appspot.com",
    messagingSenderId: "376235703677",
    appId: "1:376235703677:web:8d69f8ed5e00a59f596014"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
