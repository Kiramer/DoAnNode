import React from "react";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = ({ data }) => {
  return (
    <div className="popular">
      <h1>SẢN PHẨM NỔI BẬT</h1>
      <hr />
      <div className="popular-item">
        {data.map((item) => {
          return (
            <Item
              key={item._id}
              id={item._id}
              image={item.images}
              name={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
