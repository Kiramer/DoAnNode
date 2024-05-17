import React, { useContext, useState } from "react";
import "./ShopHeader.css";
import logo from "../../assets/images/logo.png";
import cart_icon from "../../assets/images/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import userImage from "../../assets/images/user.png";
import { CartContext } from "../../context/CartContext";

const ShopHeader = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  const { user, token } = useContext(authContext);
  const { cart } = useContext(CartContext);
  return (
    <div className="navbar">
      <div onClick={() => navigate("/")} className="nav-logo">
        <img src={logo} alt="Văn phòng phẩm logo" />
        <p>VĂN PHÒNG PHẨM</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
            navigate("/");
          }}
        >
          Trang Chủ{menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
            navigate("/contact");
          }}
        >
          Liên hệ{menu === "contact" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("product");
            navigate("/product");
          }}
        >
          Sản phẩm
          {menu === "product" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {token && user ? (
          <Link
            style={{ textDecoration: "none", color: "black", width: "auto" }}
            to={"/profile"}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {user.photo === null ? (
                <img src={userImage} className="img-user" alt="" />
              ) : (
                <img src={user?.photo} className="img-user" alt="" />
              )}

              <h2 style={{ whiteSpace: "nowrap" }}>{user?.name}</h2>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{cart?.length}</div>
      </div>
    </div>
  );
};

export default ShopHeader;
