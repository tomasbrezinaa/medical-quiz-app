import firebase from 'firebase';

// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvqThHntmXXpdpyAVhCulcUsZ2LWZPBn0",
    authDomain: "medical-quiz-app-9d4e7.firebaseapp.com",
    projectId: "medical-quiz-app-9d4e7",
    storageBucket: "medical-quiz-app-9d4e7.appspot.com",
    messagingSenderId: "167733678887",
    appId: "1:167733678887:web:3635f79b7eb2e3fef80f02"
};

// initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire