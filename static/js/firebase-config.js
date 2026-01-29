import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDx7LL8L8pwy9lnYVCJIpIBFDukx5Ew6kE",
    authDomain: "mediahoster-23e99.firebaseapp.com",
    projectId: "mediahoster-23e99",
    storageBucket: "mediahoster-23e99.firebasestorage.app",
    messagingSenderId: "789676520979",
    appId: "1:789676520979:web:8d45983176507669fb31e6",
    measurementId: "G-MBT3MK36CV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
