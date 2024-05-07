import React, { useState } from "react";
import './ShopHeader.css'
import logo from '../../assets/images/logo.png';
import cart_icon from '../../assets/images/cart_icon.png';

const Navbar = () =>{
    const[menu, setMenu] = useState("home");

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Văn phòng phẩm logo" />
                <p>VĂN PHÒNG PHẨM</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}>Home{menu ==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}>Contact{ menu==="contact"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("danhmuc")}}>Danh mục{ menu==="danhmuc"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>

    )
}

export default Navbar;