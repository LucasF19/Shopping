import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./router/home/home.component";
import SignIn from "./router/sign-in/sign-in.component";
import Navigation from "./router/navigation/navigation.component";

const Shop = () => {
  return(
    <h1>Fazendo pedido</h1>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
