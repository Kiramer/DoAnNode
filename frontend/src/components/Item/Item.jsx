import React, { useContext } from "react";
import "./Item.css";
import { Button } from "@mui/material";
import { CartContext } from "../../context/CartContext";

const Item = (props) => {
  const { dispatch } = useContext(CartContext);
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: props,
    });
  };
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">{props.price} VNĐ</div>
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Item;
