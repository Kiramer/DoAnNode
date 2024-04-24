import Header from "../components/Header/Header";

import Footer from "../components/Footer/Footer";

import Routers from "../routes/Routers";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";

const Layout = () => {
  const { token, role } = useContext(authContext);
  return (
    <>
      {role === "admin" ? <></> : <Header />}
      <main>
        <Routers />
      </main>
      {role === "admin" ? <></> : <Footer />}
    </>
  );
};

export default Layout;
