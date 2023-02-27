import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firabase.utils";

const SignIn = () => {

  const logGoogleUser = async () => {
    const result = await signInWithGooglePopup()
    console.log(result);
  }

  return(
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google popUp</button>
    </div>
  );
};

export default SignIn;
