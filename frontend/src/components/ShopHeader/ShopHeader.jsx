import React, { useState } from "react";
import './ShopHeader.css'
import logo from '../../assets/images/logo.png';
import cart_icon from '../../assets/images/cart_icon.png';
import { Link } from "react-router-dom";

const ShopHeader = () =>{
    const[menu, setMenu] = useState("home");

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Văn phòng phẩm logo" />
                <p>VĂN PHÒNG PHẨM</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link to='/'></Link> Home{menu ==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link to='/'></Link> Contact{ menu==="contact"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("category")}}><Link to ='/shopcategory'></Link>Danh mục{ menu==="category"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to ='/loginsignup'><button>Login</button></Link> 
                <Link to ='/cart'><img src={cart_icon} alt="" /></Link> 
                <div className="nav-cart-count">0</div>
            </div>
        </div>

    )
}

export default ShopHeader;