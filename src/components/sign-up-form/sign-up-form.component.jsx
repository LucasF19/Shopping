import React, { useState } from "react";

import { creactUseDocument, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firabase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up-form.style.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  
  const resetFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (password != confirmPassword){
      alert("Senha incorreta!")
      return
    };

    try{
      const { user } =  await createAuthUserWithEmailAndPassword(email, password)
      await creactUseDocument(user, { displayName })

      resetFields()
    } catch(error){
      if(error.code === "auth/email-already-in-use"){
        alert("Email já existe!")
      }

      console.log('Error', error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Não tem uma conta?</h2>
      <span>Cadastre-se com seu email e senha</span>
      <form onSubmit={handleSignIn}>
        <FormInput
          label="Nome"
          required
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label='Email'
          required
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
        label='Senha'
          required
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label='Confirmação de senha'
          required
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
