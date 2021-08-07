import firebase from 'firebase';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBb22KAS-aGhg75gtHQKKfxAp0YFI65EBY',
    authDomain: 'shop-iphone-2de26.firebaseapp.com',
    projectId: 'shop-iphone-2de26',
    storageBucket: 'shop-iphone-2de26.appspot.com',
    messagingSenderId: '839668187552',
    appId: '1:839668187552:web:29baa9b428883b3dcc24c5',
    measurementId: 'G-7RVPZKDVG5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var auth = firebase.auth();
var db = firebase.firestore();

// auth.useEmulator('http://localhost:9099');
// if (window.location.hostname === 'localhost') {
//     db.useEmulator('localhost', '8080');
// }

export { db, auth };
export default firebase;
