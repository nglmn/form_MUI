import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: 'AIzaSyBp8D9UPpNblzA7SCabqUWCqVd8sH6wcq8',
    authDomain: "mui-react-hook-form.firebaseapp.com",
    projectId: "mui-react-hook-form",
    storageBucket: "mui-react-hook-form.appspot.com",
    messagingSenderId: "832095901242",
    appId: "1:832095901242:web:769797a9dbe77b9dcec703",
    measurementId: "G-Z16W4KEPFG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
        })
        .catch((error) => {
            console.log(error);
        });
}

export default signInWithGoogle;