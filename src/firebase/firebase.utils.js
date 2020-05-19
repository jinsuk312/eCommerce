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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
