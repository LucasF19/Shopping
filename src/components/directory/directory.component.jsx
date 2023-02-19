import React from "react";

import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss"

const Directory = ({ list }) => {

  return (
    <div className="categories-container">
      {list.map((value) => {
        return <CategoryItem key={value.title} list={value} />;
      })}
    </div>
  );
};

export default Directory;
