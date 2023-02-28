import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC4D1YUBZqFVpy2-51l41jbmFTlmxMcFxg",
  authDomain: "shopping-delivery-2d185.firebaseapp.com",
  projectId: "shopping-delivery-2d185",
  storageBucket: "shopping-delivery-2d185.appspot.com",
  messagingSenderId: "685528014695",
  appId: "1:685528014695:web:86ea2658d2f828e20a99c2",
};

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

const db = getFirestore()

provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const creactUseDocument = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const snapShot = await getDoc(userDocRef)

  if(!snapShot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log('Erro ao criar o usuário', error.message);
    }

    return userDocRef;
  }
}
