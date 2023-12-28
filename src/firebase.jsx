// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {

  apiKey: "AIzaSyCKgyxwRleKwBwDPhmBWryPuN9QBp82wQI",
  authDomain: "chat-app-b0dfb.firebaseapp.com",
  projectId: "chat-app-b0dfb",
  storageBucket: "chat-app-b0dfb.appspot.com",
  messagingSenderId: "461433275914",
  appId: "1:461433275914:web:f88b6a7cd88e7036f781f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


export const storage = getStorage();
export const db = getFirestore()

//export const storage = getStorage(app);
//export const db = getFirestore(app)


