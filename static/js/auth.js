import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: window.FIREBASE_CONFIG.apiKey,
    authDomain: window.FIREBASE_CONFIG.authDomain,
    projectId: window.FIREBASE_CONFIG.projectId,
    storageBucket: window.FIREBASE_CONFIG.storageBucket,
    messagingSenderId: window.FIREBASE_CONFIG.messagingSenderId,
    appId: window.FIREBASE_CONFIG.appId,
    measurementId: window.FIREBASE_CONFIG.measurementId
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log("Firebase initialized successfully!");

document.getElementById('signInForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
        alert('Welcome back! 🎉');
    } catch (error) {
        console.error('Error signing in:', error);
        alert('Error: ' + error.message);
    }
});

document.getElementById('googleSignIn').addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log('Google sign in successful:', result.user);
        alert('Welcome! 🎉');
    } catch (error) {
        console.error('Error with Google sign in:', error);
        alert('Error: ' + error.message);
    }
});

document.getElementById('githubSignIn').addEventListener('click', async () => {
    const provider = new GithubAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log('GitHub sign in successful:', result.user);
        alert('Welcome! 🎉');
    } catch (error) {
        console.error('Error with GitHub sign in:', error);
        alert('Error: ' + error.message);
    }
});
