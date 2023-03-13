import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4D1YUBZqFVpy2-51l41jbmFTlmxMcFxg",
  authDomain: "shopping-delivery-2d185.firebaseapp.com",
  projectId: "shopping-delivery-2d185",
  storageBucket: "shopping-delivery-2d185.appspot.com",
  messagingSenderId: "685528014695",
  appId: "1:685528014695:web:86ea2658d2f828e20a99c2",
};

const fireBaseApp = initializeApp(firebaseConfig);

const googleProvide = new GoogleAuthProvider();

googleProvide.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvide);
export const signINwithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvide);

const db = getFirestore();

export const creactUseDocument = async (userAuth, additionalInfo = {}) => {
  if (!auth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userDocRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Erro ao criar o usuário", error.message);
    }

    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, passowrd) => {
  if (!email || !passowrd) return;

  return await createUserWithEmailAndPassword(auth, email, passowrd);
};

export const signInAuthUserWithEmailAndPassword = async (email, passowrd) => {
  if (!email || !passowrd) return;

  return await signInWithEmailAndPassword(auth, email, passowrd);
};

export const userSignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
