import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC7aZz3Ajgqn7q1KYxAON1P4WSJyMDlNss",
    authDomain: "movie-app-8b13b.firebaseapp.com",
    projectId: "movie-app-8b13b",
    storageBucket: "movie-app-8b13b.appspot.com",
    messagingSenderId: "761392352094",
    appId: "1:761392352094:web:fe18e417fc0292e3249dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;