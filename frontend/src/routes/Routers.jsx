import { Routes, Route } from "react-router-dom";
import Admin from "../scenes/Admin/dashboard/index";
import Home from "../scenes/Shop/Home/index";
import ShopCategory from "../scenes/Shop/ShopCategory/index";
import Cart from "../scenes/Shop/Cart/index";
import LoginSignup from "../scenes/Shop/LoginSignup/LoginSignup";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/shopcategory" element={<ShopCategory />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/loginsignup" element={<LoginSignup />} />
    </Routes>
  );
};

export default Routers;
