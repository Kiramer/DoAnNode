import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import ShopHeader from "../components/ShopHeader/ShopHeader";

const Layout = () => {
  const { token, role } = useContext(authContext);

  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const hideHeaderFooterPages = ["/loginsignup", "/page2"];

    if (hideHeaderFooterPages.includes(currentUrl)) {
      setShowHeaderFooter(false);
    } else {
      setShowHeaderFooter(true);
    }
  }, []);

  return (
    <>
      {role === "admin" ? <></> : showHeaderFooter && <ShopHeader />}
      <main>
        <Routers />
      </main>
      {role === "admin" ? <></> : showHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
