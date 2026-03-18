import React from "react";
import "./popular.css";
import data_product from "../assets/data.js";
import Item from "../Item/item.jsx";

const Popular = () => {
  return (
    <div className="popular">
      <h1>NEW COLLECTION IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
