import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import { useNavigate } from "react-router-dom";

const Popular = ({ data }) => {
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/productDetail/${id}`);
  };
  return (
    <div className="popular">
      <h1>SẢN PHẨM NỔI BẬT</h1>
      <hr />
      <div className="popular-item">
        {data.slice(0, 6).map((item) => {
          return (
            <Item
              key={item._id}
              id={item._id}
              image={item.images}
              name={item.title}
              price={item.price}
              onClick={() => handleDetail(item._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
