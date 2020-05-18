import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyB-2qcehaSCEOSGdH7DhLj-ZFB698RFEtc',
	authDomain: 'ecommerce-900ca.firebaseapp.com',
	databaseURL: 'https://ecommerce-900ca.firebaseio.com',
	projectId: 'ecommerce-900ca',
	storageBucket: 'ecommerce-900ca.appspot.com',
	messagingSenderId: '459562791914',
	appId: '1:459562791914:web:c0b521dcd8aa2d2c2cf893',
	measurementId: 'G-5K06FZ58YR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
