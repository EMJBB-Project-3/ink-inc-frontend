import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestone';

// web app's firebase config
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestone = firebase.firestore();

export { projectStorage, projectFirestone };