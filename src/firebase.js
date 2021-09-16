import firebase from 'firebase/app';
import 'firebase/auth';

// const app = firebase.initializeApp({
// 	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const app = firebase.initializeApp({
	apiKey: 'AIzaSyD6p3vMrdtsZNB3tCw2npmlQ3Vnmck9ZgM',
	authDomain: 'auth-development-87111.firebaseapp.com',
	projectId: 'auth-development-87111',
	storageBucket: 'auth-development-87111.appspot.com',
	messagingSenderId: '681653467634',
	appId: '1:681653467634:web:74e158dad03a4e6be7136b',
});

export const auth = app.auth();

export default app;
