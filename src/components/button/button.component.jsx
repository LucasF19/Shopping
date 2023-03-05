import React from "react";

import "./button.style.scss"

const Button = ({children, buttonType}) => {
  const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
  }

  return(
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  )
};

export default Button;
