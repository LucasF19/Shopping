import React from "react";
import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categorias = [
    {
      title: "Fast Food",
      imageUrl:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      title: "Doces",
      imageUrl:
        "https://images.unsplash.com/photo-1624683027339-1d9d5414f628?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1408&q=80",
    },
    {
      title: "Massas",
      imageUrl:
        "https://images.unsplash.com/photo-1612892010343-983bfd063dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      title: "Frutos-do-mar",
      imageUrl:
        "https://images.unsplash.com/photo-1571167366136-b57e07761625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
      title: "Sobremesas",
      imageUrl:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  ];

  return (
    <div>
      <Directory list={categorias} />
      <Outlet/>
    </div>
  );
};

export default Home;
