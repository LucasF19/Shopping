import React from "react";
import { signInWithGooglePopup, creactUseDocument } from "../../utils/firebase/firabase.utils";

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await creactUseDocument(user)
  }

  return(
    <div>
      <h1>Olá</h1>
      <button onClick={logGoogleUser}>Sign in with google popUp</button>
    </div>
  );
};

export default SignIn;
