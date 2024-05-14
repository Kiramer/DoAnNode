import { Routes, Route } from "react-router-dom";
import Admin from "../scenes/Admin/dashboard/index";
import Home from "../scenes/Shop/Home/index";
import ShopCategory from "../scenes/Shop/ShopCategory/index";
import Cart from "../scenes/Shop/Cart/index";
import LoginSignup from "../scenes/Shop/LoginSignup/LoginSignup";
import LoginAdmin from "../scenes/Admin/Login/LoginAdmin";
import ProtectedRouter from "./ProtectedRouter";
import LoginClient from "../scenes/Shop/Login/LoginClient";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRouter allowedRoles={"admin"}>
            <Admin />
          </ProtectedRouter>
        }
      />
      <Route path="/shopcategory" element={<ShopCategory />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LoginClient />} />
      <Route path="/register" element={<LoginSignup />} />
      <Route path="/loginadmin" element={<LoginAdmin />} />
    </Routes>
  );
};

export default Routers;
